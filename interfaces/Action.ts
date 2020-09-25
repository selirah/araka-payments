import { Category } from './Category';
import { PaymentActionTypes } from 'store-house/payment/types';
import { Product } from './Product';

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

export interface IncreasePaymentStep {
  type: PaymentActionTypes.INCREASE_PAYMENT_STEP;
}

export interface DecreasePaymentStep {
  type: PaymentActionTypes.DECREASE_PAYMENT_STEP;
}

export interface SetActiveCategory {
  type: PaymentActionTypes.SET_ACTIVE_CATEGORY;
  payload: number;
}

export interface SetScreen {
  type: PaymentActionTypes.SET_SCREEN;
  payload: string;
}

export interface SetActiveProduct {
  type: PaymentActionTypes.SET_ACTIVE_PRODUCT;
  payload: number;
}

export interface FetchProducts {
  type: PaymentActionTypes.FETCH_PRODUCTS;
  payload: Product[];
}

export type Action =
  | FetchCategories
  | FetchCategoriesSuccess
  | FetchCategoriesFailure
  | IncreasePaymentStep
  | DecreasePaymentStep
  | SetActiveCategory
  | SetActiveProduct
  | SetScreen
  | FetchProducts;
