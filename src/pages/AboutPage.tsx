import React from 'react';
import { Award, ShieldCheck, Heart, Sparkles, Utensils, Users, Star, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C62828]/20 border border-[#C62828]/30 text-xs font-bold text-[#FF7043]">
            DISCOVER AURA'S STORY
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold">
            Where Culinary Passion Meets <br />
            <span className="gold-gradient-text">Michelin Artistry</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
            Founded with a singular devotion to gastronomy, Aura has evolved into a world-renowned culinary landmark where every meal tells a story of tradition, innovation, and passion.
          </p>
        </div>

        {/* Section 1: Story & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-white">
              The Genesis of Aura Dining
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              In 2010, Executive Chef Antoine De Laurent set out to create a sanctuary where the ancient warmth of hospitality seamlessly merges with modern molecular gastronomy. After years at 3-Michelin starred establishments in Paris and Tokyo, Chef Antoine brought his visionary philosophy to life.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Every spice is whole-milled in house, every dough undergoes 48-hour cold fermentation, and every cut of meat is hand-selected by our master butcher for optimal marbling and age.
            </p>

            <div className="space-y-3 pt-2">
              {[
                '100% Organic & Biodynamic Produce Sourced Daily',
                'Custom Aged Miyazaki Wagyu & Prime Dry-Aged Cuts',
                'Handcrafted Fresh Pasta Made Tableside Daily',
                'Curated Cellar with over 1,200 Vintage Labels'
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC107] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Aura Main Dining Hall"
                className="w-full h-[460px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl glass-card border border-white/20 max-w-xs shadow-2xl hidden sm:block">
              <span className="text-2xl font-serif font-bold text-[#FFC107]">150,000+ Guests</span>
              <p className="text-xs text-gray-300 mt-1">Served across 16 countries with an average 4.9/5 satisfaction rate.</p>
            </div>
          </div>
        </div>

        {/* Section 2: Animated Stats Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: '3 Stars', label: 'Michelin Guide 2024-2026', icon: Award },
            { num: '22+ Yrs', label: 'Culinary Expertise', icon: Utensils },
            { num: '4.9 ★', label: '12,000+ Reviews', icon: Star },
            { num: '100%', label: 'Organic Ingredients', icon: ShieldCheck }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="p-6 rounded-3xl bg-[#1E1E1E] border border-white/5 text-center shadow-xl">
                <Icon className="w-8 h-8 text-[#FF7043] mx-auto mb-3" />
                <span className="text-3xl font-serif font-bold text-white block mb-1">{stat.num}</span>
                <span className="text-xs text-gray-400">{stat.label}</span>
              </div>
            );
          })}
        </div>

        {/* Section 3: Kitchen & Quality Philosophy */}
        <div className="p-10 sm:p-16 rounded-3xl glass-card border border-white/10 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold text-[#FFC107] uppercase tracking-widest">
              OUR KITCHEN SANCTUARY
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Sustaining Flavor, Honouring Earth
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              We believe great food starts with respect for nature. Aura practices zero-waste culinary techniques—utilizing bone broths for rich reductions, composting organic scraps for our urban herb garden, and powering our kitchen on 100% renewable energy.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate('/reservation')}
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white font-bold text-xs shadow-xl"
              >
                Experience Aura Yourself
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
