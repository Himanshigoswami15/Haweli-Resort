import React from 'react';
import { MenuItem } from './MenuItem';
import { HorizontalMenuCarousel } from './HorizontalMenuCarousel';
import type { Dish } from '../types';

interface MenuSectionProps {
  title: string;
  items: Dish[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  const isBreakfastSection = title === "Breakfast";

  return (
    <section 
      id={title} 
      className="mt-12 scroll-mt-20"
      aria-labelledby={`${title}-heading`}
    >
      <h2 
        id={`${title}-heading`}
        className="font-cinzel text-3xl lg:text-4xl text-center font-bold text-yellow-400 mb-8 gold-text-shadow ornament-border"
      >
        {title}
      </h2>
      
      {isBreakfastSection ? (
        <HorizontalMenuCarousel items={items} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {items.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </div>
      )}
    </section>
  );
};
