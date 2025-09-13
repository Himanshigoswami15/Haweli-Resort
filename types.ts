
export interface Dish {
  name: string;
  description: string;
  price: string;
  imageUrl?: string;
  isHighlight?: boolean;
}

export interface MenuCategory {
  title: string;
  items: Dish[];
}