import React from 'react';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { Star, Heart, Eye, Plus, Check, Flame } from 'lucide-react';

interface FoodCardProps {
  item: MenuItem;
}

export const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  const { addToCart, setQuickViewItem, cart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(item.id);
  const inCart = cart.find(ci => ci.item.id === item.id);

  return (
    <div className="group relative bg-[#1E1E1E] rounded-2xl overflow-hidden border border-white/5 hover:border-[#C62828]/40 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(198,40,40,0.15)] flex flex-col justify-between">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          {/* Veg / Non-Veg Indicator */}
          <div
            className={`px-2 py-1 rounded-md text-[11px] font-bold flex items-center gap-1.5 backdrop-blur-md ${
              item.isVeg
                ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/40'
                : 'bg-rose-950/80 text-rose-400 border border-rose-500/40'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                item.isVeg ? 'bg-emerald-400' : 'bg-rose-500'
              }`}
            />
            {item.isVeg ? 'VEG' : 'NON-VEG'}
          </div>

          {item.isChefSpecial && (
            <span className="bg-gradient-to-r from-[#FFC107] to-[#FF8F00] text-black font-semibold text-[10px] px-2 py-1 rounded-md shadow-md uppercase tracking-wider">
              Chef's Special
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => toggleFavorite(item)}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 ${
            favorite
              ? 'bg-[#C62828] text-white shadow-lg scale-110'
              : 'bg-black/50 text-white/80 hover:text-white hover:bg-black/80'
          }`}
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`w-4 h-4 ${favorite ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
          <button
            onClick={() => setQuickViewItem(item)}
            className="px-4 py-2 rounded-full bg-white/90 text-gray-900 font-medium text-xs flex items-center gap-2 shadow-xl hover:bg-white transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          >
            <Eye className="w-4 h-4 text-[#C62828]" />
            Quick View
          </button>
        </div>

        {/* Rating & Spiciness badge bottom inside image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-400 font-semibold border border-amber-500/20">
            <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
            <span>{item.rating}</span>
            <span className="text-gray-400 text-[10px]">({item.reviewsCount})</span>
          </div>

          {item.spiciness !== undefined && item.spiciness > 0 && (
            <div className="flex items-center gap-0.5 px-2 py-1 rounded-full bg-black/60 backdrop-blur-md text-orange-400">
              {Array.from({ length: item.spiciness }).map((_, i) => (
                <Flame key={i} className="w-3 h-3 text-orange-500 fill-current" />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Details Container */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
            <span className="text-[#FF7043] font-medium tracking-wide uppercase text-[11px]">
              {item.category}
            </span>
            {item.prepTime && <span>⏱ {item.prepTime}</span>}
          </div>

          <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#FFC107] transition-colors line-clamp-1 mb-2">
            {item.name}
          </h3>

          <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
            {item.description}
          </p>
        </div>

        {/* Footer: Price & Add to Cart */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-white font-mono">
              ${item.price.toFixed(2)}
            </span>
            {item.originalPrice && (
              <span className="text-xs text-gray-500 line-through">
                ${item.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(item, 1)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 ${
              inCart
                ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white hover:from-[#B71C1C] hover:to-[#8E0000] shadow-md hover:shadow-lg'
            }`}
          >
            {inCart ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>In Cart ({inCart.quantity})</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add To Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
