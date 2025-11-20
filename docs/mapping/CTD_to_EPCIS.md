# Mapping: CTD → EPCIS ObjectEvent

CTD messages do NOT directly enter the DPP.
They are always transformed into **EPCIS 2.0 ObjectEvents**.

Pipeline:
CTD → oneM2M → TranslatorAE → EPCIS → DPP

---

## 1. Identity

CTD:
- `iso6346`

EPCIS:
- `epcis:epcList = ["urn:epc:id:container:<iso6346>"]`

---

## 2. Time

CTD:
- `time` (GNSS timestamp)

EPCIS:
- `epcis:eventTime`
- `epcis:eventTimeZoneOffset` = "+00:00"

---

## 3. Sensor Data → DPP Extension

CTD → EPCIS extension:

- `temperature` → `dpp:temperature`
- `humidity` → `dpp:humidity`
- `pressure` → `dpp:pressure`
- `acc/speed` → `dpp:speed` (converted)
- `door` → `dpp:doorStatus`

Door mapping:
- C → `closed`
- O → `opened`
- T → `unauthorized_open`

---

## 4. E-Seals

If CTD sends e-seals:

- `dpp:eseal = "D"`
- `dpp:eSeals[] = detailed list`

If no e-seals detected:
- `dpp:eseal = "N"`

---

## 5. bizStep / disposition

These are **chosen by business logic** in TranslatorAE.

Example:
- door tamper → bizStep = `security`, disposition = `tampered`

Values must come from GS1 CBV.
