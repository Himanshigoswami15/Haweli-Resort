import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="my-8 px-4 md:px-0">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none" aria-hidden="true">
          <svg className="h-5 w-5 text-amber-400/60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
        <input
          type="text"
          name="search"
          id="search"
          className="block w-full bg-[#2b1a0e]/70 border-2 border-amber-800/50 focus:ring-amber-500 focus:border-amber-500 rounded-lg py-3 pl-11 pr-10 text-amber-200 placeholder-amber-400/50 font-lora transition-colors duration-300"
          placeholder="Search for a royal delicacy..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Search menu items"
        />
        {value && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button
              onClick={() => onChange('')}
              className="p-1 rounded-full text-amber-400/60 hover:text-amber-200 hover:bg-amber-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#2b1a0e] focus:ring-amber-500"
              aria-label="Clear search"
            >
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
