const FAVORITES_KEY = 'rural_favorites';

export function getStoredFavorites(): string[] {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed)) {
      return parsed.filter(item => typeof item === 'string');
    }
    return [];
  } catch (e) {
    console.error('Failed to parse favorites from localStorage', e);
    return [];
  }
}

export function setStoredFavorites(favorites: string[]): void {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (e) {
    console.error('Failed to save favorites to localStorage', e);
  }
}
