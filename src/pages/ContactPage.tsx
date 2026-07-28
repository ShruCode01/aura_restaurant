import React, { useState } from 'react';
import { INSTAGRAM_POSTS } from '../data/mockData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Instagram, MessageSquare, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C62828]/20 border border-[#C62828]/30 text-xs font-bold text-[#FF7043]">
            LOCATION & CONTACT
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold">
            Get In Touch With <span className="gold-gradient-text">Aura</span>
          </h1>
          <p className="text-gray-400 text-sm font-light">
            Located in Fifth Avenue, Manhattan. Contact our concierge for private dining buyouts, media inquiries, or reservations.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              icon: MapPin,
              title: 'Restaurant Address',
              desc: '742 Fifth Avenue, Manhattan, New York, NY 10019',
              color: 'text-[#FFC107]'
            },
            {
              icon: Phone,
              title: 'Direct Phone',
              desc: '+1 (800) 888-AURA / +1 (212) 555-0199',
              color: 'text-[#FF7043]'
            },
            {
              icon: Mail,
              title: 'Email Concierge',
              desc: 'concierge@auradining.com',
              color: 'text-emerald-400'
            },
            {
              icon: Clock,
              title: 'Operating Hours',
              desc: 'Mon-Sun: 11:30 AM - 11:30 PM (Lunch & Dinner)',
              color: 'text-sky-400'
            }
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="p-6 rounded-3xl bg-[#1E1E1E] border border-white/10 shadow-xl space-y-3">
                <Icon className={`w-8 h-8 ${c.color}`} />
                <h3 className="font-serif font-bold text-lg text-white">{c.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-light">{c.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Main Grid: Form & Map Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Form */}
          <div className="lg:col-span-7 bg-[#1E1E1E] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl space-y-6">
            <h3 className="font-serif font-bold text-2xl text-white pb-3 border-b border-white/10">
              Send Us A Message
            </h3>

            {submitted ? (
              <div className="py-12 text-center space-y-3 text-emerald-400">
                <CheckCircle2 className="w-12 h-12 mx-auto" />
                <h4 className="font-serif font-bold text-xl text-white">Message Received!</h4>
                <p className="text-xs text-gray-300">
                  Thank you, <strong className="text-white">{form.name}</strong>. Our VIP coordinator will respond within 2 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-white/10 text-white font-semibold text-xs mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexandra Vance"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#C62828]"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="alexandra@vance.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#C62828]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="Private Event / Press Enquiry / General Question"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#C62828]"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Message *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="How can our concierge assist you today?"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-[#C62828]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white font-bold text-sm shadow-xl hover:from-[#B71C1C] transition duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Styled Map Frame & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1E1E1E] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
              <div className="p-4 bg-black/60 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs font-serif font-bold text-[#FFC107]">Interactive Map View</span>
                <span className="text-[10px] text-gray-400">Fifth Ave, NY</span>
              </div>

              {/* Styled Map Placeholder / Iframe */}
              <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden">
                <iframe
                  title="Aura Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2158869814467!2d-73.9760!3d40.7635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f97bf23d83%3A0x6b4ef84c20f18837!2s5th%20Ave%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  className="w-full h-full border-0 grayscale contrast-125 opacity-80"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-emerald-950/40 border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <MessageSquare className="w-5 h-5" />
                <span>Instant WhatsApp Concierge</span>
              </div>
              <p className="text-xs text-gray-300">
                Prefer direct messaging? Connect with our desk instantly on WhatsApp for quick seating checks and menu customization.
              </p>
              <a
                href="https://wa.me/18008882872?text=Hello%20Aura%20Concierge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-lg hover:bg-emerald-500 transition"
              >
                Chat On WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Live Instagram Feed Section */}
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF7043] block mb-1">
              #AURADINING MANHATTAN
            </span>
            <h3 className="font-serif font-bold text-2xl text-white">Follow Our Instagram Stories</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {INSTAGRAM_POSTS.map(inst => (
              <div key={inst.id} className="relative group rounded-2xl overflow-hidden aspect-square bg-black border border-white/10">
                <img src={inst.image} alt="Insta Post" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3 text-xs text-white font-bold">
                  <span>❤️ {inst.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
