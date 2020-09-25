import type { AppProps /*, AppContext */ } from 'next/app';
if (typeof window !== 'undefined') {
  require('bootstrap/dist/css/bootstrap.min.css');
  require('font-awesome/css/font-awesome.min.css');
  require('flag-icon-css/css/flag-icon.min.css');
  require('swiper/swiper-bundle.min.css');
  require('./css/mobiriseicons.css');
  require('./css/style.css');
  require('antd/dist/antd.css');
  require('jquery');
  require('bootstrap/dist/js/bootstrap.bundle.min');
  require('@popperjs/core');
  require('gsap');
  require('swiper/swiper-bundle.esm');
  require('./js/script');
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
