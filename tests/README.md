# Schema Validation Test Suite

This directory contains all automated tests for validating the JSON Schemas and
sample payloads used in the **LOGICA CTD + DPP contract library**.

These tests ensure:

- All JSON Schemas are valid Draft 2020-12 schemas.
- All sample payloads conform exactly to their schema.
- No accidental breaking changes can enter the repository.
- TypeScript definitions in `/src/types` stay aligned with the schemas.

This testing approach mirrors the practices used in large-scale industrial IoT
systems (AWS IoT, Azure Digital Twins, GS1 EPCIS ecosystems, maritime OEMs).

---

##  Test Structure

```

tests/
├── schema/
│   ├── test-ctd-telemetry.sh
│   ├── test-ctd-alarm.sh
│   ├── test-ctd-eseal.sh
│   ├── test-epcis-object-event.sh
│   └── test-dpp-model.sh
└── README.md

````

Each script validates a specific JSON Schema against its sample payload.

---

##  Running All Tests

### **If you are on macOS / Linux**
Make scripts executable once:

```sh
chmod +x tests/schema/*.sh
````

Run all:

```sh
tests/schema/test-ctd-telemetry.sh &&
tests/schema/test-ctd-alarm.sh &&
tests/schema/test-ctd-eseal.sh &&
tests/schema/test-epcis-object-event.sh &&
tests/schema/test-dpp-model.sh
```

---

## 🪟 Running Tests on Windows (PowerShell or CMD)

You have two correct options:

---

### ✅ **Option A — Run using WSL (recommended)**

If you have WSL installed:

```powershell
wsl bash ./tests/schema/test-ctd-telemetry.sh
wsl bash ./tests/schema/test-ctd-alarm.sh
wsl bash ./tests/schema/test-ctd-eseal.sh
wsl bash ./tests/schema/test-epcis-object-event.sh
wsl bash ./tests/schema/test-dpp-model.sh
```

---

### ✅ **Option B — Run manually with AJV (Windows-native)**

You can run AJV directly without `.sh` files:
run this in logica-contracts folder

```powershell
npx ajv validate --spec=draft2020 -s schemas/ctd-telemetry.schema.json -d samples/ctd-telemetry.json
npx ajv validate --spec=draft2020 -s schemas/ctd-alarm.schema.json -d samples/ctd-alarm.json
npx ajv validate --spec=draft2020 -s schemas/ctd-eseal.schema.json -d samples/ctd-eseal.json
npx ajv validate --spec=draft2020 --allowUnionTypes -s schemas/epcis-object-event.schema.json -d samples/epcis-object-event.json
npx ajv validate --spec=draft2020 --allowUnionTypes -s schemas/dpp-model.schema.json -d samples/dpp.json
```

This gives exactly the same validation results.

---

## 🧪 Running a Single Test Manually

Example:

```sh
npx ajv validate --spec=draft2020 -s schemas/ctd-telemetry.schema.json -d samples/ctd-telemetry.json
```

This checks:

* the schema is valid
* the sample matches it
* all required fields exist
* all types are correct

