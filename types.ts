
export interface Dish {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

export interface MenuCategory {
  title: string;
  items: Dish[];
}
