import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center py-8 mb-8 header-ornament">
      <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 gold-text-shadow tracking-widest">
        HAVELI Resort
      </h1>
      <p className="font-cinzel text-lg md:text-xl text-yellow-400/90 mt-4 tracking-widest">
        khamma ghani sa
      </p>
      <p className="text-yellow-200/80 mt-2 text-base md:text-lg font-light tracking-wider font-inter">
        The Royal Kitchen
      </p>
    </header>
  );
};