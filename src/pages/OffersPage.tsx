import React, { useState } from 'react';
import { SPECIAL_OFFERS } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Copy, Check, Clock, Tag, ArrowRight, Gift } from 'lucide-react';

export const OffersPage: React.FC = () => {
  const { applyCoupon } = useCart();
  const navigate = useNavigate();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    applyCoupon(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C62828]/20 border border-[#C62828]/30 text-xs font-bold text-[#FF7043]">
            LIMITED TIME PROMOTIONS
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold">
            Special Offers & <span className="gold-gradient-text">Gourmet Deals</span>
          </h1>
          <p className="text-gray-400 text-sm font-light">
            Unlock exclusive culinary discounts, complimentary vintage wines, and free VIP delivery.
          </p>
        </div>

        {/* Offers List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPECIAL_OFFERS.map(offer => (
            <div
              key={offer.id}
              className="bg-[#1E1E1E] rounded-3xl overflow-hidden border border-white/10 hover:border-[#FFC107]/50 transition-all duration-300 shadow-2xl flex flex-col justify-between group"
            >
              <div className="relative h-52 overflow-hidden bg-black">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-black/40" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#C62828] text-white text-[10px] font-bold uppercase tracking-wider">
                  {offer.badge}
                </span>
                <span className="absolute bottom-4 right-4 text-2xl font-mono font-extrabold text-[#FFC107]">
                  {offer.discountPercent}% OFF
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif font-bold text-xl text-white mb-1 group-hover:text-[#FFC107] transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-[#FF7043] font-semibold mb-3">{offer.subtitle}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{offer.description}</p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-400 font-mono">
                    <span>Min Order: ${offer.minOrder}</span>
                    <span className="text-amber-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> Valid Season 2026
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(offer.code)}
                      className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg hover:from-[#B71C1C] transition"
                    >
                      {copiedCode === offer.code ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>Code Applied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-amber-300" />
                          <span>Code: {offer.code}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Promo Gift Banner */}
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-[#FFC107] text-black">
              <Gift className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl text-white">First Time Dining With Us?</h3>
              <p className="text-xs text-gray-300">Use promo code <strong className="text-[#FFC107] font-mono">WELCOME10</strong> for an instant 10% welcome discount on any meal!</p>
            </div>
          </div>

          <button
            onClick={() => {
              applyCoupon('WELCOME10');
              navigate('/menu');
            }}
            className="px-6 py-3.5 rounded-2xl bg-white text-gray-900 font-bold text-xs hover:bg-amber-100 transition whitespace-nowrap shadow-xl"
          >
            Apply Code & Order Now
          </button>
        </div>
      </div>
    </div>
  );
};
