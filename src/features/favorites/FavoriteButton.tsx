import React from 'react';
import { Heart } from 'lucide-react';
import { useFavorites } from './favoritesHook';

interface FavoriteButtonProps {
  id: string;
  className?: string;
}

export function FavoriteButton({ id, className = '' }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFav = isFavorite(id);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(id);
      }}
      className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a5f3f] transition-all duration-200 ${
        isFav 
          ? 'text-rose-500 hover:text-rose-600 bg-rose-50 hover:bg-rose-100' 
          : 'text-gray-400 hover:text-rose-500 hover:bg-gray-100 bg-white shadow-sm border border-gray-100'
      } ${className}`}
      aria-pressed={isFav}
      aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
      title={isFav ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart className={`w-5 h-5 transition-all duration-200 ${isFav ? 'fill-current scale-110' : 'scale-100'}`} />
    </button>
  );
}
