import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, CATEGORIES } from '../data/mockData';
import { FoodCard } from '../components/FoodCard';
import { MenuItem } from '../types';
import { Search, Filter, Sparkles, Flame, SlidersHorizontal, Check } from 'lucide-react';

export const MenuPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'non-veg' | 'specials'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc' | 'rating'>('recommended');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      // Category match
      const catMatch = selectedCategory === 'All' || item.category === selectedCategory;

      // Diet match
      let dietMatch = true;
      if (dietFilter === 'veg') dietMatch = item.isVeg;
      if (dietFilter === 'non-veg') dietMatch = !item.isVeg;
      if (dietFilter === 'specials') dietMatch = !!item.isChefSpecial;

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const searchMatch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.ingredients?.some(i => i.toLowerCase().includes(query));

      return catMatch && dietMatch && searchMatch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // recommended
    });
  }, [selectedCategory, dietFilter, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C62828]/20 border border-[#C62828]/30 text-xs font-bold text-[#FF7043]">
            GOURMET DINING SELECTION
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold">
            Our Fine Dining <span className="gold-gradient-text">Menu</span>
          </h1>
          <p className="text-gray-400 text-sm font-light">
            Crafted with passion by 3-Michelin star chefs using organic farm ingredients and imported delicacies.
          </p>
        </div>

        {/* Search & Sort Controls */}
        <div className="p-4 rounded-3xl glass-card border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-[#FFC107] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes, ingredients, or cuisines..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C62828] transition"
            />
          </div>

          {/* Diet Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-center">
            {[
              { id: 'all', label: 'All Items' },
              { id: 'veg', label: 'Vegetarian Only' },
              { id: 'non-veg', label: 'Non-Veg Only' },
              { id: 'specials', label: 'Chef\'s Specials ✨' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setDietFilter(f.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition ${
                  dietFilter === f.id
                    ? 'bg-[#C62828] text-white shadow-md'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <SlidersHorizontal className="w-4 h-4 text-gray-400" />
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="bg-[#1E1E1E] border border-white/10 text-white text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-[#C62828]"
            >
              <option value="recommended">Sort: Recommended</option>
              <option value="rating">Sort: Top Rated ★</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category Filter Horizontal Scrollbar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 no-scrollbar">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === 'All'
                ? 'bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white shadow-lg'
                : 'bg-[#1E1E1E] text-gray-300 border border-white/5 hover:border-white/20'
            }`}
          >
            All Categories ({MENU_ITEMS.length})
          </button>

          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap flex items-center gap-2 transition-all ${
                selectedCategory === cat.name
                  ? 'bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white shadow-lg'
                  : 'bg-[#1E1E1E] text-gray-300 border border-white/5 hover:border-white/20'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Food Items Grid */}
        <div>
          <div className="flex items-center justify-between text-xs text-gray-400 mb-6">
            <span>Showing <strong>{filteredItems.length}</strong> culinary items</span>
            {selectedCategory !== 'All' && (
              <button
                onClick={() => setSelectedCategory('All')}
                className="text-[#FFC107] hover:underline"
              >
                Reset Category
              </button>
            )}
          </div>

          {filteredItems.length === 0 ? (
            <div className="py-24 text-center glass-panel rounded-3xl p-12">
              <Sparkles className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <h3 className="font-serif font-bold text-xl text-white mb-2">No Dishes Match Your Filter</h3>
              <p className="text-xs text-gray-400 mb-6 max-w-sm mx-auto">
                Try searching for different ingredients like "Truffle", "Wagyu", or clearing diet filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setDietFilter('all');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 rounded-xl bg-[#C62828] text-white font-semibold text-xs shadow-md"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map(item => (
                <FoodCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
