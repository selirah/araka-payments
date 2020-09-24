import { Category } from './Category';
import { PaymentActionTypes } from 'store-house/payment/types';

export type Action =
  | FetchCategories
  | FetchCategoriesSuccess
  | FetchCategoriesFailure;

export interface FetchCategories {
  type: PaymentActionTypes.FETCH_CATEGORIES;
}

export interface FetchCategoriesSuccess {
  type: PaymentActionTypes.FETCH_CATEGORIES_SUCCESS;
  payload: Category[];
}

export interface FetchCategoriesFailure {
  type: PaymentActionTypes.FETCH_CATEGORIES_FAILURE;
  payload: string;
}
