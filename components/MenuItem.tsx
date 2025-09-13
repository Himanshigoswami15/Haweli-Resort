import React from 'react';
import type { Dish } from '../types';

export const MenuItem: React.FC<Dish> = ({ name, description, price, imageUrl }) => {
  return (
    <div className="bg-gradient-to-br from-[#4a2c1a]/60 to-[#2a1a0f]/80 backdrop-blur-sm border border-amber-800/50 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-amber-500/20 hover:border-amber-500/70 hover:scale-105 transform group">
      <div className="relative overflow-hidden">
        <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-cinzel text-xl font-bold text-amber-300 gold-text-shadow flex-1">
            {name}
          </h3>
          <p className="font-cinzel text-lg font-bold text-amber-200 whitespace-nowrap">
            {price}
          </p>
        </div>
        <p className="font-lora text-amber-100/80 mt-2 text-base">
          {description}
        </p>
      </div>
    </div>
  );
};