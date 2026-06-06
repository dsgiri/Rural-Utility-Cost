import { describe, it, expect } from 'vitest';
import { calculateGrowth } from './calculator';

describe('Cattle Growth Chart Calculator', () => {
  it('calculates ADG and days to target correctly', () => {
    const result = calculateGrowth({
      currentWeight: 600,
      previousWeight: 500,
      daysBetween: 40,
      targetWeight: 1000
    });
    // weightGained = 100
    // adg = 100 / 40 = 2.5
    // remainingGain = 400
    // daysToTarget = 400 / 2.5 = 160
    
    expect(result.adg).toBe(2.5);
    expect(result.daysToTarget).toBe(160);
    expect(result.status).toBe('ahead of target');
    expect(result.warning).toBeUndefined();
  });

  it('projects future weight correctly based on futureDays', () => {
    const result = calculateGrowth({
      currentWeight: 750,
      previousWeight: 700,
      daysBetween: 25,
      targetWeight: 1200,
      futureDays: 30
    });
    // adg = 50 / 25 = 2.0
    // projectedWeight = 750 + (2.0 * 30) = 810
    
    expect(result.adg).toBe(2.0);
    expect(result.projectedWeight).toBe(810);
    expect(result.status).toBe('on track');
  });

  it('handles negative or zero ADG and flags a warning', () => {
    const result = calculateGrowth({
      currentWeight: 500,
      previousWeight: 500, // zero gain
      daysBetween: 30,
      targetWeight: 1000
    });

    expect(result.adg).toBe(0);
    expect(result.status).toBe('gaining negative/zero');
    expect(result.daysToTarget).toBeNull();
    expect(result.warning).toBeDefined();

    const negativeGain = calculateGrowth({
      currentWeight: 490,
      previousWeight: 500, // negative gain
      daysBetween: 30,
      targetWeight: 1000
    });

    expect(negativeGain.adg).toBeLessThan(0);
    expect(negativeGain.status).toBe('gaining negative/zero');
    expect(negativeGain.daysToTarget).toBeNull();
    expect(negativeGain.warning).toBeDefined();
  });

  it('handles target weight logic (target weight already reached)', () => {
    const result = calculateGrowth({
      currentWeight: 1050,
      previousWeight: 950,
      daysBetween: 50,
      targetWeight: 1000 // target is lower than current weight
    });

    expect(result.remainingGain).toBe(0);
    expect(result.daysToTarget).toBe(0);
  });

  it('throws an error for invalid days or weights', () => {
    expect(() => {
      calculateGrowth({
        currentWeight: 500,
        previousWeight: 400,
        daysBetween: 0, // invalid zero days
        targetWeight: 1000
      });
    }).toThrow('Days between weigh-ins must be greater than zero.');

    expect(() => {
      calculateGrowth({
        currentWeight: -50, // invalid negative weight
        previousWeight: 400,
        daysBetween: 10,
        targetWeight: 1000
      });
    }).toThrow('Weights cannot be negative.');
  });
});
