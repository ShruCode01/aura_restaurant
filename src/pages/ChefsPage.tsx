import React from 'react';
import { CHEFS } from '../data/mockData';
import { Award, Sparkles, Utensils, Instagram, Twitter, Linkedin } from 'lucide-react';

export const ChefsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C62828]/20 border border-[#C62828]/30 text-xs font-bold text-[#FF7043]">
            WORLD CLASS MASTERS
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold">
            Meet Our <span className="gold-gradient-text">Master Chefs</span>
          </h1>
          <p className="text-gray-400 text-sm font-light">
            Our visionary culinary directors bring decades of Michelin-star experience, global innovation, and passion to every dish.
          </p>
        </div>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {CHEFS.map(chef => (
            <div
              key={chef.id}
              className="bg-[#1E1E1E] rounded-3xl overflow-hidden border border-white/10 hover:border-[#FFC107]/40 transition-all duration-300 shadow-2xl flex flex-col sm:flex-row"
            >
              <div className="sm:w-1/2 relative min-h-[300px] bg-black">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] sm:bg-gradient-to-r via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#C62828] text-white text-[10px] font-bold">
                  {chef.experience}
                </span>
              </div>

              <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif font-bold text-2xl text-white mb-1">
                    {chef.name}
                  </h3>
                  <p className="text-xs text-[#FFC107] font-semibold mb-3">{chef.title}</p>
                  <p className="text-xs text-gray-300 leading-relaxed font-light mb-4">
                    {chef.bio}
                  </p>

                  <div className="space-y-1.5 text-xs text-gray-300">
                    <p className="flex items-center gap-1.5">
                      <Utensils className="w-3.5 h-3.5 text-[#FF7043]" />
                      <span><strong>Specialty:</strong> {chef.specialization}</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span><strong>Signature Dish:</strong> {chef.signatureDish}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[10px] text-amber-400 font-medium">
                    <Award className="w-4 h-4 text-[#FFC107]" />
                    <span>{chef.awards[0]}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {chef.social.instagram && (
                      <a href={chef.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:text-white transition text-rose-400">
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                    {chef.social.twitter && (
                      <a href={chef.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:text-white transition text-sky-400">
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {chef.social.linkedin && (
                      <a href={chef.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:text-white transition text-blue-400">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
