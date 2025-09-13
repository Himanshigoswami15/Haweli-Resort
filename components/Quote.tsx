import React from 'react';

interface QuoteProps {
  text: string;
}

export const Quote: React.FC<QuoteProps> = ({ text }) => {
  return (
    <div className="text-center py-8">
      <p className="font-lora italic text-2xl text-amber-200/80 tracking-wider">
        "{text}"
      </p>
    </div>
  );
};
