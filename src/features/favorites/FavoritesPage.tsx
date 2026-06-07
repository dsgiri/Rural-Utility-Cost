import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Heart, Trash2 } from 'lucide-react';
import { useFavorites } from './favoritesHook';
import { flatNavCategories } from '../../config/calculatorCategories';
import { FavoriteButton } from './FavoriteButton';

export default function FavoritesPage() {
  const { favorites, clearFavorites } = useFavorites();

  const savedItems = favorites.map(path => {
    let match = null;
    for (const cat of flatNavCategories) {
      match = cat.items.find(i => i.path === path) || match;
    }
    return match;
  }).filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO 
        title="My Favorites" 
        description="Your saved tools and calculators."
        url="/favorites"
      />
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <Heart className="w-8 h-8 text-rose-500 fill-current" />
            My Favorites
          </h1>
          <p className="text-xl text-gray-600">
            Quick access to your saved tools and calculators.
          </p>
        </div>
        {savedItems.length > 0 && (
          <button 
            onClick={clearFavorites}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Clear All
          </button>
        )}
      </div>

      {savedItems.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-3xl border border-gray-100 shadow-sm">
          <div className="w-16 h-16 bg-rose-50 text-rose-300 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No favorites yet</h2>
          <p className="text-gray-500 mb-6 text-lg">
            Save calculators that you use often to easily find them here later.
          </p>
          <Link 
            to="/" 
            className="inline-block px-6 py-3 bg-[#1a5f3f] text-white font-medium rounded-lg hover:bg-[#134830] transition-colors"
          >
            Browse Calculators
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedItems.map((calc: any, idx: number) => {
            const Icon = calc.icon;
            return (
              <div key={idx} className="relative group flex flex-col h-full bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                <Link 
                  to={calc.path} 
                  className="flex-grow flex flex-col focus:outline-none focus:ring-2 focus:ring-[#1a5f3f] rounded-2xl"
                >
                  <div className={`p-6 rounded-t-2xl border-b ${calc.border || ''} flex items-start gap-4 transition-colors duration-300 group-hover:${calc.bg || ''}`}>
                    <div className={`p-3 rounded-xl bg-white shadow-sm border ${calc.border || ''}`}>
                      {Icon && <Icon className={`w-6 h-6 ${calc.color || 'text-gray-600'}`} />}
                    </div>
                    <div className="flex-grow pt-1 pr-8 relative">
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#1a5f3f] transition-colors">{calc.title}</h4>
                      <p className="border-t border-gray-100 pt-3 mt-4 text-sm text-gray-600 leading-relaxed font-medium">
                        {calc.desc}
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="absolute top-6 right-6 z-10">
                  <FavoriteButton id={calc.path} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
