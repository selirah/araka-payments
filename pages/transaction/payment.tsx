import React, { useEffect } from 'react';
import { withTranslation } from '../../i18n';
import { useDispatch } from 'react-redux';
import { NextPage } from 'next';
import { Layout } from '../../components/payment/Layout';
import { fetchCategories } from 'store-house/payment/actions';

const Payment: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return <Layout title="Araka | Making Payments" />;
};

Payment.getInitialProps = async () => ({
  namespacesRequired: ['payment'],
});

export default withTranslation('payment')(Payment);
