import React from 'react';
import { MenuSection } from './components/MenuSection';
import { Header } from './components/Header';
import { MENU_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603215284992-d7c719c8f070?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')" }}
    >
      <div className="min-h-screen w-full bg-[#2a1a0f]/70 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Header />
          <main className="space-y-16">
            {MENU_DATA.map((category) => (
              <MenuSection key={category.title} title={category.title} items={category.items} />
            ))}
          </main>
          <footer className="text-center py-12 mt-12">
             <p className="font-cinzel text-sm text-yellow-600/70 tracking-widest mb-6">A Royal Culinary Journey</p>
             <a 
                href="https://www.instagram.com/thegreekfarm?igsh=NjZlMXltdmZjZmFn" 
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
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;