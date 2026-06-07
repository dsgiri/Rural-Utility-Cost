import { describe, it, expect } from 'vitest';
import { calculateThreshold, ThresholdInput } from './calculator';

describe('Economic Threshold Calculator', () => {
  it('calculates threshold logic correctly', () => {
    const input: ThresholdInput = {
      cropValuePerUnit: 4.5,
      controlCostPerAcre: 20,
      controlEffectiveness: 80,
      injuryPerPestUnit: 0.5,
      yieldUnit: 'bushels',
      pestName: 'Aphids',
      pestUnit: 'per plant'
    };
    
    const result = calculateThreshold(input);
    
    expect(result.isValid).toBe(true);
    
    // EIL = C / (V * I * K)
    // C = 20
    // V = 4.5
    // I = 0.5
    // K = 0.8
    // EIL = 20 / (4.5 * 0.5 * 0.8) = 20 / 1.8 = 11.111...
    expect(result.economicInjuryLevel).toBeCloseTo(11.11, 2);
    
    // ET = 80% of EIL = 8.888...
    expect(result.economicThreshold).toBeCloseTo(8.89, 2);
  });

  it('handles invalid input handling', () => {
    const input: ThresholdInput = {
      cropValuePerUnit: 0,
      controlCostPerAcre: 20,
      controlEffectiveness: 0,
      injuryPerPestUnit: 0,
      yieldUnit: 'bushels',
      pestName: 'Aphids',
      pestUnit: 'per plant'
    };
    
    const result = calculateThreshold(input);
    expect(result.isValid).toBe(false);
  });
});
