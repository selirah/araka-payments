import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { HeadTag } from '../common/HeadTag';
import { NavLayout } from './NavLayout';
import { PageContainer } from './PageContainer';
import { PaymentType } from './PaymentType';
import { Help } from './Help';
import { AppState } from 'interfaces/AppState';
// import { Provider } from './Provider';
// import { Details1 } from './Details-1';
// import { Details2 } from './Details-2';

type Props = {
  title?: string;
};

const selectFromStore = createSelector(
  (state: AppState) => state.categories,
  (state: AppState) => state.loading,
  (state: AppState) => state.error,
  (categories, loading, error) => ({ categories, loading, error })
);

const Layout: React.FC<Props> = ({ title }) => {
  const { categories, loading, error } = useSelector(selectFromStore);

  return (
    <section className="payment-app">
      <HeadTag title={title} />
      <NavLayout />
      <PageContainer>
        <PaymentType />
      </PageContainer>
      <Help />
    </section>
  );
};

export { Layout };
