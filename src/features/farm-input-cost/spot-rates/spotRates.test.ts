import { describe, it, expect } from 'vitest';
import { getLatestRate, sortRatesByDate, SpotRateEntry } from './spotRates';

describe('Spot Rates Logic', () => {
  const rates: SpotRateEntry[] = [
    { id: '1', date: '2025-01-01', product: 'prod-1', price: 100 },
    { id: '2', date: '2025-03-01', product: 'prod-1', price: 120 },
    { id: '3', date: '2025-02-01', product: 'prod-1', price: 110 },
    { id: '4', date: '2025-02-15', product: 'prod-2', price: 50 },
  ];

  it('sorts rates by date correctly', () => {
    const sorted = sortRatesByDate(rates);
    expect(sorted[0].date).toBe('2025-01-01');
    expect(sorted[1].date).toBe('2025-02-01');
    expect(sorted[2].date).toBe('2025-02-15');
    expect(sorted[3].date).toBe('2025-03-01');
  });

  it('gets the latest rate successfully for a valid product', () => {
    const latest = getLatestRate(rates, 'prod-1');
    expect(latest).not.toBeNull();
    expect(latest?.date).toBe('2025-03-01');
    expect(latest?.price).toBe(120);
  });

  it('returns null for unrecorded product', () => {
    const latest = getLatestRate(rates, 'prod-3');
    expect(latest).toBeNull();
  });
});
