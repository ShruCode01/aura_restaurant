import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { FoodCard } from '../components/FoodCard';
import { useNavigate } from 'react-router-dom';
import { Heart, ArrowLeft, Sparkles } from 'lucide-react';

export const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/menu')}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition"
              aria-label="Back to menu"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-3xl font-serif font-bold text-white">Your Saved Favorites</h1>
              <p className="text-xs text-gray-400">Personalized collection of dishes you love</p>
            </div>
          </div>

          <span className="px-3 py-1 rounded-full bg-[#FF7043]/20 border border-[#FF7043]/30 text-xs font-bold text-[#FF7043] flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>{favorites.length} Saved</span>
          </span>
        </div>

        {favorites.length === 0 ? (
          <div className="py-24 text-center glass-panel rounded-3xl p-12 max-w-lg mx-auto space-y-4">
            <Heart className="w-16 h-16 text-rose-500 mx-auto opacity-50" />
            <h2 className="text-2xl font-serif font-bold text-white">No Favorite Dishes Saved Yet</h2>
            <p className="text-xs text-gray-400 leading-relaxed">
              Click the heart icon on any dish card in our menu to save your preferred culinary items.
            </p>
            <button
              onClick={() => navigate('/menu')}
              className="px-8 py-3 rounded-2xl bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white font-semibold text-xs shadow-xl"
            >
              Explore Menu
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map(item => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
