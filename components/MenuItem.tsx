import React, { useContext } from 'react';
import type { Dish } from '../types';
import { CartContext } from '../context/CartContext';
import { QuantityControl } from './QuantityControl';

export const MenuItem: React.FC<Dish> = (dish) => {
  const { name, description, price, isHighlight, imageUrl } = dish;
  
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    // This should not happen if the component is rendered within CartProvider
    return <div>Error: Cart context not found</div>;
  }
  const { cartItems, addToCart } = cartContext;

  const itemInCart = cartItems.find(item => item.name === name);

  const cardClasses = [
    "h-full flex flex-col",
    "bg-gradient-to-br from-[#6b4f3a]/60 to-[#2b1a0e]/80",
    "backdrop-blur-sm border border-amber-800/50 rounded-lg",
    "transition-all duration-300 ease-in-out",
    "hover:shadow-2xl hover:shadow-amber-500/20 hover:border-amber-500/70 hover:scale-105 transform",
    "overflow-hidden",
    isHighlight ? "highlight-card" : ""
  ].join(" ");

  return (
    <div className={cardClasses}>
      {imageUrl && (
        <div className="relative w-full aspect-video">
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6 flex-grow flex flex-col menu-card-hover-effect">
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-cinzel text-xl font-bold text-amber-300 gold-text-shadow flex-1">
            {name}
          </h3>
          <p className="font-cinzel text-lg font-bold text-amber-200 whitespace-nowrap">
            ₹{price}
          </p>
        </div>
        <p className="font-lora text-amber-100/80 mt-2 text-base flex-grow">
          {description}
        </p>
        <div className="mt-4 flex justify-end">
          {itemInCart ? (
            <QuantityControl item={itemInCart} />
          ) : (
            <button
              onClick={() => addToCart(dish)}
              className="font-cinzel text-sm font-bold bg-gradient-to-r from-yellow-500 to-amber-500 text-[#4d2d1d] py-2 px-6 rounded-md shadow-lg hover:shadow-amber-400/30 transform transition-all duration-300 hover:scale-105"
              aria-label={`Add ${name} to cart`}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};