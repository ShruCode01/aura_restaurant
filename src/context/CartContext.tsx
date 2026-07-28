import React, { createContext, useContext, useEffect, useState } from 'react';
import { CartItem, MenuItem } from '../types';

interface ToastMessage {
  id: string;
  type: 'cart' | 'favorite' | 'coupon' | 'info';
  message: string;
  image?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, quantity?: number, selectedOptions?: string[], specialInstructions?: string) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  tax: number;
  deliveryCharge: number;
  discount: number;
  grandTotal: number;
  couponCode: string;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  toast: ToastMessage | null;
  showToast: (msg: Omit<ToastMessage, 'id'>) => void;
  hideToast: () => void;
  quickViewItem: MenuItem | null;
  setQuickViewItem: (item: MenuItem | null) => void;
  isCartDrawerOpen: boolean;
  setIsCartDrawerOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('aura_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [couponCode, setCouponCode] = useState<string>(() => {
    return localStorage.getItem('aura_coupon') || '';
  });

  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [quickViewItem, setQuickViewItem] = useState<MenuItem | null>(null);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('aura_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('aura_coupon', couponCode);
  }, [couponCode]);

  const showToast = (msg: Omit<ToastMessage, 'id'>) => {
    const id = Date.now().toString();
    setToast({ ...msg, id });
  };

  const hideToast = () => {
    setToast(null);
  };

  const addToCart = (item: MenuItem, quantity = 1, selectedOptions = [], specialInstructions = '') => {
    setCart(prev => {
      const existingIndex = prev.findIndex(ci => ci.item.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        if (specialInstructions) {
          updated[existingIndex].specialInstructions = specialInstructions;
        }
        return updated;
      } else {
        return [...prev, { item, quantity, selectedOptions, specialInstructions }];
      }
    });

    showToast({
      type: 'cart',
      message: `Added ${quantity}x ${item.name} to your order.`,
      image: item.image
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => prev.filter(ci => ci.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(prev =>
      prev.map(ci => (ci.item.id === itemId ? { ...ci, quantity } : ci))
    );
  };

  const clearCart = () => {
    setCart([]);
    setCouponCode('');
  };

  const applyCoupon = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'AURA25') {
      setCouponCode('AURA25');
      showToast({ type: 'coupon', message: 'Coupon AURA25 applied! 25% Discount activated.' });
      return { success: true, message: '25% Discount Applied Successfully!' };
    } else if (cleanCode === 'WAGYU40') {
      setCouponCode('WAGYU40');
      showToast({ type: 'coupon', message: 'Coupon WAGYU40 applied! 30% Gourmet Discount activated.' });
      return { success: true, message: '30% Special Gourmet Discount Applied!' };
    } else if (cleanCode === 'FREEDEL') {
      setCouponCode('FREEDEL');
      showToast({ type: 'coupon', message: 'Coupon FREEDEL applied! Free Delivery unlocked.' });
      return { success: true, message: 'Free Delivery Activated!' };
    } else if (cleanCode === 'WELCOME10') {
      setCouponCode('WELCOME10');
      showToast({ type: 'coupon', message: 'Coupon WELCOME10 applied! 10% Welcome Discount.' });
      return { success: true, message: '10% Welcome Discount Applied!' };
    } else {
      return { success: false, message: 'Invalid promo code. Try AURA25 or FREEDEL' };
    }
  };

  const removeCoupon = () => {
    setCouponCode('');
  };

  // Totals calculations
  const cartCount = cart.reduce((sum, ci) => sum + ci.quantity, 0);
  const subtotal = cart.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);
  const tax = Math.round(subtotal * 0.05 * 100) / 100; // 5% tax

  let discount = 0;
  let deliveryCharge = subtotal > 0 ? (subtotal >= 60 ? 0 : 4.99) : 0;

  if (couponCode === 'AURA25') {
    discount = Math.round(subtotal * 0.25 * 100) / 100;
  } else if (couponCode === 'WAGYU40') {
    discount = Math.round(subtotal * 0.30 * 100) / 100;
  } else if (couponCode === 'WELCOME10') {
    discount = Math.round(subtotal * 0.10 * 100) / 100;
  } else if (couponCode === 'FREEDEL') {
    deliveryCharge = 0;
  }

  const grandTotal = Math.max(0, Math.round((subtotal + tax + deliveryCharge - discount) * 100) / 100);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        tax,
        deliveryCharge,
        discount,
        grandTotal,
        couponCode,
        applyCoupon,
        removeCoupon,
        toast,
        showToast,
        hideToast,
        quickViewItem,
        setQuickViewItem,
        isCartDrawerOpen,
        setIsCartDrawerOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
