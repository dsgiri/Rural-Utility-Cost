import { describe, it, expect } from 'vitest';
import { calculateYieldLoss, YieldLossInput } from './calculator';

describe('Yield Loss Calculator', () => {
  it('calculates dollar loss and net impact correctly', () => {
    const input: YieldLossInput = {
      cropType: 'Corn',
      expectedYield: 200,
      yieldUnit: 'bushels',
      percentLoss: 10,
      cropPrice: 5.00,
      controlCost: 20.00,
      acres: 100
    };
    
    const result = calculateYieldLoss(input);
    
    // 200 * 0.10 = 20
    expect(result.lostYieldPerAcre).toBe(20);
    
    // 20 * 5 = 100
    expect(result.dollarLossPerAcre).toBe(100);
    
    // 100 * 100 = 10000
    expect(result.totalDollarLoss).toBe(10000);
    
    // 100 - 20 = 80 per acre
    expect(result.netImpactPerAcre).toBe(80);
    
    // 100 > 20
    expect(result.actionJustified).toBe(true);
  });

  it('handles zero-loss edge cases', () => {
    const input: YieldLossInput = {
      cropType: 'Wheat',
      expectedYield: 80,
      yieldUnit: 'bushels',
      percentLoss: 0,
      cropPrice: 6.00,
      controlCost: 15.00,
      acres: 50
    };
    
    const result = calculateYieldLoss(input);
    
    expect(result.lostYieldPerAcre).toBe(0);
    expect(result.dollarLossPerAcre).toBe(0);
    expect(result.netImpactPerAcre).toBe(-15);
    expect(result.actionJustified).toBe(false);
  });
});
