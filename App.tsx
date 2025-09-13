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
             <p className="font-cinzel text-sm text-yellow-600/70 tracking-widest">A Royal Culinary Journey</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;