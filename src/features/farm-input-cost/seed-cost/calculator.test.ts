import { describe, it, expect } from 'vitest';
import { calculateSeedCost, SeedInput } from './calculator';

describe('Seed Cost Calculator', () => {
  it('calculates seed requirements and cost correctly', () => {
    const input: SeedInput = {
      cropName: 'Corn',
      pricePerUnit: 250,
      seedsPerUnit: 80000,
      seedingRatePerAcre: 32000,
      acres: 100,
      plantingType: 'row',
      germinationRate: 95,
      technologyFee: 10
    };
    
    const result = calculateSeedCost(input);
    
    // total cost per unit: 260
    expect(result.totalCostPerUnit).toBe(260);
    
    // units per acre = 32000 / 80000 = 0.4
    // cost per acre = 0.4 * 260 = 104
    expect(result.costPerAcre).toBe(104);
    
    // total cost = 104 * 100 = 10400
    expect(result.totalCost).toBe(10400);
    
    // total seeds required = 32000 * 100 = 3200000
    expect(result.totalSeedsRequired).toBe(3200000);
    
    // live seeds per acre = 32000 * 0.95 = 30400
    expect(result.liveSeedsPerAcre).toBe(30400);
    
    // cost per 1000 live seeds = (104 / 30400) * 1000 = ~3.42
    expect(result.costPer1000LiveSeeds).toBeCloseTo(3.42, 2);
  });
});
