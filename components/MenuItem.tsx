
import React from 'react';
import type { Dish } from '../types';

export const MenuItem: React.FC<Dish> = ({ name, description, price, imageUrl }) => {
  return (
    <div className="bg-slate-900/40 border border-yellow-800/50 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-yellow-500/10 hover:border-yellow-600/70 hover:scale-105 transform">
      <div className="relative">
        <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-cinzel text-xl font-bold text-yellow-300 gold-text-shadow flex-1">
            {name}
          </h3>
          <p className="font-cinzel text-lg font-bold text-yellow-200 whitespace-nowrap">
            {price}
          </p>
        </div>
        <p className="font-inter text-gray-300 mt-2 text-sm font-light">
          {description}
        </p>
      </div>
    </div>
  );
};
