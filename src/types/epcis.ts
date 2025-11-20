//epcis.ts
export interface EpcisObjectEventExtensionESeal {
    seal_status: "OPEN" | "CLOSED" | "TAMPERED";
    chip_id: string;
    seal_id: string;
    seal_date: string; // YYYYMMDDHHMMSS
}

export type ESealPresence = "D" | "N"; // detected / not detected

export type DoorStatus = "closed" | "opened" | "unauthorized_open";

export interface EpcisObjectEventExtension {
    // Sensor data from CTD
    "dpp:speed"?: number;
    "dpp:temperature"?: number;
    "dpp:humidity"?: number;
    "dpp:pressure"?: number;

    // E-seal high-level status
    "dpp:eseal"?: ESealPresence;

    // Detailed e-seals
    "dpp:eSeals"?: EpcisObjectEventExtensionESeal[];

    // Door status
    "dpp:doorStatus"?: DoorStatus;

    // Allow additional fields as per dpp_model.jsonld
    [key: string]: unknown;
}

export interface EpcisObjectEvent {
    "@context": string | string[];
    type: "ObjectEvent";
    "epcis:action": "OBSERVE" | "ADD" | "DELETE" | "TRANSFORM";
    "epcis:eventTime": string;           // ISO 8601
    "epcis:eventTimeZoneOffset": string; // e.g. "+00:00"
    "epcis:epcList": string[];           // ["urn:epc:id:container:LMCU1231237"]
    "epcis:bizStep"?: string;
    "epcis:disposition"?: string;
    "epcis:readPoint"?: { id: string };
    "epcis:bizLocation"?: { id: string };
    "epcis:extension"?: {
        "dpp:extension": EpcisObjectEventExtension;
    };
}
