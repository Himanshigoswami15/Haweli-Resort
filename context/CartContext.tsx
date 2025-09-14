import React, { createContext, useState, ReactNode, useContext } from 'react';
import { CartItem, Dish } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (dish: Dish) => void;
  updateQuantity: (dishName: string, quantity: number) => void;
  removeFromCart: (dishName: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (dish: Dish) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.name === dish.name);
      if (existingItem) {
        return prevItems.map(item =>
          item.name === dish.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...dish, quantity: 1 }];
    });
  };

  const updateQuantity = (dishName: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(dishName);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.name === dishName ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeFromCart = (dishName: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.name !== dishName));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
