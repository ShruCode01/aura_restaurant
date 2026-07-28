import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Instagram,
  Facebook,
  Twitter,
  Award
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Background Accent Lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C62828]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFC107]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-xl bg-gradient-to-tr from-[#C62828] to-[#FF7043] shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-serif font-extrabold tracking-tight text-white block">
                  AURA
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#FFC107] font-semibold block">
                  Fine Dining & Gourmet Lounge
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              Aura represents the pinnacle of gastronomy—combining 3-Michelin star culinary mastery, organic farm sourcing, and an opulent ambient sanctuary for memorable moments.
            </p>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-amber-400 font-medium">
                <Award className="w-4 h-4" />
                <span>3 Michelin Stars 2024-2026</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
                <span>TripAdvisor Best Fine Dining #1</span>
              </div>
            </div>

            {/* Newsletter Box */}
            <div className="pt-2">
              <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Join Aura VIP Club (Receive 15% Welcome Gift)
              </h4>
              {subscribed ? (
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! Check your inbox for code <strong>WELCOME15</strong></span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your VIP email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C62828]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white text-xs font-semibold flex items-center gap-1 hover:from-[#B71C1C] hover:to-[#8E0000] transition shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Join</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-[#FFC107]">Quick Navigation</h3>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link to="/" className="hover:text-white transition">Home Page</Link></li>
              <li><Link to="/about" className="hover:text-white transition">Our Story & Heritage</Link></li>
              <li><Link to="/menu" className="hover:text-white transition">Gourmet Menu</Link></li>
              <li><Link to="/offers" className="hover:text-white transition">Special Chef Offers</Link></li>
              <li><Link to="/chefs" className="hover:text-white transition">Master Chefs</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition">Interior & Dish Gallery</Link></li>
              <li><Link to="/reservation" className="hover:text-white transition">Book A Table</Link></li>
            </ul>
          </div>

          {/* Col 3: Popular Categories & Information */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-[#FFC107]">Information & Help</h3>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link to="/testimonials" className="hover:text-white transition">Guest Reviews</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Culinary Journal</Link></li>
              <li><Link to="/faq" className="hover:text-white transition">Frequently Asked Questions</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact & Location</Link></li>
              <li><Link to="/cart" className="hover:text-white transition">Online Ordering & Cart</Link></li>
              <li><Link to="/favorites" className="hover:text-white transition">Saved Dishes</Link></li>
            </ul>
          </div>

          {/* Col 4: Opening Hours & Contact */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-[#FFC107]">Hours & Contact</h3>
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FF7043] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Lunch Service</p>
                  <p className="text-gray-400">Mon - Sun: 11:30 AM - 3:30 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Dinner Service</p>
                  <p className="text-gray-400">Mon - Sun: 5:30 PM - 11:30 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFC107] shrink-0 mt-0.5" />
                <p className="text-gray-400">742 Fifth Avenue, Gourmet District, New York, NY 10019</p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF7043] shrink-0" />
                <p className="text-gray-400">+1 (800) 888-AURA</p>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <p className="text-gray-400">concierge@auradining.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Aura Fine Dining & Gourmet Lounge. All Rights Reserved.</p>

          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:text-white hover:bg-white/10 transition">
              <Instagram className="w-4 h-4 text-rose-400" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:text-white hover:bg-white/10 transition">
              <Facebook className="w-4 h-4 text-blue-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:text-white hover:bg-white/10 transition">
              <Twitter className="w-4 h-4 text-sky-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
