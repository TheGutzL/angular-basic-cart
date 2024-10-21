export interface Product {
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
  category: string;
  description: string;
}

export interface ProductItemCart {
  product: Product;
  quantity: number;
}