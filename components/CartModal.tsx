import React from 'react';
import { useCart } from '../context/CartContext';
import { QuantityControl } from './QuantityControl';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cartItems, clearCart } = useCart();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    alert('Thank you for your order! Our royal staff will attend to you shortly.');
    clearCart();
    onClose();
  };
  
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center" 
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-heading"
    >
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm cart-modal-overlay ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Modal Panel */}
      <div className={`relative z-10 w-full max-w-lg m-4 h-[80vh] flex flex-col bg-gradient-to-br from-[#4d2d1d] to-[#2b1a0e] border-2 border-amber-600/50 rounded-lg shadow-2xl shadow-black/60 cart-modal-panel ${isOpen ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}>
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b border-amber-800/50">
          <h2 id="cart-heading" className="font-cinzel text-2xl font-bold text-amber-300 gold-text-shadow">
            Your Royal Order
          </h2>
          <button onClick={onClose} className="text-amber-300 hover:text-white" aria-label="Close cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </header>

        {/* Body */}
        <div className="flex-grow p-4 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-amber-200/80 text-lg">Your scroll is empty.</p>
              <p className="text-amber-200/60 mt-2">Add delicacies from the menu to begin your feast.</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {cartItems.map(item => (
                <li key={item.name} className="flex items-center gap-4 p-2 bg-black/20 rounded-md">
                  <img src={item.imageUrl} alt={item.name} className="w-16 h-16 rounded-md object-cover"/>
                  <div className="flex-grow">
                    <p className="font-cinzel text-amber-300 font-semibold">{item.name}</p>
                    <p className="text-sm text-amber-200">₹{item.price}</p>
                  </div>
                  <QuantityControl item={item} />
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <footer className="p-4 border-t border-amber-800/50">
            <div className="flex justify-between items-center mb-4">
              <span className="font-cinzel text-xl text-amber-300">Total:</span>
              <span className="font-cinzel text-2xl font-bold text-amber-200 gold-text-shadow">₹{totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="w-full font-cinzel text-lg font-bold bg-gradient-to-r from-yellow-500 to-amber-500 text-[#4d2d1d] py-3 rounded-md shadow-lg hover:shadow-amber-400/30 transform transition-all duration-300 hover:scale-105"
            >
              Place Order
            </button>
          </footer>
        )}
      </div>
    </div>
  );
};
