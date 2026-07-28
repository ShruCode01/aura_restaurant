import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  Tag,
  CreditCard,
  Truck,
  Building,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const CartPage: React.FC = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    tax,
    deliveryCharge,
    discount,
    grandTotal,
    couponCode,
    applyCoupon,
    removeCoupon
  } = useCart();

  const navigate = useNavigate();

  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [couponInput, setCouponInput] = useState('');
  const [couponMsg, setCouponMsg] = useState('');

  // Checkout modal state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'applepay' | 'cash'>('card');
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    phone: '',
    address: '',
    city: 'New York',
    notes: ''
  });

  const [orderConfirmed, setOrderConfirmed] = useState<{
    id: string;
    total: number;
    details: typeof deliveryInfo;
  } | null>(null);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const res = applyCoupon(couponInput);
    setCouponMsg(res.message);
    if (res.success) setCouponInput('');
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!deliveryInfo.name || !deliveryInfo.phone) return;

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {}

    const orderId = 'AURA-ORD-' + Math.floor(100000 + Math.random() * 900000);
    setOrderConfirmed({ id: orderId, total: grandTotal, details: deliveryInfo });
    clearCart();
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/menu')}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition"
              aria-label="Back to menu"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-3xl font-serif font-bold text-white">Online Ordering & Checkout</h1>
              <p className="text-xs text-gray-400">Review your gourmet items and place your order</p>
            </div>
          </div>

          <span className="px-3 py-1 rounded-full bg-[#C62828]/20 border border-[#C62828]/30 text-xs font-bold text-[#FF7043]">
            {cart.reduce((s, c) => s + c.quantity, 0)} Items In Bag
          </span>
        </div>

        {orderConfirmed ? (
          <div className="max-w-2xl mx-auto bg-[#1E1E1E] rounded-3xl p-8 sm:p-12 border border-emerald-500/40 shadow-2xl text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase text-emerald-400 tracking-widest block mb-1">
                ORDER PLACED SUCCESSFULLY
              </span>
              <h2 className="text-3xl font-serif font-bold text-white mb-2">
                Your Gourmet Order Is Being Prepared!
              </h2>
              <p className="text-xs text-gray-300">
                Order ID: <strong className="text-[#FFC107] font-mono">{orderConfirmed.id}</strong>. Estimated delivery time: 30 minutes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/50 border border-white/10 text-left space-y-2 text-xs text-gray-300 font-mono">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Customer:</span>
                <span className="text-white">{orderConfirmed.details.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Contact Phone:</span>
                <span className="text-white">{orderConfirmed.details.phone}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Address:</span>
                <span className="text-white">{orderConfirmed.details.address || 'Pickup at Aura Restaurant'}</span>
              </div>
              <div className="flex justify-between font-bold text-sm text-amber-400 pt-2 border-t border-white/10">
                <span>Total Paid:</span>
                <span>${orderConfirmed.total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setOrderConfirmed(null);
                navigate('/menu');
              }}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white font-semibold text-xs shadow-xl"
            >
              Return To Menu
            </button>
          </div>
        ) : cart.length === 0 ? (
          <div className="py-24 text-center glass-panel rounded-3xl p-12 max-w-lg mx-auto space-y-4">
            <ShoppingBag className="w-16 h-16 text-gray-600 mx-auto opacity-50" />
            <h2 className="text-2xl font-serif font-bold text-white">Your Shopping Cart Is Empty</h2>
            <p className="text-xs text-gray-400 leading-relaxed">
              Explore our fine dining creations and add Wagyu steaks, truffle pasta, and signature cocktails.
            </p>
            <button
              onClick={() => navigate('/menu')}
              className="px-8 py-3 rounded-2xl bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white font-semibold text-xs shadow-xl"
            >
              Browse Menu Now
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Items List */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Cart Items</span>
                <button
                  onClick={clearCart}
                  className="text-rose-400 hover:underline flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear Bag</span>
                </button>
              </div>

              {cart.map(ci => (
                <div
                  key={ci.item.id}
                  className="p-4 rounded-3xl bg-[#1E1E1E] border border-white/10 flex items-center justify-between gap-4 shadow-xl"
                >
                  <img
                    src={ci.item.image}
                    alt={ci.item.name}
                    className="w-20 h-20 rounded-2xl object-cover shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] text-[#FF7043] font-bold uppercase">{ci.item.category}</span>
                    <h3 className="font-serif font-bold text-base text-white truncate">{ci.item.name}</h3>
                    <span className="text-xs font-mono font-bold text-[#FFC107] block mt-0.5">
                      ${(ci.item.price * ci.quantity).toFixed(2)}
                    </span>
                    {ci.selectedOptions && ci.selectedOptions.length > 0 && (
                      <p className="text-[10px] text-gray-400 mt-1 line-clamp-1">
                        Options: {ci.selectedOptions.join(', ')}
                      </p>
                    )}
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 bg-black/40 p-1.5 rounded-2xl border border-white/10">
                    <button
                      onClick={() => updateQuantity(ci.item.id, ci.quantity - 1)}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-white"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-mono font-bold w-6 text-center text-white">
                      {ci.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(ci.item.id, ci.quantity + 1)}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-white"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(ci.item.id)}
                    className="p-2 text-gray-500 hover:text-rose-400 transition"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Right Order Summary & Checkout */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#1E1E1E] rounded-3xl p-6 border border-white/10 shadow-2xl space-y-6">
                <h3 className="font-serif font-bold text-xl text-white pb-3 border-b border-white/10">
                  Order Summary
                </h3>

                {/* Order Type Toggle */}
                <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-black/40 border border-white/10">
                  <button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    className={`py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition ${
                      orderType === 'delivery'
                        ? 'bg-[#C62828] text-white shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Truck className="w-3.5 h-3.5" />
                    <span>Delivery</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('pickup')}
                    className={`py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition ${
                      orderType === 'pickup'
                        ? 'bg-[#C62828] text-white shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Building className="w-3.5 h-3.5" />
                    <span>Self Pickup</span>
                  </button>
                </div>

                {/* Promo Coupon Form */}
                <div>
                  {couponCode ? (
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4" />
                        <span>Coupon <strong>{couponCode}</strong> Active</span>
                      </div>
                      <button onClick={removeCoupon} className="text-gray-400 hover:text-white underline text-[11px]">
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyCoupon} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Promo Code (AURA25)"
                        value={couponInput}
                        onChange={e => setCouponInput(e.target.value)}
                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C62828]"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
                      >
                        Apply
                      </button>
                    </form>
                  )}
                  {couponMsg && <p className="text-[11px] text-rose-400 mt-1">{couponMsg}</p>}
                </div>

                {/* Calculation Rows */}
                <div className="space-y-2 text-xs text-gray-300 font-light pt-2 border-t border-white/5">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-mono text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Tax (5%)</span>
                    <span className="font-mono text-white">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span className="font-mono text-white">
                      {orderType === 'pickup' ? 'FREE ($0)' : deliveryCharge === 0 ? 'FREE' : `$${deliveryCharge.toFixed(2)}`}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-amber-400 font-semibold">
                      <span>Promo Discount</span>
                      <span className="font-mono">-${discount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-base font-bold text-white pt-3 border-t border-white/10">
                    <span>Grand Total</span>
                    <span className="font-mono text-[#FFC107]">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white font-bold text-sm shadow-xl hover:from-[#B71C1C] transition duration-300 flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Proceed To Payment (${grandTotal.toFixed(2)})</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Checkout Modal */}
        {isCheckoutOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="w-full max-w-xl bg-[#1E1E1E] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <h3 className="font-serif font-bold text-xl text-white">Complete Your Order</h3>
                <button
                  onClick={() => setIsCheckoutOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handlePlaceOrder} className="space-y-4 text-xs">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Victoria Sterling"
                    value={deliveryInfo.name}
                    onChange={e => setDeliveryInfo({ ...deliveryInfo, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#C62828]"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 012-3456"
                    value={deliveryInfo.phone}
                    onChange={e => setDeliveryInfo({ ...deliveryInfo, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#C62828]"
                  />
                </div>

                {orderType === 'delivery' && (
                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">Delivery Address *</label>
                    <input
                      type="text"
                      required
                      placeholder="742 Evergreen Terrace, Suite 4B, New York"
                      value={deliveryInfo.address}
                      onChange={e => setDeliveryInfo({ ...deliveryInfo, address: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#C62828]"
                    />
                  </div>
                )}

                {/* Payment Options */}
                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Select Payment Method</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'card', name: 'Credit Card' },
                      { id: 'applepay', name: 'Apple Pay' },
                      { id: 'cash', name: 'Cash On Delivery' }
                    ].map(p => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPaymentMethod(p.id as any)}
                        className={`p-2.5 rounded-xl border text-center transition ${
                          paymentMethod === p.id
                            ? 'bg-[#C62828]/20 border-[#C62828] text-white font-bold'
                            : 'bg-white/5 border-white/5 text-gray-400'
                        }`}
                      >
                        {p.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white font-bold text-sm shadow-xl"
                  >
                    Place Order (${grandTotal.toFixed(2)})
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
