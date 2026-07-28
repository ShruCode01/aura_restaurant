import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';
import { Calendar, Clock, User, ArrowRight, X, Sparkles } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = ['All', 'Culinary Art', 'Wine & Beverage', 'Healthy Dining'];

  const filtered = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(b => b.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C62828]/20 border border-[#C62828]/30 text-xs font-bold text-[#FF7043]">
            CULINARY JOURNAL & NEWS
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold">
            Aura <span className="gold-gradient-text">Food Journal</span>
          </h1>
          <p className="text-gray-400 text-sm font-light">
            Insights on wine pairings, Michelin plating techniques, and farm-to-table organic sourcing.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition ${
                selectedCategory === c
                  ? 'bg-[#C62828] text-white shadow-lg'
                  : 'bg-[#1E1E1E] text-gray-300 border border-white/5 hover:border-white/20'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map(post => (
            <div
              key={post.id}
              onClick={() => setActivePost(post)}
              className="bg-[#1E1E1E] rounded-3xl overflow-hidden border border-white/5 hover:border-[#FFC107]/40 transition-all duration-300 shadow-2xl cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden bg-black">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#FFC107] text-[10px] font-bold uppercase">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#FF7043]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#FFC107]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#FFC107] transition-colors mb-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed font-light">
                    {post.snippet}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#FFC107] font-semibold">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reader Modal */}
        {activePost && (
          <div
            onClick={() => setActivePost(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          >
            <div
              onClick={e => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#1E1E1E] border border-white/10 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto no-scrollbar"
            >
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 text-white hover:bg-black transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-72 bg-black">
                <img
                  src={activePost.image}
                  alt={activePost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent" />
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#FFC107] uppercase tracking-wider block mb-2">
                    {activePost.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                    {activePost.title}
                  </h2>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>By <strong>{activePost.author}</strong> ({activePost.authorRole})</span>
                    <span>• {activePost.date}</span>
                    <span>• {activePost.readTime}</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-gray-300 leading-relaxed font-light">
                  {activePost.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {activePost.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
