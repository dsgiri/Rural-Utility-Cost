# Usage Instructions

*This file provides a standardized template for outlining how a specific calculator should be used. Include this in the calculator's dedicated feature directory if the calculator involves complex steps, heavy assumptions, or risk of misuse. Skip for trivial tools.*

## Overview
**Calculator:** Solar Battery Sizing Calculator
**Purpose:** Calculate the required battery capacity and solar panel array size for an off-grid system based on appliance power demand.
**Target Audience:** Off-grid homesteaders, RVers, and rural cabin owners.

## Key Rules & Assumptions
- **Rule 1:** Battery calculations pad total capacity to account for Depth of Discharge (DoD) limitations, assuming users use standard Lead-Acid or AGM batteries which should not drain past 50%.
- **Rule 2:** Generation requirements include a 20% inefficiency penalty to cover DC-to-AC conversion loss.
- **Rule 3:** Solar panel counts assume standard 400W nominal panels with ~75% real-world efficiency output.

## Step-by-Step Guide
1. **Target Sun-Hours:** Enter your ZIP code to pull regional sun-hours. Or manually assume 5 hours as a national average.
2. **Determine Autonomy:** Ensure you have enough stored power to survive 2 or 3 cloudy days. Entering "3" means the battery can sustain your load for 3 days without any sun.
3. **Build the Load Profile:** List every appliance you intend to power, its wattage, and how many hours it runs per day.
4. **Review Hardware Target:** Size your battery and panels against the output recommendations.

## Advanced Notes / Edge Cases
- **Disclaimer:** Air conditioning, electric heat, and hot water heaters require astronomical amounts of batteries and panels. Users are advised to use propane, wood, or solar thermal for heavy climate loads.
