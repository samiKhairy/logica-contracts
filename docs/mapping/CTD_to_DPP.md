# Mapping: CTD → DPP (Indirect)

There is **no direct CTD → DPP** writing.

CTD → EPCIS → DPP is the correct flow.

## How CTD influences DPP

- `iso6346` → identification.epc
- Motion/environment → EPCIS events
- E-seals → security-related EPCIS events
- Door → EPCIS door events
- Speed → sustainability.trip calculations (with external data)
- Connectivity/power → maintenance diagnostics (future use)

The DPP combines CTD-derived events with external partner data.
