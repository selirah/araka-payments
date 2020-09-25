export enum PaymentActionTypes {
  FETCH_CATEGORIES = '@@payment/FETCH_CATEGORIES',
  FETCH_PRODUCTS = '@@payment/FETCH_PRODUCTS',
  FETCH_CATEGORIES_SUCCESS = '@@payment/FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILURE = '@@payment/FETCH_CATEGORIES_FAILURE',
  INCREASE_PAYMENT_STEP = '@@payment/INCREASE_PAYMENT_STEP',
  DECREASE_PAYMENT_STEP = '@@payment/DECREASE_PAYMENT_STEP',
  SET_ACTIVE_CATEGORY = '@@payment/SET_ACTIVE_CATEGORY',
  SET_ACTIVE_PRODUCT = '@@payment/SET_ACTIVE_PRODUCT',
  SET_SCREEN = '@@payment/SET_SCREEN',
}
