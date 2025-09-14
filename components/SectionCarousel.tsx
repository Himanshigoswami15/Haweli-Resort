import React from 'react';
import type { MenuCategory } from '../types';

interface SectionCarouselProps {
  categories: MenuCategory[];
}

export const SectionCarousel: React.FC<SectionCarouselProps> = ({ categories }) => {
  return (
    <div className="mb-12">
      <div className="flex gap-4 overflow-x-auto pb-4 nav-scrollbar">
        {categories.map((category) => (
          <a
            key={category.title}
            href={`#${category.title}`}
            className="relative w-48 h-28 flex-shrink-0 rounded-lg overflow-hidden group transition-transform duration-300 transform hover:scale-105 shadow-lg"
          >
            {/* Background Image */}
            <img
              src={category.items[0]?.imageUrl || ''}
              alt={category.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 transition-all duration-300 group-hover:from-black/60"></div>
            
            {/* Title */}
            <div className="relative z-10 flex items-end justify-center h-full p-3">
              <h3 className="font-cinzel text-lg text-white font-bold text-center gold-text-shadow tracking-wide">
                {category.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};