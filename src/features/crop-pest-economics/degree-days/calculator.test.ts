import { describe, it, expect } from 'vitest';
import { calculateDegreeDays, DegreeDayInput } from './calculator';

describe('Degree-Day Calculator', () => {
  it('calculates temperature-based degree-day calculation', () => {
    const input: DegreeDayInput = {
      lowerThreshold: 50,
      upperThreshold: null,
      entries: [
        { date: '2025-05-01', minTemp: 50, maxTemp: 80 }
      ]
    };
    
    // (80 + 50) / 2 = 65
    // 65 - 50 = 15 DD
    
    const result = calculateDegreeDays(input);
    expect(result.results[0].dailyDD).toBe(15);
    expect(result.totalAccumulated).toBe(15);
  });
  
  it('handles accumulated degree-days and upper threshold', () => {
    const input: DegreeDayInput = {
      lowerThreshold: 40,
      upperThreshold: 80,
      entries: [
        { date: '2025-05-01', minTemp: 30, maxTemp: 90 }, // Max clamped to 80. (80+30)/2 = 55. 55-40 = 15
        { date: '2025-05-02', minTemp: 30, maxTemp: 40 }, // (40+30)/2 = 35. 35-40 = -5 => 0
        { date: '2025-05-03', minTemp: 50, maxTemp: 70 }  // (70+50)/2 = 60. 60-40 = 20
      ]
    };
    
    const result = calculateDegreeDays(input);
    expect(result.results[0].dailyDD).toBe(15);
    expect(result.results[1].dailyDD).toBe(0);
    expect(result.results[2].dailyDD).toBe(20);
    expect(result.totalAccumulated).toBe(35);
  });
  
  it('handles safety check where min > max', () => {
    const input: DegreeDayInput = {
      lowerThreshold: 50,
      upperThreshold: null,
      entries: [
        { date: '2025-05-01', minTemp: 80, maxTemp: 50 } // swapped
      ]
    };
    
    const result = calculateDegreeDays(input);
    expect(result.results[0].dailyDD).toBe(15);
  });
});
