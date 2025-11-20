# LOGICA Contracts – Documentation

This `docs` folder explains how the shared contracts (CTD, EPCIS, DPP) map to:

- external standards (GS1, ISO, DCSA, oneM2M)
- the CTD engineering model
- the DPP project manual
- the EPCIS 2.0 JSON-LD event model
- the internal architecture of the LOGICA system

The documentation here is intentionally concise.
It links the project’s contract models to the authoritative project documents:

- CTD Data Model (engineering document)
- CTD / 5GT Architecture Papers
- Dry Container DPP Manual (English)
- EPCIS 2.0 JSON-LD
- oneM2M (Mobius CSE structure)

If a conflict arises, **these external documents override everything else**.

The contract library does *not* guess or invent fields.
Everything in `/schemas` and `/src/types` must match the official project documentation.
