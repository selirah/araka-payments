import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Nav } from './Nav';
import { Banner } from './Banner';
import { Slider } from './Slider';
import { Footer } from './Footer';
import { Background } from './Background';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({ title, children }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    <Background />
    <Nav />
    <Banner />
    <Slider />
    {children}
    <Footer />
  </React.Fragment>
);

export default Layout;
