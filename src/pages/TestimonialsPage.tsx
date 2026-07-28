import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, MessageSquarePlus, CheckCircle2, User, MapPin } from 'lucide-react';

export const TestimonialsPage: React.FC = () => {
  const [reviews, setReviews] = useState(TESTIMONIALS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    role: 'Gourmet Enthusiast',
    rating: 5,
    review: '',
    location: 'New York, USA',
    dishRecommended: 'Truffle Glazed Wagyu'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.review) return;

    const created = {
      id: 't' + (reviews.length + 1),
      name: newReview.name,
      role: newReview.role,
      review: newReview.review,
      rating: Number(newReview.rating),
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      date: 'Just now',
      location: newReview.location,
      dishRecommended: newReview.dishRecommended
    };

    setReviews([created, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C62828]/20 border border-[#C62828]/30 text-xs font-bold text-[#FF7043]">
            CRITICS & GUEST TESTIMONIALS
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold">
            What Food Critics & <span className="gold-gradient-text">Guests Say</span>
          </h1>
          <p className="text-gray-400 text-sm font-light">
            Read authentic reviews from renowned food journalists, wine connoisseurs, and satisfied guests.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white font-semibold text-xs flex items-center gap-2 mx-auto shadow-lg hover:from-[#B71C1C] transition"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Write A Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map(t => (
            <div
              key={t.id}
              className="bg-[#1E1E1E] rounded-3xl p-8 border border-white/10 hover:border-[#FFC107]/40 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-400">{t.date}</span>
                </div>

                <p className="text-sm text-gray-200 italic font-serif leading-relaxed">
                  "{t.review}"
                </p>

                {t.dishRecommended && (
                  <div className="text-[11px] text-[#FFC107] font-mono">
                    <strong>Recommended Dish:</strong> {t.dishRecommended}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#FFC107]"
                />
                <div>
                  <h4 className="font-serif font-bold text-sm text-white">{t.name}</h4>
                  <p className="text-xs text-[#FF7043]">{t.role}</p>
                  <p className="text-[10px] text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{t.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="w-full max-w-lg bg-[#1E1E1E] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h3 className="font-serif font-bold text-xl text-white">Share Your Dining Experience</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white">✕</button>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-2 text-emerald-400">
                  <CheckCircle2 className="w-10 h-10 mx-auto" />
                  <p className="font-bold text-sm">Thank You! Your review has been published.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lady Genevieve"
                      value={newReview.name}
                      onChange={e => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#C62828]"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">Star Rating</label>
                    <select
                      value={newReview.rating}
                      onChange={e => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#C62828]"
                    >
                      <option value={5}>5 Stars ★★★★★ Exceptional</option>
                      <option value={4}>4 Stars ★★★★☆ Great</option>
                      <option value={3}>3 Stars ★★★☆☆ Average</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">Your Review *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe the flavor, ambiance, and service quality..."
                      value={newReview.review}
                      onChange={e => setNewReview({ ...newReview, review: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-[#C62828]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white font-bold text-xs shadow-xl"
                  >
                    Submit Review
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
