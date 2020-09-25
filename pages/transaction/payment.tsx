import React, { useEffect } from 'react';
// import dynamic from 'next/dynamic';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { withTranslation } from '../../i18n';
import { NextPage } from 'next';
import { Layout } from '../../components/payment/Layout';
import { fetchCategories } from 'store-house/payment/actions';
import { AppState } from 'interfaces/AppState';
import { isEmpty } from 'utils/isEmpty';

const selectFromStore = createSelector(
  (state: AppState) => state.categories,
  (state: AppState) => state.loading,
  (categories, loading) => ({ categories, loading })
);

const Payment: NextPage = () => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector(selectFromStore);

  useEffect(() => {
    if (isEmpty(categories) && !loading) {
      dispatch(fetchCategories());
    }
  });

  return (
    <React.Fragment>
      <Layout title="Araka | Making Payments" />
    </React.Fragment>
  );
};

Payment.getInitialProps = async () => ({
  namespacesRequired: ['common', 'layout'],
});

export default withTranslation('common')(Payment);
