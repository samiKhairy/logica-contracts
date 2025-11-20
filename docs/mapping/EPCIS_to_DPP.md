# Mapping: EPCIS → DPP Snapshot

The DPP snapshot includes:

- identification
- dimensions
- production
- epcis: full event history
- maintenance + inspection
- sustainability
- supply chain
- documentation

EPCIS contributes primarily to:

- epcis.events[]
- sustainability.trips (movement)
- supplyChain.partners (GLNs in events)

The DPP Core service computes derived information using:

- EPCIS event data
- timestamps
- readings
- external voyage / AIS data (for emissions & distances)
