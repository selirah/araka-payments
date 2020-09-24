import { Category } from 'interfaces/Category';
import * as action from './action.interface';
import { PaymentActionTypes } from './types';

export function fetchCategories(): action.FetchCategories {
  return {
    type: PaymentActionTypes.FETCH_CATEGORIES,
  };
}

export function fetchCategoriesSuccess(
  data: Category[]
): action.FetchCategoriesSuccess {
  return {
    type: PaymentActionTypes.FETCH_CATEGORIES_SUCCESS,
    payload: data,
  };
}

export function fetchCategoriesFailure(
  error: string
): action.FetchCategoriesFailure {
  return {
    type: PaymentActionTypes.FETCH_CATEGORIES_FAILURE,
    payload: error,
  };
}
