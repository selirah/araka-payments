import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from 'interfaces/AppState';
import { Action } from 'interfaces/Action';
import { PaymentActionTypes } from 'store-house/payment/types';

export const initialState: AppState = {
  categories: [],
  error: undefined,
  loading: false,
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
        errors: action.payload,
      };

    default:
      return state;
  }
};

export { reducer as rootReducer };
