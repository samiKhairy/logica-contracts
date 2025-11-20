// src/mobius/paths.ts
export const CSE_BASE = "/Mobius";

// Per-container CTD AE
export function ctdAeName(iso6346: string): string {
    return `CTD_${iso6346}`;
}
export function ctdAePath(iso6346: string): string {
    return `${CSE_BASE}/${ctdAeName(iso6346)}`;
}

// DPP Central AE (single logical AE like manual)
export const DPP_AE_NAME = "AE-DryContainerDPP";

export function dppAePath(): string {
    return `${CSE_BASE}/${DPP_AE_NAME}`;
}

export function dppCntIdentification(): string {
    return `${dppAePath()}/Identification`;
}
export function dppCntEpcisEvents(): string {
    return `${dppAePath()}/EPCIS-Events`;
}
export function dppCntMaintenance(): string {
    return `${dppAePath()}/MaintenanceRecords`;
}
export function dppCntInspection(): string {
    return `${dppAePath()}/InspectionRecords`;
}
export function dppCntSustainability(): string {
    return `${dppAePath()}/Sustainability`;
}
export function dppCntSupplyChain(): string {
    return `${dppAePath()}/SupplyChain`;
}
export function dppCntDocumentation(): string {
    return `${dppAePath()}/Documentation`;
}
