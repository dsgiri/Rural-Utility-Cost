# Usage Instructions

*This file provides a standardized template for outlining how a specific calculator should be used. Include this in the calculator's dedicated feature directory if the calculator involves complex steps, heavy assumptions, or risk of misuse. Skip for trivial tools.*

## Overview
**Calculator:** Cable Size Calculator
**Purpose:** Calculate the required AWG wire size to safely carry a DC current over a specific distance without excessive voltage drop.
**Target Audience:** Off-grid homesteaders, RVers, solar installers, and rural cabin owners.

## Key Rules & Assumptions
- **Rule 1:** The calculator defaults to a 3% acceptable voltage drop, which is standard for most critical DC loads (like solar to charge controller or inverter to battery).
- **Rule 2:** The calculator uses copper wire resistivity (0.01724 ohm-mm²/m) by default.
- **Rule 3:** Distance is the ONE-WAY length of the entire wire run, but the voltage drop formula automatically accounts for the round trip.

## Step-by-Step Guide
1. **Enter Voltage & Current:** Input your system voltage (e.g. 12V, 24V, 48V) and the maximum continuous current (Amps) the circuit will carry.
2. **Set the Distance:** Input the length of the wire run from the power source to the load (one-way).
3. **Review Recommendation:** The tool will output the absolute minimum AWG required to maintain voltage within a 3% drop. It is usually wise to size up one extra gauge for safety.

## Advanced Notes / Edge Cases
- **Disclaimer:** This tool calculates for voltage drop, NOT maximum safe ampacity in conduit. Always verify that your chosen wire can safely carry the required current without overheating (based on NEC insulation tables), especially in hot environments or bundled conduits.
