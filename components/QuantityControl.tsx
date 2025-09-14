import React from 'react';
import { useCart } from '../context/CartContext';
import { CartItem } from '../types';

interface QuantityControlProps {
  item: CartItem;
}

export const QuantityControl: React.FC<QuantityControlProps> = ({ item }) => {
  const { updateQuantity } = useCart();

  return (
    <div className="flex items-center gap-2 bg-amber-500/20 rounded-md">
      <button
        onClick={() => updateQuantity(item.name, item.quantity - 1)}
        className="px-3 py-2 text-amber-300 hover:text-white transition-colors duration-200"
        aria-label={`Decrease quantity of ${item.name}`}
      >
        -
      </button>
      <span className="font-bold font-cinzel text-lg text-amber-200 w-8 text-center" aria-live="polite">
        {item.quantity}
      </span>
      <button
        onClick={() => updateQuantity(item.name, item.quantity + 1)}
        className="px-3 py-2 text-amber-300 hover:text-white transition-colors duration-200"
        aria-label={`Increase quantity of ${item.name}`}
      >
        +
      </button>
    </div>
  );
};
