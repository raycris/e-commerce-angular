import { Category } from './category.model';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string | string[];
  createAt: string;
  category: Category;
}

export interface Images {
  
}
