import React, { createContext, useContext, useState, ReactNode } from 'react';
import { getStoredFavorites, setStoredFavorites } from './favoritesStorage';
import { FavoritesContextType } from './favoritesTypes';

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>(getStoredFavorites);

  const addFavorite = (id: string) => {
    setFavorites(prev => {
      if (prev.includes(id)) return prev;
      const next = [...prev, id];
      setStoredFavorites(next);
      return next;
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites(prev => {
      const next = prev.filter(fav => fav !== id);
      setStoredFavorites(next);
      return next;
    });
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const isFav = prev.includes(id);
      const next = isFav ? prev.filter(fav => fav !== id) : [...prev, id];
      setStoredFavorites(next);
      return next;
    });
  };

  const isFavorite = (id: string) => favorites.includes(id);

  const clearFavorites = () => {
    setFavorites([]);
    setStoredFavorites([]);
  };

  return (
    <FavoritesContext.Provider value={{
      favorites,
      isFavorite,
      toggleFavorite,
      addFavorite,
      removeFavorite,
      clearFavorites
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
