import React, { useState, useEffect } from 'react';
import { MenuSection } from './components/MenuSection';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { CartFAB } from './components/CartFAB';
import { CartProvider } from './context/CartContext';
import { MENU_DATA } from './constants';

const App: React.FC = () => {
  const sectionTitles = MENU_DATA.map(category => category.title);
  const [activeSection, setActiveSection] = useState<string>(sectionTitles[0] || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -60% 0px', // Trigger when the section is in the middle of the viewport
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);


  return (
    <CartProvider>
      <div 
        className="relative min-h-screen w-full"
      >
        {/* Background and texture layer */}
        <div 
          className="absolute inset-0 bg-[#2b1a0e]/50 backdrop-blur-sm haveli-bg-container"
          aria-hidden="true"
        />
        
        {/* Jharokha arch decoration layer */}
        <div className="top-jharokha-arch" aria-hidden="true" />

        {/* Content layer */}
        <div className="relative z-10 container mx-auto menu-frame px-8 pt-40 pb-20 sm:px-12 sm:pt-48 sm:pb-24 md:px-24 md:pt-56 md:pb-32">
          <Header />
          <main>
            {/* Navigation Bar */}
            <Navbar titles={sectionTitles} activeSection={activeSection} />

            {MENU_DATA.map((category) => (
              <MenuSection key={category.title} {...category} />
            ))}

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
                    href="mailto:info@haveliresort.com" 
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

        {/* Floating Action Button for Cart */}
        <CartFAB />
      </div>
    </CartProvider>
  );
};

export default App;