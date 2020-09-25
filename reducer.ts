import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from 'interfaces/AppState';
import { Action } from 'interfaces/Action';
import { PaymentActionTypes } from 'store-house/payment/types';
import { screen } from 'helper/contants';

export const initialState: AppState = {
  categories: [],
  products: [],
  error: undefined,
  loading: false,
  step: 1,
  activeCategory: 0,
  screen: screen.CATEGORY,
  activeProduct: 0,
};

const reducer = (
  state = initialState,
  action: Action | { type: typeof HYDRATE; payload: AppState }
): AppState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case PaymentActionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        loading: true,
      };

    case PaymentActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };

    case PaymentActionTypes.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case PaymentActionTypes.INCREASE_PAYMENT_STEP:
      return {
        ...state,
        step: state.step + 1,
      };

    case PaymentActionTypes.DECREASE_PAYMENT_STEP:
      return {
        ...state,
        step: state.step - 1,
      };

    case PaymentActionTypes.SET_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: action.payload,
      };

    case PaymentActionTypes.SET_SCREEN:
      return {
        ...state,
        screen: action.payload,
      };

    case PaymentActionTypes.SET_ACTIVE_PRODUCT:
      return {
        ...state,
        activeProduct: action.payload,
      };

    case PaymentActionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export { reducer as rootReducer };
