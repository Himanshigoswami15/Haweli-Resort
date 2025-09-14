import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { CartModal } from './CartModal';

export const CartFAB: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    if (totalItems > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 400); // Duration of the animation
      return () => clearTimeout(timer);
    }
  }, [totalItems]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  
  return (
    <>
      <button
        onClick={toggleCart}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 text-[#4d2d1d] flex items-center justify-center shadow-2xl shadow-black/50 transition-transform duration-300 hover:scale-110 ${isAnimating ? 'item-added' : ''}`}
        aria-label={`View your cart, ${totalItems} items`}
        aria-haspopup="dialog"
        aria-expanded={isCartOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-[#4d2d1d]">
            {totalItems}
          </span>
        )}
      </button>
      <CartModal isOpen={isCartOpen} onClose={toggleCart} />
    </>
  );
};
