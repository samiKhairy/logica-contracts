# ISO/TS 18625 – CTD Data Model Mapping

ISO/TS 18625 defines:

- Standard data elements for Container Tracking Devices (CTDs)
- Behavioural and operational requirements

The CTD payloads in this project (telemetry, alarms, e-seals) are based on
the specific CTD implementation described in the CTD paper and the engineer
document.

## Role in this system

- The existing CTD payloads cover: identity, GNSS, motion, environment,
  connectivity, power, and security.
- ISO/TS 18625 can be used to:
  - confirm which CTD fields are mandatory vs optional
  - align naming and semantics with other CTD vendors
  - extend the model if new CTD devices are introduced later

For now, the contracts library does not enforce ISO/TS 18625 fields beyond
what is present in the CTD payload spec; alignment is done in design and
documentation.
