import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { Search, X, Star, Plus, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const { addToCart, setQuickViewItem } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const results = query.trim()
    ? MENU_ITEMS.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.ingredients?.some(i => i.toLowerCase().includes(query.toLowerCase()))
      )
    : MENU_ITEMS.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-2xl bg-[#1E1E1E] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        {/* Search Bar Input */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#FFC107]" />
          <input
            type="text"
            placeholder="Search Wagyu, Truffle, Pasta, Biryani, Cocktails..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-white placeholder-gray-500 text-base focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3 no-scrollbar">
          <div className="text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">
            {query.trim() ? `Search Results (${results.length})` : 'Popular Recommendations'}
          </div>

          {results.length === 0 ? (
            <div className="py-12 text-center text-gray-500 text-sm">
              No dishes found for "{query}". Try searching "Wagyu" or "Pasta".
            </div>
          ) : (
            results.map(item => (
              <div
                key={item.id}
                onClick={() => {
                  setQuickViewItem(item);
                  onClose();
                }}
                className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#FF7043] font-medium uppercase">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-0.5 text-xs text-amber-400">
                        <Star className="w-3 h-3 fill-current" />
                        <span>{item.rating}</span>
                      </div>
                    </div>
                    <h4 className="font-serif font-bold text-white text-sm group-hover:text-[#FFC107] transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-xs font-mono text-gray-300">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={e => {
                    e.stopPropagation();
                    addToCart(item, 1);
                  }}
                  className="p-2.5 rounded-xl bg-[#C62828] text-white hover:bg-[#B71C1C] transition shadow-md"
                  aria-label="Add to cart"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Link */}
        <div className="p-4 border-t border-white/10 bg-black/40 flex justify-between items-center text-xs text-gray-400">
          <span>Press ESC to exit</span>
          <button
            onClick={() => {
              onClose();
              navigate('/menu');
            }}
            className="text-[#FFC107] hover:underline flex items-center gap-1 font-medium"
          >
            Explore Full Menu <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
