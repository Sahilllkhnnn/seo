export type PageId =
  | 'home'
  | 'shop'
  | 'product'
  | 'cart'
  | 'checkout'
  | 'about'
  | 'contact'
  | 'auth';

export type ProductColor = 'Ivory' | 'Beige' | 'Black' | 'Gold' | 'Rose';

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  fabric: string;
  price: number;
  colors: ProductColor[];
  sizes: string[];
  images: string[];
  rating: number;
  isFeatured?: boolean;
  isNew?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: ProductColor;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
}
