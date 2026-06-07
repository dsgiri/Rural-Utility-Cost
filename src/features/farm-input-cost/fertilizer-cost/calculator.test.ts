import { describe, it, expect } from 'vitest';
import { calculateFertilizerCost, FertilizerInput } from './calculator';

describe('Fertilizer Cost Calculator', () => {
  it('calculates dry fertilizer cost accurately', () => {
    const input: FertilizerInput = {
      name: 'Urea',
      type: 'dry',
      pricePerUnit: 600, // per ton
      applicationRate: 200, // lbs/acre
      acres: 50,
      nutrientN: 46,
      nutrientP: 0,
      nutrientK: 0,
      nutrientS: 0
    };
    
    const result = calculateFertilizerCost(input);
    
    // cost per lb = 600 / 2000 = 0.3
    // cost per acre = 200 * 0.3 = 60
    expect(result.costPerAcre).toBe(60);
    // total cost = 60 * 50 = 3000
    expect(result.totalCost).toBe(3000);
    // total physical = 200 * 50 = 10000
    expect(result.totalPoundsApplied).toBe(10000);
    
    // pounds of N per acre = 200 * 0.46 = 92
    expect(result.poundsOfN).toBe(92);
    // cost per lb N = 60 / 92 = ~0.65217
    expect(result.costPerLbN).toBeCloseTo(0.652, 3);
  });

  it('calculates liquid fertilizer cost accurately', () => {
    const input: FertilizerInput = {
      name: 'UAN 28%',
      type: 'liquid',
      pricePerUnit: 3, // per gallon
      applicationRate: 20, // gallons/acre
      acres: 100,
      nutrientN: 28,
      nutrientP: 0,
      nutrientK: 0,
      nutrientS: 0,
      density: 10.67
    };
    
    const result = calculateFertilizerCost(input);
    
    // cost per acre = 3 * 20 = 60
    expect(result.costPerAcre).toBe(60);
    // total cost = 60 * 100 = 6000
    expect(result.totalCost).toBe(6000);
    
    // pounds applied per acre = 20 * 10.67 = 213.4
    // total pounds applied = 213.4 * 100 = 21340
    expect(result.totalPoundsApplied).toBe(21340);
    
    // N per acre = 213.4 * 0.28 = 59.752
    expect(result.poundsOfN).toBeCloseTo(59.752, 3);
  });
});
