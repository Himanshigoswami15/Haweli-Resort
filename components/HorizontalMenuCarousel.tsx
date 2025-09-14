import React, { useRef } from 'react';
import { MenuItem } from './MenuItem';
import type { Dish } from '../types';

interface HorizontalMenuCarouselProps {
  items: Dish[];
}

export const HorizontalMenuCarousel: React.FC<HorizontalMenuCarouselProps> = ({ items }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Left Scroll Button */}
      <button 
        onClick={() => scroll(-300)} 
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm text-amber-300 hover:bg-black/50 transition-all duration-300"
        aria-label="Scroll left"
      >
        &#x276E;
      </button>

      <div 
        ref={scrollContainerRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory py-4 px-2 nav-scrollbar"
      >
        {items.map((item) => (
          <div key={item.name} className="snap-start flex-shrink-0 w-11/12 sm:w-80 md:w-96">
            <MenuItem {...item} />
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
       <button 
        onClick={() => scroll(300)} 
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm text-amber-300 hover:bg-black/50 transition-all duration-300"
        aria-label="Scroll right"
      >
        &#x276F;
      </button>
    </div>
  );
};
