import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MessageSquare, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const StickyReservationBar: React.FC = () => {
  const navigate = useNavigate();
  const { cartCount, setIsCartDrawerOpen } = useCart();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#181818]/95 border-t border-white/10 backdrop-blur-xl px-4 py-2.5 shadow-2xl md:hidden">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <button
          onClick={() => navigate('/reservation')}
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-lg active:scale-95 transition"
        >
          <Calendar className="w-4 h-4 text-white" />
          <span>Book Table</span>
        </button>

        <button
          onClick={() => setIsCartDrawerOpen(true)}
          className="relative py-2.5 px-3 rounded-xl bg-white/10 border border-white/10 text-white text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition"
        >
          <ShoppingBag className="w-4 h-4 text-[#FFC107]" />
          <span>Cart ({cartCount})</span>
        </button>

        <a
          href="https://wa.me/18008882872?text=Hello%20Aura%20Restaurant,%20I%20would%20like%20to%20place%20an%20order/reservation"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-3 rounded-xl bg-emerald-600 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-lg active:scale-95 transition"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
