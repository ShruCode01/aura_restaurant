import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, ShoppingBag, Heart, Tag, X } from 'lucide-react';

export const NotificationToast: React.FC = () => {
  const { toast, hideToast } = useCart();

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        hideToast();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast, hideToast]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-bounce-short">
      <div className="glass-card rounded-xl p-4 border border-[#C62828]/30 shadow-2xl flex items-center gap-3 bg-[#1E1E1E]/95 backdrop-blur-md">
        {toast.image ? (
          <img
            src={toast.image}
            alt="Item"
            className="w-12 h-12 rounded-lg object-cover border border-white/10"
          />
        ) : (
          <div className="p-2.5 rounded-lg bg-[#C62828]/20 text-[#FF7043]">
            {toast.type === 'cart' && <ShoppingBag className="w-5 h-5 text-[#C62828]" />}
            {toast.type === 'favorite' && <Heart className="w-5 h-5 text-[#FF7043]" />}
            {toast.type === 'coupon' && <Tag className="w-5 h-5 text-[#FFC107]" />}
            {toast.type === 'info' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
          </div>
        )}

        <div className="flex-1 text-sm text-white">
          <p className="font-medium">{toast.message}</p>
        </div>

        <button
          onClick={hideToast}
          className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
