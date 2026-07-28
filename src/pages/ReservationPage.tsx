import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Calendar, Clock, Users, MapPin, Sparkles, CheckCircle2, Phone, Mail, User, HeartHandshake } from 'lucide-react';

export const ReservationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    seatingArea: 'Window View',
    occasion: 'None',
    specialRequests: ''
  });

  const [bookingConfirmed, setBookingConfirmed] = useState<{
    code: string;
    details: typeof formData;
  } | null>(null);

  const seatingAreas = [
    { name: 'Window View', desc: 'Overlooking the illuminated city skyline' },
    { name: 'Main Hall', desc: 'Center stage under crystal chandeliers' },
    { name: 'Rooftop Lounge', desc: 'Open air romantic panoramic views' },
    { name: 'Private Booth', desc: 'Acoustic privacy & velvet leather seating' },
    { name: 'Chef\'s Table', desc: 'Front-row view of our live flame kitchen' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    // Trigger confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}

    const code = 'AURA-RES-' + Math.floor(100000 + Math.random() * 900000);
    setBookingConfirmed({ code, details: formData });
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C62828]/20 border border-[#C62828]/30 text-xs font-bold text-[#FF7043]">
            VIP TABLE RESERVATIONS
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold">
            Reserve Your <span className="gold-gradient-text">Dining Experience</span>
          </h1>
          <p className="text-gray-400 text-sm font-light">
            Book your table in advance to guarantee an opulent seating experience and dedicated sommelier service.
          </p>
        </div>

        {bookingConfirmed ? (
          <div className="max-w-2xl mx-auto bg-[#1E1E1E] rounded-3xl p-8 sm:p-12 border border-[#FFC107]/40 shadow-2xl text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase text-[#FFC107] tracking-widest block mb-1">
                RESERVATION CONFIRMED
              </span>
              <h2 className="text-3xl font-serif font-bold text-white mb-2">
                We Look Forward To Welcoming You!
              </h2>
              <p className="text-xs text-gray-300">
                A confirmation email & SMS receipt has been dispatched to <strong className="text-white">{bookingConfirmed.details.email}</strong>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/50 border border-white/10 text-left space-y-3 text-xs text-gray-300 font-mono">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Confirmation Code:</span>
                <span className="text-[#FFC107] font-bold">{bookingConfirmed.code}</span>
              </div>
              <div className="flex justify-between">
                <span>Guest Name:</span>
                <span className="text-white">{bookingConfirmed.details.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Date & Time:</span>
                <span className="text-white">{bookingConfirmed.details.date} at {bookingConfirmed.details.time}</span>
              </div>
              <div className="flex justify-between">
                <span>Guests Count:</span>
                <span className="text-white">{bookingConfirmed.details.guests} Persons</span>
              </div>
              <div className="flex justify-between">
                <span>Seating Area:</span>
                <span className="text-white">{bookingConfirmed.details.seatingArea}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setBookingConfirmed(null)}
                className="flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition"
              >
                Make Another Reservation
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Form */}
            <div className="lg:col-span-8 bg-[#1E1E1E] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-serif font-bold text-xl text-white pb-3 border-b border-white/10 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#C62828]" />
                  <span>Reservation Details</span>
                </h3>

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Lord Harrison Sterling"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C62828]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="harrison@sterling.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C62828]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 019-2834"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C62828]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Number of Guests
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        value={formData.guests}
                        onChange={e => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C62828]"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map(num => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Reservation Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={e => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C62828]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        value={formData.time}
                        onChange={e => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C62828]"
                      >
                        <option value="12:00">12:00 PM (Lunch)</option>
                        <option value="13:30">1:30 PM (Lunch)</option>
                        <option value="17:30">5:30 PM (Dinner First Seating)</option>
                        <option value="19:00">7:00 PM (Prime Dinner)</option>
                        <option value="20:30">8:30 PM (Late Dinner)</option>
                        <option value="22:00">10:00 PM (Night Lounge)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Seating Area Preference */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2">
                    Select Atmosphere / Seating Area
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {seatingAreas.map(area => {
                      const selected = formData.seatingArea === area.name;
                      return (
                        <div
                          key={area.name}
                          onClick={() => setFormData({ ...formData, seatingArea: area.name })}
                          className={`p-3 rounded-2xl border transition cursor-pointer text-xs ${
                            selected
                              ? 'bg-[#C62828]/20 border-[#C62828] text-white'
                              : 'bg-white/5 border-white/5 text-gray-400 hover:border-white/20'
                          }`}
                        >
                          <div className="font-bold text-white mb-0.5">{area.name}</div>
                          <div className="text-[11px] text-gray-400">{area.desc}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Occasion & Requests */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Special Occasion (Optional)
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={e => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C62828]"
                  >
                    <option value="None">Regular Dining</option>
                    <option value="Birthday">Birthday Celebration</option>
                    <option value="Anniversary">Romantic Anniversary</option>
                    <option value="Business">Executive Business Dinner</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Dietary Requirements or Special Requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Allergies to shellfish, quiet table request, surprise birthday dessert..."
                    value={formData.specialRequests}
                    onChange={e => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C62828]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white font-bold text-sm shadow-xl hover:from-[#B71C1C] transition duration-300 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#FFC107]" />
                  <span>Confirm Table Booking</span>
                </button>
              </form>
            </div>

            {/* Right Information Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-3xl bg-[#1E1E1E] border border-white/10 space-y-4">
                <h4 className="font-serif font-bold text-lg text-white">Reservation Policy</h4>
                <ul className="space-y-3 text-xs text-gray-300 font-light leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFC107] font-bold">•</span>
                    <span>Tables are held for up to 20 minutes past scheduled reservation time.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFC107] font-bold">•</span>
                    <span>Smart casual or formal dress code encouraged.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFC107] font-bold">•</span>
                    <span>For parties above 20 guests, please call our VIP concierge directly.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-3xl bg-gradient-to-tr from-[#1A0000] to-[#1E1E1E] border border-[#C62828]/30 space-y-3">
                <span className="text-xs font-bold text-[#FF7043] uppercase">DIRECT CONCIERGE HELP</span>
                <h4 className="font-serif font-bold text-lg text-white">+1 (800) 888-AURA</h4>
                <p className="text-xs text-gray-400">Our reservation specialists are available 24/7 to assist with private dining arrangements.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
