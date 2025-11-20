# EPCIS CBV – Required Usage

The EPCIS 2.0 ObjectEvent model in the LOGICA system uses:

- `epcis:bizStep`
- `epcis:disposition`

These fields must use values from the **GS1 Core Business Vocabulary (CBV)**.

## Why CBV is not enforced in the schema

The JSON Schema in `/schemas/epcis-object-event.schema.json` keeps both fields as:

```json
"epcis:bizStep": { "type": "string" }
"epcis:disposition": { "type": "string" }
