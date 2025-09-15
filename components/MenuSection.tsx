import React from 'react';
import { HorizontalMenuCarousel } from './HorizontalMenuCarousel';
import type { Dish } from '../types';

interface MenuSectionProps {
  title: string;
  items: Dish[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
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
      
      <HorizontalMenuCarousel items={items} />
    </section>
  );
};
