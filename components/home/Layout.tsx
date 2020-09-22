import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Header, Navbar } from './Styles';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({ children, title }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    <Header>ksdnsknd</Header>
    {/* {children} */}
  </React.Fragment>
);

export default Layout;
