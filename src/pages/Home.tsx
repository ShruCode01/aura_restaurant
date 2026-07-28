import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MENU_ITEMS, SPECIAL_OFFERS, CHEFS, TESTIMONIALS, BLOG_POSTS, GALLERY_ITEMS, FAQS } from '../data/mockData';
import { FoodCard } from '../components/FoodCard';
import { useCart } from '../context/CartContext';
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Award,
  Star,
  Clock,
  ShieldCheck,
  Truck,
  Heart,
  Flame,
  Utensils,
  Copy,
  Check,
  Play,
  X,
  MapPin,
  Phone,
  MessageSquare
} from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Typing effect for Hero
  const heroPhrases = ['Michelin Gastronomy', 'A5 Wagyu Perfection', 'Opulent Ambiance', 'Master Chef Artistry'];
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Countdown timer for offer
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });

  // Testimonial slide
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  // Gallery Lightbox
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);

  // Coupon copy state
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Typing effect hook
  useEffect(() => {
    const currentPhrase = heroPhrases[phraseIdx];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
        if (typedText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setPhraseIdx((phraseIdx + 1) % heroPhrases.length);
        }
      }
    }, isDeleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIdx]);

  // Countdown hook
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  const bestSellers = MENU_ITEMS.filter(item => item.isBestSeller).slice(0, 6);
  const chefSpecials = MENU_ITEMS.filter(item => item.isChefSpecial).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80"
            alt="Aura Fine Dining"
            className="w-full h-full object-cover opacity-35 scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/70 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-transparent to-[#121212]" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FFC107] backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#FFC107]" />
              <span>3 MICHELIN STARS 2024 - 2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold leading-[1.1] tracking-tight">
              Experience <br />
              <span className="gold-gradient-text min-h-[1.2em] inline-block">
                {typedText}
                <span className="animate-pulse text-[#FFC107]">|</span>
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
              Welcome to <span className="text-white font-semibold">Aura</span>, where world-renowned culinary mastery meets an atmosphere of refined luxury. Indulge in Miyazaki Wagyu, wild black truffle pasta, and handcrafted cocktails.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => navigate('/menu')}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white font-bold text-sm flex items-center gap-3 shadow-[0_10px_30px_rgba(198,40,40,0.4)] hover:shadow-[0_15px_40px_rgba(198,40,40,0.6)] hover:scale-105 transition-all duration-300"
              >
                <Utensils className="w-4 h-4" />
                <span>Explore Menu & Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('/reservation')}
                className="px-8 py-4 rounded-2xl glass-panel border border-white/20 text-white font-semibold text-sm flex items-center gap-3 hover:bg-white/10 transition-all duration-300"
              >
                <Calendar className="w-4 h-4 text-[#FFC107]" />
                <span>Reserve A Table</span>
              </button>
            </div>

            {/* Highlights Bar */}
            <div className="pt-8 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 border-t border-white/10 text-center lg:text-left">
              <div>
                <span className="block text-2xl font-serif font-bold text-[#FFC107]">4.9 ★</span>
                <span className="text-xs text-gray-400">12k+ Gourmet Reviews</span>
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-white">30 Min</span>
                <span className="text-xs text-gray-400">Express Delivery</span>
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-[#FF7043]">100%</span>
                <span className="text-xs text-gray-400">Organic Sourcing</span>
              </div>
            </div>
          </div>

          {/* Right Floating Showcase Image */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative mx-auto max-w-md">
              {/* Main Dish Floating Image */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#FFC107]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] glow-gold transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
                  alt="Wagyu Special"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-white/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-[#FFC107] uppercase">Chef Antoine Signature</span>
                    <span className="text-xs text-amber-400 font-bold">$98.00</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white">Truffle Glazed A5 Wagyu</h3>
                  <p className="text-xs text-gray-300 line-clamp-1">Smoked Miyazaki Wagyu with Perigord truffle reduction</p>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -top-6 -left-6 p-4 rounded-2xl glass-card border border-white/20 flex items-center gap-3 animate-float shadow-2xl">
                <div className="p-3 rounded-xl bg-[#C62828] text-white">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Michelin Guide</span>
                  <span className="text-[10px] text-gray-300">Top Rated 2026</span>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-6 -right-6 p-4 rounded-2xl glass-card border border-white/20 flex items-center gap-3 animate-float-delayed shadow-2xl">
                <div className="p-3 rounded-xl bg-amber-500 text-black">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Freshly Seared</span>
                  <span className="text-[10px] text-gray-300">Made To Order</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT RESTAURANT SUMMARY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#181818] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
                alt="Executive Chef Antoine"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            {/* Experience Card */}
            <div className="absolute bottom-6 right-6 p-6 rounded-2xl glass-card border border-white/20 max-w-xs">
              <span className="text-3xl font-serif font-bold text-[#FFC107] block">22+ Years</span>
              <span className="text-xs text-gray-300">Culinary Heritage & Innovation under Master Chef Antoine De Laurent</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C62828]/20 border border-[#C62828]/30 text-xs font-bold text-[#FF7043]">
              OUR HERITAGE & VISION
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              A Legacy of Uncompromising <br />
              <span className="gold-gradient-text">Culinary Excellence</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              Founded in 2010, Aura was created with a single ambition: to elevate fine dining into an immersive sensory artform. Every dish served in our restaurant is prepared using heirloom ingredients, hand-harvested herbs, and sustainably caught seafood.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="font-serif font-bold text-lg text-white mb-1">Our Mission</h4>
                <p className="text-xs text-gray-400">To create unforgettable culinary moments through flawless service and taste.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="font-serif font-bold text-lg text-[#FFC107] mb-1">Our Vision</h4>
                <p className="text-xs text-gray-400">Bridging classical European culinary techniques with vibrant global flavors.</p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => navigate('/about')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white font-semibold text-xs flex items-center gap-2 shadow-lg hover:from-[#B71C1C] transition"
              >
                <span>Read Full Story</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=100&q=80"
                  alt="Chef Signature"
                  className="w-10 h-10 rounded-full object-cover border border-[#FFC107]"
                />
                <div>
                  <span className="text-xs font-serif font-bold text-white block">Antoine De Laurent</span>
                  <span className="text-[10px] text-gray-400">Founder & Head Chef</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF7043] block mb-2">
              THE AURA ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
              Why Discerning Guests Choose Us
            </h2>
            <p className="text-gray-400 text-sm">
              We treat every detail—from water purity to plate temperature—as essential to your dining perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: '100% Organic & Fresh',
                desc: 'Ingredients handpicked daily from certified organic local farms and seafood directly from sustainable docks.'
              },
              {
                icon: Award,
                title: 'Master Michelin Chefs',
                desc: 'Led by 3-Michelin star Executive Chef Antoine De Laurent and an elite team of international culinary artisans.'
              },
              {
                icon: Truck,
                title: 'VIP Heated Home Delivery',
                desc: 'Custom insulated thermal packaging ensures your luxury food arrives piping hot with pristine plating intact.'
              },
              {
                icon: Flame,
                title: 'Artisanal Woodfired Cooking',
                desc: 'Authentic 900°F Neapolitan ovens and cherrywood smoker grates for deep, unforgettable rustic flavors.'
              },
              {
                icon: Star,
                title: 'Luxurious Ambiance',
                desc: 'Designed with warm glassmorphism, ambient chandeliers, and private acoustic booths for ultimate intimacy.'
              },
              {
                icon: Clock,
                title: 'Seamless Ordering & Booking',
                desc: 'Instant online table reservation system with immediate confirmation and real-time order tracking.'
              }
            ].map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#1E1E1E] border border-white/5 hover:border-[#C62828]/50 transition-all duration-300 hover:-translate-y-1.5 group shadow-xl"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#C62828]/20 to-[#FF7043]/20 border border-[#C62828]/30 text-[#FF7043] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#C62828] group-hover:text-white transition-all duration-300">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-white mb-2 group-hover:text-[#FFC107] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. POPULAR DISHES & BEST SELLERS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#181818] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFC107] block mb-2">
                MOST LOVED CREATIONS
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
                Popular Dishes & Chef Recommendations
              </h2>
            </div>

            <button
              onClick={() => navigate('/menu')}
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold text-xs flex items-center gap-2 transition"
            >
              <span>View Full Menu ({MENU_ITEMS.length})</span>
              <ArrowRight className="w-4 h-4 text-[#FF7043]" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map(item => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. SPECIAL OFFERS & COUPON BANNER WITH COUNTDOWN */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1A0000] via-[#121212] to-[#1A0000] relative overflow-hidden border-y border-[#C62828]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C62828]/30 border border-[#C62828] text-xs font-bold text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>LIMITED TIME MICHELIN OFFER</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              Enjoy <span className="crimson-gradient-text">25% OFF</span> On Multi-Course Dinners & Online Orders
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Use code <strong className="text-amber-400 font-mono">AURA25</strong> at checkout to unlock exclusive fine dining privileges, free wine pairings, and express delivery.
            </p>

            {/* Live Countdown Timer */}
            <div className="flex items-center gap-4 py-2">
              {[
                { label: 'HOURS', val: timeLeft.hours },
                { label: 'MINUTES', val: timeLeft.minutes },
                { label: 'SECONDS', val: timeLeft.seconds }
              ].map((time, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-2xl glass-card border border-[#C62828]/40 flex items-center justify-center text-2xl font-mono font-bold text-amber-400 shadow-xl mb-1">
                    {String(time.val).padStart(2, '0')}
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold tracking-wider">{time.label}</span>
                </div>
              ))}
            </div>

            {/* Copy Coupon Controls */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center bg-black/60 border border-white/20 rounded-2xl p-1.5 pr-4">
                <span className="px-4 py-2 rounded-xl bg-[#C62828] text-white font-mono font-bold text-sm tracking-wider">
                  AURA25
                </span>
                <button
                  onClick={() => copyCoupon('AURA25')}
                  className="ml-3 text-xs text-gray-300 hover:text-white flex items-center gap-1.5 font-medium"
                >
                  {copiedCode === 'AURA25' ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#FF7043]" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <button
                onClick={() => navigate('/offers')}
                className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition"
              >
                View All Promo Coupons
              </button>
            </div>
          </div>

          {/* Right Banner Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"
                alt="Offer Pasta Dish"
                className="w-full h-[380px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-[#C62828] text-white font-bold text-xs uppercase tracking-wider shadow-lg">
                SAVE 25% NOW
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CHEFS SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFC107] block mb-2">
              MASTER CULINARY ARTISANS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
              Meet Our Award-Winning Chefs
            </h2>
            <p className="text-gray-400 text-sm">
              Trained in Paris, Florence, and Tokyo, our chefs bring unparalleled vision and technique to every course.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CHEFS.map(chef => (
              <div
                key={chef.id}
                className="bg-[#1E1E1E] rounded-3xl overflow-hidden border border-white/5 hover:border-[#FFC107]/40 transition-all duration-300 group shadow-xl flex flex-col justify-between"
              >
                <div className="relative h-72 overflow-hidden bg-black">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-400 text-[10px] font-bold">
                    {chef.experience}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-white group-hover:text-[#FFC107] transition-colors mb-1">
                      {chef.name}
                    </h3>
                    <p className="text-xs text-[#FF7043] font-medium mb-3">{chef.title}</p>
                    <p className="text-xs text-gray-400 line-clamp-3 mb-4 leading-relaxed font-light">
                      {chef.bio}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 text-[11px] text-gray-300 space-y-1">
                    <p><strong>Signature:</strong> {chef.signatureDish}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/chefs')}
              className="px-8 py-3.5 rounded-2xl glass-panel text-white font-semibold text-xs hover:bg-white/10 transition"
            >
              Explore Full Chef Profiles & Awards
            </button>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS CAROUSEL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#181818] border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF7043] block mb-2">
              GUEST EXPERIENCES & REVIEWS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              What Food Critics & Guests Say
            </h2>
          </div>

          <div className="relative glass-card rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: TESTIMONIALS[testimonialIdx].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-amber-400" />
                ))}
              </div>

              <blockquote className="text-lg sm:text-2xl font-serif italic text-gray-200 leading-relaxed max-w-3xl">
                "{TESTIMONIALS[testimonialIdx].review}"
              </blockquote>

              <div className="flex items-center gap-4 pt-2">
                <img
                  src={TESTIMONIALS[testimonialIdx].avatar}
                  alt={TESTIMONIALS[testimonialIdx].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#FFC107]"
                />
                <div className="text-left">
                  <h4 className="font-serif font-bold text-base text-white">
                    {TESTIMONIALS[testimonialIdx].name}
                  </h4>
                  <p className="text-xs text-[#FF7043]">{TESTIMONIALS[testimonialIdx].role}</p>
                  <p className="text-[10px] text-gray-400">{TESTIMONIALS[testimonialIdx].location}</p>
                </div>
              </div>
            </div>

            {/* Slider Nav Buttons */}
            <button
              onClick={() =>
                setTestimonialIdx((testimonialIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
              }
              className="absolute top-1/2 left-4 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-black transition"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => setTestimonialIdx((testimonialIdx + 1) % TESTIMONIALS.length)}
              className="absolute top-1/2 right-4 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-black transition"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. GALLERY SNEAK PEEK */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFC107] block mb-2">
                AURA GALLERY
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
                A Visual Feast of Ambiance & Dishes
              </h2>
            </div>

            <button
              onClick={() => navigate('/gallery')}
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold text-xs flex items-center gap-2 transition"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4 text-[#FFC107]" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_ITEMS.slice(0, 8).map(g => (
              <div
                key={g.id}
                onClick={() => setSelectedGalleryImg(g.image)}
                className="relative group rounded-2xl overflow-hidden aspect-square cursor-pointer bg-black"
              >
                <img
                  src={g.image}
                  alt={g.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                  <span className="text-[10px] text-[#FFC107] uppercase font-bold">{g.category}</span>
                  <h4 className="font-serif text-sm text-white font-bold">{g.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedGalleryImg && (
        <div
          onClick={() => setSelectedGalleryImg(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedGalleryImg(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-amber-400"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedGalleryImg}
              alt="Expanded Preview"
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* 9. RESERVATION CALL TO ACTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#C62828] to-[#8E0000] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-black/30 border border-white/20 text-xs font-bold text-[#FFC107]">
            RESERVE YOUR TABLE TODAY
          </span>
          <h2 className="text-3xl sm:text-6xl font-serif font-extrabold leading-tight">
            Ready to Indulge in an Unforgettable Dining Journey?
          </h2>
          <p className="text-gray-200 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Whether for a romantic anniversary, corporate dinner, or private tasting suite, reserve your table now and let our concierge prepare your evening.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/reservation')}
              className="px-8 py-4 rounded-2xl bg-white text-gray-900 font-bold text-sm shadow-2xl hover:bg-amber-100 transition duration-300"
            >
              Book Table Online Now
            </button>

            <a
              href="tel:+18008882872"
              className="px-8 py-4 rounded-2xl bg-black/40 border border-white/30 text-white font-semibold text-sm hover:bg-black/60 transition flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#FFC107]" />
              <span>Call Concierge: +1 (800) 888-AURA</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
