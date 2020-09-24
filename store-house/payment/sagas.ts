import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { PaymentActionTypes } from './types';
import { fetchCategoriesSuccess, fetchCategoriesFailure } from './actions';
import { callApiGet } from 'utils/api';

function* fetchCategories() {
  try {
    const res = yield call(callApiGet, 'payments/productcategories');
    yield put(fetchCategoriesSuccess(res.data));
  } catch (err) {
    if (err && err.response) {
      yield put(fetchCategoriesFailure(err.response.data));
    } else {
      yield put(fetchCategoriesFailure('An unknwon error occurred'));
    }
  }
}

function* watchFetchCategories() {
  yield takeEvery(PaymentActionTypes.FETCH_CATEGORIES, fetchCategories);
}

function* paymentSaga() {
  yield all([fork(watchFetchCategories)]);
}

export default paymentSaga;
