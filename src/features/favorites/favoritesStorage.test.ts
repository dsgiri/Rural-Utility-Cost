import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { getStoredFavorites, setStoredFavorites } from './favoritesStorage';

describe('favoritesStorage', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('getStoredFavorites', () => {
    it('returns empty array when no data', () => {
      expect(getStoredFavorites()).toEqual([]);
    });

    it('returns empty array on malformed data', () => {
      localStorage.setItem('rural_favorites', '{ "bad": "json" }');
      expect(getStoredFavorites()).toEqual([]);
    });

    it('returns empty array on invalid json string', () => {
      localStorage.setItem('rural_favorites', 'not a json string');
      expect(getStoredFavorites()).toEqual([]);
    });

    it('filters out non-string values from array', () => {
      localStorage.setItem('rural_favorites', JSON.stringify(['/test1', 123, null, '/test2']));
      expect(getStoredFavorites()).toEqual(['/test1', '/test2']);
    });

    it('returns valid favorites array', () => {
      localStorage.setItem('rural_favorites', JSON.stringify(['/test1', '/test2']));
      expect(getStoredFavorites()).toEqual(['/test1', '/test2']);
    });
  });

  describe('setStoredFavorites', () => {
    it('saves favorites array to localStorage', () => {
      setStoredFavorites(['/test1', '/test2']);
      expect(JSON.parse(localStorage.getItem('rural_favorites') || '[]')).toEqual(['/test1', '/test2']);
    });

    it('handles localStorage errors gracefully', () => {
      const mockSetItem = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
        throw new Error('QuotaExceededError');
      });
      
      expect(() => setStoredFavorites(['/test1'])).not.toThrow();
      expect(console.error).toHaveBeenCalled();
      
      mockSetItem.mockRestore();
    });
  });
});
