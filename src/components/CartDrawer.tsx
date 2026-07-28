import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    tax,
    deliveryCharge,
    discount,
    grandTotal,
    couponCode,
    applyCoupon,
    removeCoupon
  } = useCart();

  const [inputCoupon, setInputCoupon] = React.useState('');
  const [couponError, setCouponError] = React.useState('');
  const navigate = useNavigate();

  if (!isCartDrawerOpen) return null;

  const handleCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon.trim()) return;
    const res = applyCoupon(inputCoupon);
    if (res.success) {
      setCouponError('');
      setInputCoupon('');
    } else {
      setCouponError(res.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md bg-[#1E1E1E] border-l border-white/10 h-full flex flex-col justify-between shadow-2xl animate-slide-left">
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#C62828]" />
            <h3 className="font-serif font-bold text-lg text-white">Your Order</h3>
            <span className="px-2 py-0.5 rounded-full bg-[#C62828]/20 text-[#FF7043] text-xs font-mono font-bold">
              {cart.reduce((s, c) => s + c.quantity, 0)} items
            </span>
          </div>
          <button
            onClick={() => setIsCartDrawerOpen(false)}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 no-scrollbar">
          {cart.length === 0 ? (
            <div className="py-20 text-center text-gray-500">
              <ShoppingBag className="w-12 h-12 mx-auto mb-3 text-gray-600 opacity-60" />
              <p className="font-serif text-lg text-white mb-1">Your bag is empty</p>
              <p className="text-xs text-gray-400 mb-6">Explore our gourmet menu and add luxury dishes.</p>
              <button
                onClick={() => {
                  setIsCartDrawerOpen(false);
                  navigate('/menu');
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white font-semibold text-xs shadow-lg"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            cart.map(ci => (
              <div
                key={ci.item.id}
                className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex gap-3 items-center justify-between"
              >
                <img
                  src={ci.item.image}
                  alt={ci.item.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="font-serif font-bold text-sm text-white truncate">
                    {ci.item.name}
                  </h4>
                  <span className="text-xs text-[#FFC107] font-mono font-bold">
                    ${(ci.item.price * ci.quantity).toFixed(2)}
                  </span>
                  {ci.selectedOptions && ci.selectedOptions.length > 0 && (
                    <div className="text-[10px] text-gray-400 truncate">
                      {ci.selectedOptions.join(', ')}
                    </div>
                  )}
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 bg-black/40 p-1 rounded-xl border border-white/10">
                  <button
                    onClick={() => updateQuantity(ci.item.id, ci.quantity - 1)}
                    className="p-1 rounded-lg text-gray-400 hover:text-white"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-mono font-bold w-4 text-center text-white">
                    {ci.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(ci.item.id, ci.quantity + 1)}
                    className="p-1 rounded-lg text-gray-400 hover:text-white"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(ci.item.id)}
                  className="p-1.5 text-gray-500 hover:text-rose-400 transition"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-white/10 bg-black/40 space-y-3">
            {/* Promo Code Input */}
            <div>
              {couponCode ? (
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <span>Coupon <strong>{couponCode}</strong> applied</span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-gray-400 hover:text-white underline text-[11px]"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCouponSubmit} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Coupon code (e.g. AURA25)"
                    value={inputCoupon}
                    onChange={e => setInputCoupon(e.target.value)}
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C62828]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition"
                  >
                    Apply
                  </button>
                </form>
              )}
              {couponError && <p className="text-[11px] text-rose-400 mt-1">{couponError}</p>}
            </div>

            {/* Bill Breakdown */}
            <div className="space-y-1.5 text-xs text-gray-400 pt-2 border-t border-white/5">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax (5%)</span>
                <span className="font-mono text-white">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charge</span>
                <span className="font-mono text-white">
                  {deliveryCharge === 0 ? 'FREE' : `$${deliveryCharge.toFixed(2)}`}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-amber-400 font-semibold">
                  <span>Discount</span>
                  <span className="font-mono">-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/10">
                <span>Grand Total</span>
                <span className="font-mono text-[#FFC107]">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsCartDrawerOpen(false);
                navigate('/cart');
              }}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xl hover:from-[#B71C1C] hover:to-[#8E0000] transition-all"
            >
              <span>Proceed To Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
