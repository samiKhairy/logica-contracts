# External Standards Overview

The LOGICA CTD + DPP system aligns with the following external standards:

## Primary Standards (mandatory)

### 1. CTD Engineering Model & 5GT Papers
Defines:
- CTD telemetry structure
- alarm semantics
- e-seal payloads
- GNSS, accelerometer, door, power fields
- NB-IoT + BLE Mesh architecture
- UDP → OneM2M ingestion chain

### 2. oneM2M (Mobius CSE)
Used for:
- AEs, CNTs, CINs
- DPP storage structure
- CTD device namespace structure

### 3. EPCIS 2.0 JSON-LD
Used for:
- lifecycle events (ObjectEvent)
- door events
- e-seal events
- location updates
- tamper events
- extension fields (`dpp:*`)

### 4. Digital Product Passport Manual (English)
Defines the **eight functional areas**:
1. Identification  
2. Dimensions  
3. Manufacturer & Production  
4. EPCIS Event History  
5. Maintenance  
6. Inspection  
7. Sustainability  
8. Supply Chain  
9. Documentation  

These map 1:1 with `/src/types/dpp.ts`.

---

## Secondary Standards (integration-focused)

### GS1 CBV (Core Business Vocabulary)
Defines:
- allowed values for `bizStep`
- allowed values for `disposition`

Our schemas intentionally keep them as `string` until integration hardening.

### GS1 Identification Keys
Defines structure for:
- GTIN
- GLN
- EPC URNs (e.g., `urn:epc:id:container:<ISO6346>`)

### ISO/TS 18625 (CTD)
Used for:
- CTD mandatory fields
- telemetry semantics

### ISO 18185-3 (E-Seals)
Used for:
- e-seal state transitions
- tamper semantics

### DCSA Track & Trace v3
Future mapping target for:
- shipping events
- gate movements
- security events
