import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { X, Star, Heart, ShoppingBag, Plus, Minus, Flame, ShieldAlert, Sparkles, Check } from 'lucide-react';

export const QuickViewModal: React.FC = () => {
  const { quickViewItem, setQuickViewItem, addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [specialNote, setSpecialNote] = useState('');

  if (!quickViewItem) return null;

  const favorite = isFavorite(quickViewItem.id);

  const toggleOption = (opt: string) => {
    setSelectedOptions(prev =>
      prev.includes(opt) ? prev.filter(o => o !== opt) : [...prev, opt]
    );
  };

  const handleAddToCart = () => {
    addToCart(quickViewItem, quantity, selectedOptions, specialNote);
    setQuickViewItem(null);
    setQuantity(1);
    setSelectedOptions([]);
    setSpecialNote('');
  };

  const availableCustomizations = [
    'Extra Truffle Shavings (+$8)',
    'Extra Cheese (+$3)',
    'Mild Spice Level',
    'Extra Sauce on Side'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-[#1E1E1E] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto no-scrollbar"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setQuickViewItem(null)}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-gray-300 hover:text-white hover:bg-black transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="md:w-1/2 relative bg-black min-h-[280px]">
          <img
            src={quickViewItem.image}
            alt={quickViewItem.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-black/20" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold ${
                quickViewItem.isVeg
                  ? 'bg-emerald-950/90 text-emerald-400 border border-emerald-500/30'
                  : 'bg-rose-950/90 text-rose-400 border border-rose-500/30'
              }`}
            >
              {quickViewItem.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
            </span>
            {quickViewItem.isChefSpecial && (
              <span className="bg-[#FFC107] text-black font-semibold text-xs px-3 py-1 rounded-full">
                Chef's Signature
              </span>
            )}
          </div>

          <button
            onClick={() => toggleFavorite(quickViewItem)}
            className={`absolute bottom-4 left-4 p-3 rounded-full backdrop-blur-md transition-all ${
              favorite ? 'bg-[#C62828] text-white' : 'bg-black/60 text-white hover:bg-black'
            }`}
          >
            <Heart className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Modal Details */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
              <span className="text-[#FF7043] font-semibold uppercase tracking-wider">
                {quickViewItem.category}
              </span>
              {quickViewItem.prepTime && <span>⏱ Prep Time: {quickViewItem.prepTime}</span>}
            </div>

            <h2 className="text-2xl font-serif font-bold text-white mb-2">
              {quickViewItem.name}
            </h2>

            {/* Rating & Calories */}
            <div className="flex items-center gap-4 text-xs text-gray-300 mb-4">
              <div className="flex items-center gap-1 text-amber-400 font-semibold">
                <Star className="w-4 h-4 fill-current" />
                <span>{quickViewItem.rating}</span>
                <span className="text-gray-500">({quickViewItem.reviewsCount} reviews)</span>
              </div>
              {quickViewItem.calories && (
                <div className="flex items-center gap-1 text-gray-400">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span>{quickViewItem.calories} kcal</span>
                </div>
              )}
            </div>

            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              {quickViewItem.description}
            </p>

            {/* Ingredients */}
            {quickViewItem.ingredients && quickViewItem.ingredients.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFC107]" />
                  Key Ingredients
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {quickViewItem.ingredients.map((ing, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Allergens */}
            {quickViewItem.allergens && quickViewItem.allergens.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                  Allergen Notice
                </h4>
                <p className="text-xs text-rose-300/80">
                  Contains: {quickViewItem.allergens.join(', ')}
                </p>
              </div>
            )}

            {/* Customization Options */}
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Customizations
              </h4>
              <div className="space-y-1.5">
                {availableCustomizations.map((opt, i) => {
                  const isSel = selectedOptions.includes(opt);
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => toggleOption(opt)}
                      className={`w-full p-2 rounded-xl text-xs flex items-center justify-between border transition-all ${
                        isSel
                          ? 'bg-[#C62828]/20 border-[#C62828] text-white'
                          : 'bg-white/5 border-white/5 text-gray-400 hover:border-white/20'
                      }`}
                    >
                      <span>{opt}</span>
                      {isSel && <Check className="w-3.5 h-3.5 text-[#C62828]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quantity & Add Button */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 bg-white/5 p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-mono font-bold text-sm w-6 text-center text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <div className="text-right">
                <span className="text-xs text-gray-400 block">Total Price</span>
                <span className="text-xl font-bold font-mono text-[#FFC107]">
                  ${(quickViewItem.price * quantity).toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg hover:from-[#B71C1C] hover:to-[#8E0000] transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add To Order</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
