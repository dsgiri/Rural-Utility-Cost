export type FertilizerType = 'dry' | 'liquid';

export interface FertilizerInput {
  name: string;
  type: FertilizerType;
  pricePerUnit: number; // For dry: per ton, For liquid: per gallon
  applicationRate: number; // For dry: lbs/acre, For liquid: gallons/acre
  acres: number;
  nutrientN: number; // Percentage 0-100
  nutrientP: number;
  nutrientK: number;
  nutrientS: number;
  density?: number; // Only for liquid: lbs per gallon (e.g., 10.67 for 28% UAN)
}

export interface FertilizerResult {
  totalCost: number;
  costPerAcre: number;
  totalPoundsApplied: number; // Total physical product
  poundsOfN: number; // lbs/acre
  poundsOfP: number;
  poundsOfK: number;
  poundsOfS: number;
  costPerLbN: number | null;
  costPerLbP: number | null;
  costPerLbK: number | null;
  costPerLbS: number | null;
}

export function calculateFertilizerCost(input: FertilizerInput): FertilizerResult {
  const {
    type,
    pricePerUnit,
    applicationRate,
    acres,
    nutrientN,
    nutrientP,
    nutrientK,
    nutrientS,
    density = 10.5,
  } = input;

  let costPerAcre = 0;
  let totalCost = 0;
  let totalPoundsApplied = 0;
  let poundsAppliedPerAcre = 0;

  if (type === 'dry') {
    // price is per ton (2000 lbs)
    const costPerLb = pricePerUnit / 2000;
    costPerAcre = applicationRate * costPerLb;
    totalCost = costPerAcre * acres;
    poundsAppliedPerAcre = applicationRate;
    totalPoundsApplied = applicationRate * acres;
  } else {
    // price is per gallon
    costPerAcre = applicationRate * pricePerUnit;
    totalCost = costPerAcre * acres;
    poundsAppliedPerAcre = applicationRate * density;
    totalPoundsApplied = poundsAppliedPerAcre * acres;
  }

  // Calculate pounds of nutrient per acre
  const poundsOfN = poundsAppliedPerAcre * (nutrientN / 100);
  const poundsOfP = poundsAppliedPerAcre * (nutrientP / 100);
  const poundsOfK = poundsAppliedPerAcre * (nutrientK / 100);
  const poundsOfS = poundsAppliedPerAcre * (nutrientS / 100);

  // Simple heuristic for cost per lb of specific nutrient:
  // This assumes the product is single-nutrient for the sake of cost/lb calculation.
  // If multi-nutrient, cost/lb of a specific nutrient is just total price divided by total lbs of that nutrient
  // (Note: this is simplified, true multi-nutrient allocation requires simultaneous equations or valuing one at 0)
  const costPerLbN = poundsOfN > 0 ? costPerAcre / poundsOfN : null;
  const costPerLbP = poundsOfP > 0 ? costPerAcre / poundsOfP : null;
  const costPerLbK = poundsOfK > 0 ? costPerAcre / poundsOfK : null;
  const costPerLbS = poundsOfS > 0 ? costPerAcre / poundsOfS : null;

  return {
    totalCost,
    costPerAcre,
    totalPoundsApplied,
    poundsOfN,
    poundsOfP,
    poundsOfK,
    poundsOfS,
    costPerLbN,
    costPerLbP,
    costPerLbK,
    costPerLbS,
  };
}
