import type { Category } from "./category";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  color: string;
  category: Category;
}
