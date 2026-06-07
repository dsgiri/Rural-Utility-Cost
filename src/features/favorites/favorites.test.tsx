import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent, renderHook, act } from '@testing-library/react';
import { FavoritesProvider, useFavorites } from './favoritesHook';
import { FavoriteButton } from './FavoriteButton';
import { BrowserRouter } from 'react-router-dom';
import FavoritesPage from './FavoritesPage';

// Simple wrapper for testing
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <FavoritesProvider>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </FavoritesProvider>
);

describe('Favorites feature', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('useFavorites hook', () => {
    it('initializes from localStorage', () => {
      localStorage.setItem('rural_favorites', JSON.stringify(['/test']));
      
      const { result } = renderHook(() => useFavorites(), { wrapper });
      
      expect(result.current.favorites).toEqual(['/test']);
      expect(result.current.isFavorite('/test')).toBe(true);
    });

    it('toggles add and remove favorite', () => {
      const { result } = renderHook(() => useFavorites(), { wrapper });
      
      act(() => {
        result.current.toggleFavorite('/my-calc');
      });
      
      expect(result.current.favorites).toEqual(['/my-calc']);
      expect(JSON.parse(localStorage.getItem('rural_favorites') || '[]')).toEqual(['/my-calc']);
      
      act(() => {
        result.current.toggleFavorite('/my-calc');
      });
      
      expect(result.current.favorites).toEqual([]);
    });

    it('clears all favorites', () => {
      localStorage.setItem('rural_favorites', JSON.stringify(['/calc1', '/calc2']));
      
      const { result } = renderHook(() => useFavorites(), { wrapper });
      
      act(() => {
        result.current.clearFavorites();
      });
      
      expect(result.current.favorites).toEqual([]);
    });
  });

  describe('FavoriteButton component', () => {
    it('shows correct aria labels and adds to favorites when clicked', () => {
      render(<FavoriteButton id="/my-tool" />, { wrapper });
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Add to favorites');
      expect(button).toHaveAttribute('aria-pressed', 'false');
      
      // Click to favorite
      fireEvent.click(button);
      
      expect(button).toHaveAttribute('aria-label', 'Remove from favorites');
      expect(button).toHaveAttribute('aria-pressed', 'true');
    });
  });

  describe('FavoritesPage component', () => {
    it('shows empty state when no favorites exist', () => {
      render(<FavoritesPage />, { wrapper });
      
      expect(screen.getByText('No favorites yet')).toBeInTheDocument();
      expect(screen.getByText('Browse Calculators')).toBeInTheDocument();
    });
  });
});
