import React from 'react';

interface NavbarProps {
  titles: string[];
}

export const Navbar: React.FC<NavbarProps> = ({ titles }) => {
  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#3c2415] to-[#2b1a0e]/80 backdrop-blur-md shadow-lg shadow-black/30 border-b border-amber-800/50"
      aria-label="Menu Sections"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start md:justify-center overflow-x-auto whitespace-nowrap py-4 nav-scrollbar">
            {titles.map((title) => (
              <a
                key={title}
                href={`#${title}`}
                className="font-cinzel text-base font-semibold text-amber-300 hover:text-yellow-400 transition-colors duration-300 tracking-wider transform hover:scale-105 px-3"
              >
                {title}
              </a>
            ))}
        </div>
      </div>
    </nav>
  );
};