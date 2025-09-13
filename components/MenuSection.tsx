import React from 'react';
import { MenuItem } from './MenuItem';
import type { Dish } from '../types';

interface MenuSectionProps {
  title: string;
  items: Dish[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  return (
    <section className="mt-16">
      <h2 className="font-cinzel text-3xl md:text-4xl text-center font-bold text-yellow-400 mb-10 gold-text-shadow ornament-border">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {items.map((item) => (
          <MenuItem key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
};