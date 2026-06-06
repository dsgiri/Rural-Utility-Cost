# 🧪 Functional Test Cases

This document outlines the user-facing functional scenarios that must be verified across the application. It ensures business logic holds up to real-world edge cases.

## 1. Global Navigation & Interactions (`GLB`)
| Test ID | Scenario | Steps | Expected Result | Status |
|---|---|---|---|---|
| F-GLB-01 | SPA Routing | Click calculators from the Home page grid or sidebar. | UI transitions instantly without a full page reload; URL updates. | ✅ Pass |
| F-GLB-02 | Recently Used | Browse different calculators, return to Home. | The "Recently Used" carousel populates and accurately reflects visited paths. | ✅ Pass |
| F-GLB-03 | Search Filtering | Type "Solar" or "Internet" in the Home page search bar. | Calculator grid instantly filters to relevant modules without refreshing. | ✅ Pass |
| F-GLB-04 | Reset Actions | Fill a calculator form, and click "Reset Calculator" (if present, e.g., Grant Match). | Inputs reset to default/zero states without crashing. | ✅ Pass |

## 2. Property & Construction Calculators (`PRP`)
*(Applies to Rural Land, Septic, Fill Dirt, Gravel, Fencing, Well)*
| Test ID | Scenario | Steps | Expected Result | Status |
|---|---|---|---|---|
| F-PRP-01 | Basic Math Outputs | Enter standard variables (e.g., 20 tons of gravel at $20/ton + $50 delivery). | Accurate final cost output ($450). | ✅ Pass |
| F-PRP-02 | Depth/Volume Bounding | Enter negative depth or dimensions for Fill Dirt. | Negative values are prevented or clamped to 0/1. | ✅ Pass |
| F-PRP-03 | Custom Overrides | Switch between pre-set pricing (e.g., standard fencing material) and manual override. | Calculations dynamically shift to use manual input numbers. | ✅ Pass |

## 3. Energy & Utilities Calculators (`PWR`)
*(Applies to Gen Runtime, Gen Fuel Cost, Peak Demand, Water Fill, Off-grid Solar, etc.)*
| Test ID | Scenario | Steps | Expected Result | Status |
|---|---|---|---|---|
| F-PWR-01 | Capacity Scaling | Enter tank size = 0 for Propane or Generator calculations. | App does not crash with `NaN` or `Infinity`, defaults to 0 duration or shows a polite prompt. | ✅ Pass |
| F-PWR-02 | Runtime Math | Provide known burn rates vs. tank limits. | System accurately produces hours and day outputs, correctly rounding remainders. | ✅ Pass |
| F-PWR-03 | Load Staggering | On Peak Demand, simulate running heavy appliances simultaneously. | Total peak demand accurately summates without skipping overlapping 15-min intervals. | ✅ Pass |

## 4. Agriculture & Habitat Calculators (`FRM`)
*(Applies to Meat Yield, Animal Gestation, Incubation, Habitat Restor. etc.)*
| Test ID | Scenario | Steps | Expected Result | Status |
|---|---|---|---|---|
| F-FRM-01 | Date Math Integrity | Select leap-year start dates or end dates spanning months for Gestation/Incubation. | Correct due dates / hatch dates output accurately using native JS date math. | ✅ Pass |
| F-FRM-02 | Yield Bounding | Enter live weights over physical maximums (e.g., 5000 lbs.) for Meat Yield. | Calculates linearly, gracefully handling comma insertion. | ✅ Pass |
| F-FRM-03 | Component Isolation | Switch animal type on Incubation calculator. | Lock-down and turning dates completely recalculate based on specific species configuration. | ✅ Pass |

## 5. Business & Profit Calculators (`BIZ`)
*(Applies to Pain Point Priority, Cut Cost, Expand Profit, Compliance)*
| Test ID | Scenario | Steps | Expected Result | Status |
|---|---|---|---|---|
| F-BIZ-01 | Matrix Addition | On Pain Point, add a new issue. | Item registers, calculates severity score, and resorts into 'Quick Win' vs 'Long Term'. | ✅ Pass |
| F-BIZ-02 | Matrix Deletion | Delete a row item in Pain Point Priority. | Item is successfully removed from the DOM and synced to `localStorage`. | ✅ Pass |
| F-BIZ-03 | Profit Margin Math | Alter target margin vs current margin in 'Expand Profit'. | Required revenue increases exponentially according to true margin math, not just flat addition. | ✅ Pass |

## 6. Government & Grants Calculators (`GOV`)
*(Applies to Grant Readiness, Grant Finder)*
| Test ID | Scenario | Steps | Expected Result | Status |
|---|---|---|---|---|
| F-GOV-01 | Standard Match Logic | Enter $50,000 cost, 50% match, $0 prior costs. | Calculates exactly $25,000 Out-of-pocket and $25,000 match. | ✅ Pass |
| F-GOV-02 | Reimbursable Bridge | Set $100k project split into 4 phases. | Working Capital Required displays as exactly $25k float needed for phase 1. | ✅ Pass |
| F-GOV-03 | Filter System | Click specific categories in the Grant Finder. | Rendered programs dynamically respond and shrink down to matches. | ✅ Pass |
