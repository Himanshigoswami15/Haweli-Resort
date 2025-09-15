import React, { useRef, useState, useEffect, useCallback } from 'react';
import { MenuItem } from './MenuItem';
import type { Dish } from '../types';

interface HorizontalMenuCarouselProps {
  items: Dish[];
}

export const HorizontalMenuCarousel: React.FC<HorizontalMenuCarouselProps> = ({ items }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [thumbStyle, setThumbStyle] = useState<{ width: string, left: string }>({ width: '0%', left: '0%' });

  const updateScrollIndicator = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) {
      const { scrollWidth, clientWidth, scrollLeft } = el;
      const hasOverflow = scrollWidth > clientWidth;
      setIsScrollable(hasOverflow);

      if (hasOverflow) {
        const thumbWidth = (clientWidth / scrollWidth) * 100;
        const thumbPosition = (scrollLeft / scrollWidth) * 100;
        
        setThumbStyle({
          width: `${thumbWidth}%`,
          left: `${thumbPosition}%`,
        });
      }
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      // Defer the initial check to ensure layout is complete
      const timeoutId = setTimeout(updateScrollIndicator, 150);
      
      el.addEventListener('scroll', updateScrollIndicator, { passive: true });
      window.addEventListener('resize', updateScrollIndicator);

      return () => {
        clearTimeout(timeoutId);
        el.removeEventListener('scroll', updateScrollIndicator);
        window.removeEventListener('resize', updateScrollIndicator);
      };
    }
  }, [items, updateScrollIndicator]);

  return (
    <div className="relative">
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

      {isScrollable && (
        <div className="carousel-scrollbar-track" aria-hidden="true">
          <div className="carousel-scrollbar-thumb" style={thumbStyle}></div>
        </div>
      )}
    </div>
  );
};
