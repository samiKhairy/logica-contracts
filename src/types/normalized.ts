import { CtdTelemetryMessage, CtdAlarmMessage, CtdEsealMessage } from "./ctd";

export type CtdMessageKind = "telemetry" | "alarm" | "eseal";

export interface CtdPayloadBase {
    kind: CtdMessageKind;
    msisdn: string;
    iso6346: string;
    time: string;
}

export interface CtdTelemetryNormalized extends CtdPayloadBase {
    kind: "telemetry";
    raw: CtdTelemetryMessage;
    gnssFix: boolean;
    accX?: number;
    accY?: number;
    accZ?: number;
    latitude?: number;
    longitude?: number;
    altitudeMeters?: number;
    speedMs?: number | null;
    headingDeg?: number | null;
}

export interface CtdAlarmNormalized extends CtdPayloadBase {
    kind: "alarm";
    raw: CtdAlarmMessage;
}

export interface CtdEsealNormalized extends CtdPayloadBase {
    kind: "eseal";
    raw: CtdEsealMessage;
}

export type CtdPayload =
    | CtdTelemetryNormalized
    | CtdAlarmNormalized
    | CtdEsealNormalized;
