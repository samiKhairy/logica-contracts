# DCSA Track & Trace v3 – Mapping

DCSA Track & Trace defines the standard shipping events used between liner carriers.

The LOGICA system can map EPCIS events to DCSA semantic events.

## Examples

### Door-Open Event (CTD → EPCIS)
- CTD `door = O`
- EPCIS event with:
  - bizStep = inspection
  - disposition = active

### Unauthorized Opening / Tamper
- CTD `door = T`
- or E-Seal `TAMPERED`
- EPCIS event with:
  - bizStep = security
  - disposition = damaged

### Shipment Movement
- EPCIS `OBSERVE` events at ports can map to:
  - `CONTAINER_GATE_IN`
  - `CONTAINER_GATE_OUT`

This mapping is implemented by application logic (not by the contracts).
