import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { X, ZoomIn } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Food' | 'Interior' | 'Kitchen' | 'Events'>('All');
  const [selectedImg, setSelectedImg] = useState<{ image: string; title: string; caption: string } | null>(null);

  const filtered = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C62828]/20 border border-[#C62828]/30 text-xs font-bold text-[#FF7043]">
            ATMOSPHERE & ARTISTRY
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold">
            Aura <span className="gold-gradient-text">Visual Gallery</span>
          </h1>
          <p className="text-gray-400 text-sm font-light">
            Explore our opulent interior architecture, master kitchen moments, and meticulously plated creations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {['All', 'Food', 'Interior', 'Kitchen', 'Events'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white shadow-lg'
                  : 'bg-[#1E1E1E] text-gray-300 border border-white/5 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedImg({ image: item.image, title: item.title, caption: item.caption })}
              className="relative group rounded-3xl overflow-hidden aspect-[4/5] bg-black cursor-pointer border border-white/5 shadow-xl hover:border-[#FFC107]/40 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="p-2.5 rounded-full bg-black/60 text-amber-400 backdrop-blur-md">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] text-[#FFC107] font-bold uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif font-bold text-lg text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-300 line-clamp-2">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImg && (
          <div
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          >
            <div
              onClick={e => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#1E1E1E] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 text-white hover:bg-black transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video bg-black">
                <img
                  src={selectedImg.image}
                  alt={selectedImg.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 bg-[#1E1E1E]">
                <h3 className="font-serif font-bold text-xl text-white mb-1">{selectedImg.title}</h3>
                <p className="text-xs text-gray-300">{selectedImg.caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
