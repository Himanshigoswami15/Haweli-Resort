import React, { useRef, useState, useEffect, useCallback } from 'react';
import type { MenuCategory } from '../types';

interface SectionCarouselProps {
  categories: MenuCategory[];
}

export const SectionCarousel: React.FC<SectionCarouselProps> = ({ categories }) => {
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
      const timeoutId = setTimeout(updateScrollIndicator, 150);
      
      el.addEventListener('scroll', updateScrollIndicator, { passive: true });
      window.addEventListener('resize', updateScrollIndicator);

      return () => {
        clearTimeout(timeoutId);
        el.removeEventListener('scroll', updateScrollIndicator);
        window.removeEventListener('resize', updateScrollIndicator);
      };
    }
  }, [categories, updateScrollIndicator]);

  return (
    <div className="relative mb-12">
      <div 
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto pb-4 nav-scrollbar"
      >
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

      {isScrollable && (
        <div className="carousel-scrollbar-track" aria-hidden="true">
          <div className="carousel-scrollbar-thumb" style={thumbStyle}></div>
        </div>
      )}
    </div>
  );
};