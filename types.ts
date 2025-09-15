export interface Dish {
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  isHighlight?: boolean;
}

export interface MenuCategory {
  title: string;
  description?: string;
  items: Dish[];
}

export interface CartItem extends Dish {
  quantity: number;
}