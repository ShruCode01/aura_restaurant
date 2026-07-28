import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { Search, ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openId, setOpenId] = useState<string | null>('fq1');
  const navigate = useNavigate();

  const categories = ['All', 'Reservations', 'Dietary', 'Delivery', 'General', 'Private Events'];

  const filteredFaqs = FAQS.filter(faq => {
    const catMatch = activeCategory === 'All' || faq.category === activeCategory;
    const query = searchQuery.trim().toLowerCase();
    const queryMatch =
      !query ||
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query);
    return catMatch && queryMatch;
  });

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C62828]/20 border border-[#C62828]/30 text-xs font-bold text-[#FF7043]">
            HELP & ASSISTANCE
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h1>
          <p className="text-gray-400 text-sm font-light">
            Everything you need to know about table bookings, dietary requests, dress code, and home delivery.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search className="w-5 h-5 text-[#FFC107] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions e.g. dress code, vegan, delivery..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-[#1E1E1E] border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C62828] shadow-xl"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                activeCategory === cat
                  ? 'bg-[#C62828] text-white shadow-md'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="py-12 text-center text-gray-500 text-sm">
              No answers found for "{searchQuery}". Try asking our concierge directly.
            </div>
          ) : (
            filteredFaqs.map(faq => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#1E1E1E] rounded-2xl border border-white/10 overflow-hidden shadow-lg transition-all"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-base text-white hover:text-[#FFC107] transition"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#C62828] shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#FFC107]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-gray-300 leading-relaxed border-t border-white/5 font-light">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-8 rounded-3xl glass-card border border-white/10 text-center space-y-3">
          <h3 className="font-serif font-bold text-xl text-white">Still Have Unanswered Questions?</h3>
          <p className="text-xs text-gray-400">Our VIP dining concierge team is available 24/7 to assist you.</p>
          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white font-semibold text-xs shadow-lg"
          >
            Contact VIP Concierge
          </button>
        </div>
      </div>
    </div>
  );
};
