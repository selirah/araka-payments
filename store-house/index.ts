import { all, fork } from 'redux-saga/effects';
import paymentSaga from './payment/sagas';

export function* rootSaga(): Generator {
  yield all([fork(paymentSaga)]);
}
