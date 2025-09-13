
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center py-8 mb-8">
      <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 gold-text-shadow tracking-widest">
        HAWELI Resort
      </h1>
      <p className="text-yellow-200/80 mt-2 text-lg font-light tracking-wider font-inter">
        The Royal Kitchen
      </p>
    </header>
  );
};
