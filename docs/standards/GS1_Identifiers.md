# GS1 Identification Keys

The LOGICA DPP and EPCIS models use several GS1 identifiers:

- **EPC URNs** for containers:
  `urn:epc:id:container:<ISO6346>`
- **GTIN** for identification (optional)
- **GLN** for supply chain partners

## Why they are strings in schemas

The JSON Schemas treat them as plain strings:

- GTIN
- GLN
- EPC

This is intentional because GS1 identifier validation rules are:

- long (check digits)
- region-dependent
- version-dependent
- too strict for early phases

## Where GS1 validation happens

GS1 validation is applied in:

- TranslatorAE (event creation)
- ExternalAE (API input)
- DPP Core (snapshot building)
