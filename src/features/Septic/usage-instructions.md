# Usage Instructions

*This file provides a standardized template for outlining how a specific calculator should be used. Include this in the calculator's dedicated feature directory if the calculator involves complex steps, heavy assumptions, or risk of misuse. Skip for trivial tools.*

## Overview
**Calculator:** Septic Tank Size Calculator
**Purpose:** Calculate the required septic tank size based on the number of bedrooms and soil type for residential rural properties.
**Target Audience:** Rural homeowners, home builders, and prospective land buyers.

## Key Rules & Assumptions
- **Rule 1:** Most county building codes base septic sizing on the number of bedrooms, not the square footage or current headcount.
- **Rule 2:** The EPA baseline recommends 1,000 gallons for a 1-3 bedroom home, adding 250 gallons per additional bedroom.
- **Rule 3:** Heavy clay or poor percolation soil increases the required settling tank capacity and significantly expands the drain field requirement.

## Step-by-Step Guide
1. **Enter Bedrooms:** Input the number of officially recognized bedrooms in the house.
2. **Select State:** Select your state for tracking rules (local inspectors override general rules based on high-flow fixtures).
3. **Specify Soil Condition:** Choose "poor" if you have heavy clay or slow percolation. This applies a generic +25% capacity modifier to the recommendation.
4. **Review Results:** Evaluate the estimated drain field square footage and the cost range.

## Advanced Notes / Edge Cases
- **Disclaimer:** Standard EPA calculations are used here. Using a garbage disposal typically requires bumping up your tank volume by an entire size tier (e.g. from 1,000 to 1,250 or 1,500).
- **Drain field math:** Drain field calculations are highly simplified heuristics and vary wildly depending on an actual soil perc test.
