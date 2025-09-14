import React, { useEffect, useRef } from 'react';

interface NavbarProps {
  titles: string[];
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ titles, activeSection }) => {
  const navContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navContainerRef.current) {
      const activeLink = navContainerRef.current.querySelector<HTMLAnchorElement>(`a[href="#${activeSection}"]`);
      if (activeLink) {
        activeLink.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeSection]);

  return (
    <nav 
      className="sticky top-0 z-40 bg-gradient-to-b from-[#3c2415] to-[#2b1a0e]/90 backdrop-blur-md shadow-lg shadow-black/30 border-y border-amber-800/50 my-12"
      aria-label="Menu Sections"
    >
      <div ref={navContainerRef} className="container mx-auto px-4">
        <div className="flex items-center justify-start md:justify-center overflow-x-auto whitespace-nowrap py-3 nav-scrollbar">
            {titles.map((title) => {
              const isActive = title === activeSection;
              return (
                <a
                  key={title}
                  href={`#${title}`}
                  className={`relative font-cinzel text-base font-semibold transition-all duration-300 tracking-wider transform px-4 py-2 ${
                    isActive
                      ? 'text-yellow-300 scale-110'
                      : 'text-amber-400/70 hover:text-yellow-400'
                  }`}
                >
                  {title}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-yellow-400 rounded-full"></span>
                  )}
                </a>
              );
            })}
        </div>
      </div>
    </nav>
  );
};