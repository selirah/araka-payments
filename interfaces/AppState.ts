import { Category } from './Category';
import { Product } from './Product';

export type AppState = {
  readonly categories: Category[];
  readonly products: Product[];
  readonly loading: boolean;
  readonly error: any;
  readonly step: number;
  readonly activeCategory: number;
  readonly screen: string;
  readonly activeProduct: number;
};
