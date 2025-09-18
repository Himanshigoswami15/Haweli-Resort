import React from 'react';
import { HorizontalMenuCarousel } from './HorizontalMenuCarousel';
import type { Dish } from '../types';

interface MenuSectionProps {
  title: string;
  description?: string;
  items: Dish[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ title, items, description }) => {
  return (
    <section 
      id={title} 
      className="mt-12"
      aria-labelledby={`${title}-heading`}
    >
      <div className="mb-8 text-center ornament-border">
        <h2 
          id={`${title}-heading`}
          className="font-cinzel text-3xl lg:text-4xl font-bold text-yellow-400 gold-text-shadow"
        >
          {title}
        </h2>
        {description && (
          <p className="font-lora text-amber-200/80 mt-2 text-base italic">
            {description}
          </p>
        )}
      </div>
      
      <HorizontalMenuCarousel items={items} />
    </section>
  );
};
