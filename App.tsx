import React from 'react';
import { MenuSection } from './components/MenuSection';
import { Header } from './components/Header';
import { Quote } from './components/Quote';
import { MENU_DATA } from './constants';

const App: React.FC = () => {
  // Helper to find category data by title for manual ordering
  const getCategory = (title: string) => MENU_DATA.find(cat => cat.title === title);

  const starters = getCategory("Starters & Snacks");
  const fastFood = getCategory("Fast Food");
  const mainCourse = getCategory("Main Course");
  const breads = getCategory("Indian Breads");
  const desserts = getCategory("Desserts & Sweets");
  const beverages = getCategory("Beverages & Mocktails");

  return (
    <div 
      className="relative min-h-screen w-full"
    >
      {/* Background and texture layer */}
      <div 
        className="absolute inset-0 bg-[#2b0808]/50 backdrop-blur-sm haweli-bg-container"
        aria-hidden="true"
      />
      
      {/* Jharokha arch decoration layer */}
      <div className="top-jharokha-arch" aria-hidden="true" />

      {/* Content layer */}
      <div className="relative z-10 container mx-auto px-8 pt-40 pb-20 sm:px-12 sm:pt-48 sm:pb-24 md:px-24 md:pt-56 md:pb-32">
        <Header />
        <main>
          <Quote text="अतिथि देवो भवः" />

          {starters && <MenuSection key={starters.title} {...starters} />}
          
          {fastFood && <MenuSection key={fastFood.title} {...fastFood} />}
          
          {mainCourse && <MenuSection key={mainCourse.title} {...mainCourse} />}
          
          {breads && <MenuSection key={breads.title} {...breads} />}
          
          {desserts && <MenuSection key={desserts.title} {...desserts} />}
          
          {beverages && <MenuSection key={beverages.title} {...beverages} />}
        </main>
        <footer className="text-center py-8 mt-8">
           <p className="font-cinzel text-sm text-yellow-600/70 tracking-widest mb-6">A Royal Culinary Journey</p>
           <div className="flex items-center justify-center gap-6">
              <a 
                  href="https://www.instagram.com/thehaveli.resort?igsh=MWl6MDdhc3lmajZt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="inline-block text-yellow-500 hover:text-yellow-300 transition-colors duration-300 transform hover:scale-110"
              >
                  <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="32" 
                      height="32" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                  >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
              </a>
              <a 
                  href="mailto:info@haweliresort.com" 
                  aria-label="Send us an email"
                  className="inline-block text-yellow-500 hover:text-yellow-300 transition-colors duration-300 transform hover:scale-110"
              >
                  <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="32" 
                      height="32" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                  >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
              </a>
           </div>
        </footer>
      </div>
    </div>
  );
};

export default App;