import React from 'react';
import type { Dish } from '../types';

export const MenuItem: React.FC<Dish> = ({ name, description, price, isHighlight }) => {
  const cardClasses = [
    "h-full flex flex-col justify-center",
    "bg-gradient-to-br from-[#6b4f3a]/60 to-[#2b1a0e]/80",
    "backdrop-blur-sm border border-amber-800/50 rounded-lg",
    "transition-all duration-300 ease-in-out",
    "hover:shadow-2xl hover:shadow-amber-500/20 hover:border-amber-500/70 hover:scale-105 transform",
    "menu-card-hover-effect",
    isHighlight ? "highlight-card" : ""
  ].join(" ");

  return (
    <div className={cardClasses}>
      <div className="p-6">
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