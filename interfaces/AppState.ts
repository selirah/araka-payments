import { Category } from './Category';

export type AppState = {
  readonly categories: Category[];
  readonly loading: boolean;
  readonly error: any;
};
