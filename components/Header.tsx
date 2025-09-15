import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center py-8 mb-8 header-ornament">
      <h1 className="flex justify-center items-baseline gap-2 sm:gap-4 mb-6">
        <span className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 gold-text-shadow tracking-wider">
          THE
        </span>
        <span className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 gold-text-shadow tracking-widest">
          HAVELI
        </span>
        <span className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 gold-text-shadow tracking-wider">
          RESORT
        </span>
      </h1>
      <p className="font-cinzel text-lg md:text-xl text-yellow-400/90 tracking-widest">
        khamma ghani sa
      </p>
      <p className="text-yellow-200/80 text-base md:text-lg font-light tracking-wider font-inter">
        The Royal Kitchen
      </p>
    </header>
  );
};