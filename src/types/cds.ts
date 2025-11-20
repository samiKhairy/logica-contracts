// Raw CTD message types based strictly on CTD engineering document.

export interface CtdTelemetryMessage {
    msisdn: string;
    iso6346: string;
    time: string;
    rssi: string;
    cgi: string;
    "ble-m": string; // "0" | "1"
    "bat-soc": string;
    acc: string;
    temperature: string;
    humidity: string;
    pressure: string;
    door: "D" | "O" | "C" | "T";
    gnss: "0" | "1";
    latitude?: string;
    longitude?: string;
    altitude?: string;
    speed?: string;
    heading?: string;
    nsat?: string;
    hdop?: string;
}

export type AlarmSensor = "acc" | "temperature" | "humidity" | "pressure" | "gyro";

export type AlarmType = "0" | "1" | "2";

export interface CtdAlarmItem {
    alarmSensor: AlarmSensor;
    alarmType: AlarmType;
}

export interface CtdAlarmMessage {
    msisdn: string;
    iso6346: string;
    time: string;
    timeSource: "GNSS" | "NB-IoT" | "Local";
    acc: string;
    temperature?: string;
    humidity?: string;
    pressure?: string;
    alarms: CtdAlarmItem[];
}

export type CtdSealStatus = "OPEN" | "CLOSED" | "TAMPERED";

export interface CtdEsealItem {
    seal_status: CtdSealStatus;
    chip_id: string;
    seal_id: string;
    seal_date: string; // YYYYMMDDHHMMSS
}

export interface CtdEsealMessage {
    "e-seals": CtdEsealItem[];
}
