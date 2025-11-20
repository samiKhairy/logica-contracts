# ISO 18185-3 – Electronic Seals

ISO 18185-3 standardizes:

- e-seal behavior
- tampering rules
- identifiers
- timestamps
- security model

## Mapping to LOGICA e-seal payload

Our CTD e-seal message includes:

- `seal_status`: OPEN | CLOSED | TAMPERED
- `chip_id`
- `seal_id`
- `seal_date` (YYYYMMDDHHMMSS)

These exactly match the state model described in ISO 18185-3.

## Integration notes

This contract repo does not re-encode ISO 18185.

When integrating:
- validate seal state transitions
- ensure tamper detection triggers EPCIS events
