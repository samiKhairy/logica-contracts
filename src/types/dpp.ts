/**
 * Digital Product Passport (DPP) TypeScript Model
 * ------------------------------------------------
 * This file defines the internal TypeScript DTOs for the
 * Digital Product Passport of the Dry Container.
 *
 * All structures and fields come directly from:
 *  - Manuale DPP (English version)
 *  - EPCIS 2.0 JSON-LD structure
 *
 * These types represent the 8 functional areas of the Dry Container DPP:
 *  1. Identification
 *  2. Dimensions & Technical Specs
 *  3. Manufacturer & Production
 *  4. EPCIS 2.0 Event History
 *  5. Maintenance & Inspection
 *  6. Sustainability & End of Life
 *  7. Supply Chain Traceability
 *  8. Technical Documentation
 */

import { EpcisObjectEvent } from "./epcis";

/* ------------------------------------------------------------------------
 * 1. Identification (Manual 3.5.1)
 * --------------------------------------------------------------------- */

export interface DppIdentification {
    /** EPC URN of the container (urn:epc:id:container:<ISO6346>) */
    epc: string;

    /** Fixed type for Dry Container Passport */
    type: "dpp:DryContainerPassport";

    /** Optional GS1 GTIN for the asset */
    gtin?: string;

    /** GLN of the container owner */
    glnOwner?: string;
}

/* ------------------------------------------------------------------------
 * 2. Dimensions & Technical Specifications (Manual 3.5.2)
 * --------------------------------------------------------------------- */

export interface DppDimensions {
    /** Type of container (e.g. "dry") */
    containerType: string;

    /** External length in meters */
    externalLengthM?: number;

    /** External width in meters */
    externalWidthM?: number;

    /** External height in meters */
    externalHeightM?: number;

    /** Internal volume in cubic meters */
    internalVolumeM3?: number;
}

/* ------------------------------------------------------------------------
 * 3. Manufacturer & Production (Manual 3.5.3)
 * --------------------------------------------------------------------- */

export interface DppManufacturer {
    /** Manufacturer name (schema:Organization) */
    name: string;

    /** Street address */
    street?: string;

    /** City */
    city?: string;

    /** Region or State (field mentioned in manual) */
    stateOrRegion?: string;

    /** Country */
    country?: string;
}

export interface DppProduction {
    /** Manufacturer details */
    manufacturer: DppManufacturer;

    /** Production date (xsd:date) */
    productionDate?: string;

    /** Container material (e.g., "Corten Steel") */
    material?: string;
}

/* ------------------------------------------------------------------------
 * 4. EPCIS 2.0 Event Section (Manual 3.5.4)
 * --------------------------------------------------------------------- */

export interface DppEpcisSection {
    /** Array of EPCIS ObjectEvents describing lifecycle events */
    events: EpcisObjectEvent[];
}

/* ------------------------------------------------------------------------
 * 5. Maintenance & Inspection (Manual 3.5.5)
 * --------------------------------------------------------------------- */

export type MaintenanceType = "preventive" | "corrective";

export interface DppMaintenanceRecord {
    /** Date of maintenance */
    maintenanceDate: string;

    /** Preventive or corrective */
    maintenanceType: MaintenanceType;

    /** Optional maintenance description */
    description?: string;

    /** Optional replaced parts description */
    partsReplaced?: string;
}

export interface DppInspectionRecord {
    /** Date of inspection */
    inspectionDate: string;

    /** Inspector name or ID */
    inspector?: string;

    /** Outcome of inspection */
    outcome?: string;

    /** Certificate ID if provided */
    certificateID?: string;
}

export interface DppMaintenanceSection {
    maintenanceRecords: DppMaintenanceRecord[];
    inspectionRecords: DppInspectionRecord[];
}

/* ------------------------------------------------------------------------
 * 6. Sustainability & End of Life (Manual 3.5.6)
 * --------------------------------------------------------------------- */

export interface DppTripEmission {
    /** Start timestamp of trip */
    startTime: string;

    /** End timestamp of trip */
    endTime: string;

    /** Distance travelled in km */
    distanceKm?: number;

    /** Estimated CO2 emissions in grams */
    emissionsGCo2?: number;
}

export interface DppSustainabilitySection {
    /** Cumulative emissions over container lifetime */
    cumulativeEmissionsGCo2?: number;

    /** List of per-trip emissions */
    trips?: DppTripEmission[];

    /** % recyclable material */
    recyclablePercentage?: number;

    /** Description of recycling methods */
    recyclingMethods?: string;

    /** Description of reuse potential */
    reusePotential?: string;
}

/* ------------------------------------------------------------------------
 * 7. Supply Chain Traceability (Manual 3.5.7)
 * --------------------------------------------------------------------- */

export interface DppSupplyChainPartner {
    /** Partner GLN */
    partnerGLN: string;

    /** Role in supply chain */
    role: string;

    /** Start time of involvement */
    startTime?: string;

    /** End time of involvement */
    endTime?: string;
}

export interface DppSupplyChainSection {
    partners: DppSupplyChainPartner[];
}

/* ------------------------------------------------------------------------
 * 8. Technical Documentation (Manual 3.5.8)
 * --------------------------------------------------------------------- */

export interface DppTechnicalDocument {
    /** Document headline/title */
    headline: string;

    /** URL of document */
    url: string;

    /** Version */
    version?: string;
}

export interface DppFirmwareHistoryItem {
    /** Firmware version */
    version: string;

    /** Date of update */
    updateDate: string;

    /** Optional notes */
    notes?: string;
}

export interface DppDocumentationSection {
    technicalManuals: DppTechnicalDocument[];
    firmwareHistory: DppFirmwareHistoryItem[];
}

/* ------------------------------------------------------------------------
 * Final Digital Product Passport Snapshot
 * --------------------------------------------------------------------- */

export interface DppSnapshot {
    /** JSON-LD @context */
    "@context": string | string[];

    /** JSON-LD @id — same as EPC URN */
    "@id": string;

    /** Identification section */
    identification: DppIdentification;

    /** Dimensions */
    dimensions?: DppDimensions;

    /** Manufacturer & Production */
    production?: DppProduction;

    /** EPCIS event history */
    epcis?: DppEpcisSection;

    /** Maintenance & Inspection */
    maintenance?: DppMaintenanceSection;

    /** Sustainability */
    sustainability?: DppSustainabilitySection;

    /** Supply Chain */
    supplyChain?: DppSupplyChainSection;

    /** Documentation */
    documentation?: DppDocumentationSection;

    /** Raw JSON-LD capture (optional) */
    rawJsonLd?: unknown;
}
