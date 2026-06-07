export interface SeedInput {
  cropName: string;
  pricePerUnit: number;
  seedsPerUnit: number;
  seedingRatePerAcre: number;
  acres: number;
  plantingType: 'row' | 'pasture';
  germinationRate: number; // percentage
  technologyFee: number; // per unit, typical in row crops
}

export interface SeedResult {
  totalCost: number;
  costPerAcre: number;
  unitsRequired: number;
  totalSeedsRequired: number;
  liveSeedsPerAcre: number;
  totalCostPerUnit: number; // Includes tech fee
  costPer1000LiveSeeds: number | null;
}

export function calculateSeedCost(input: SeedInput): SeedResult {
  const {
    pricePerUnit,
    seedsPerUnit,
    seedingRatePerAcre,
    acres,
    germinationRate,
    technologyFee,
  } = input;

  const totalCostPerUnit = pricePerUnit + technologyFee;
  
  // Total units needed per acre
  // E.g. seeding rate is 32000 seeds/ac, unit has 80000 seeds = 0.4 units/ac
  // Or seeding rate is 15 lbs/ac, unit has 50 lbs = 0.3 units/ac
  const unitsPerAcre = seedsPerUnit > 0 ? seedingRatePerAcre / seedsPerUnit : 0;
  
  const costPerAcre = unitsPerAcre * totalCostPerUnit;
  const unitsRequired = unitsPerAcre * acres;
  const totalCost = costPerAcre * acres;
  const totalSeedsRequired = seedingRatePerAcre * acres;

  const liveSeedsPerAcre = seedingRatePerAcre * (germinationRate / 100);

  const costPer1000LiveSeeds = liveSeedsPerAcre > 0 ? (costPerAcre / liveSeedsPerAcre) * 1000 : null;

  return {
    totalCost,
    costPerAcre,
    unitsRequired,
    totalSeedsRequired,
    liveSeedsPerAcre,
    totalCostPerUnit,
    costPer1000LiveSeeds,
  };
}
