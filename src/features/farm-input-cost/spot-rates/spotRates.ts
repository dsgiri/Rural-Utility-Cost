export interface SpotRateEntry {
  id: string;
  date: string; // YYYY-MM-DD
  product: string;
  price: number;
}

export interface SpotRateProduct {
  id: string;
  name: string;
  unit: string;
  category: 'fertilizer' | 'seed' | 'chemical' | 'other';
}

export function sortRatesByDate(rates: SpotRateEntry[]): SpotRateEntry[] {
  return [...rates].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getLatestRate(rates: SpotRateEntry[], productId: string): SpotRateEntry | null {
  const filtered = rates.filter(r => r.product === productId);
  if (filtered.length === 0) return null;
  return sortRatesByDate(filtered).pop() || null;
}
