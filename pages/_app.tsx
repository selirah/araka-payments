import type { AppProps /*, AppContext */ } from 'next/app';
if (typeof window !== 'undefined') {
  require('font-awesome/css/font-awesome.min.css');
  require('flag-icon-css/css/flag-icon.min.css');
  require('bootstrap/dist/css/bootstrap.min.css');
  require('swiper/swiper-bundle.min.css');
  require('../public/css/mobiriseicons.css');
  require('antd/dist/antd.css');
  require('jquery');
  require('@popperjs/core');
  require('../public/js/script');
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
