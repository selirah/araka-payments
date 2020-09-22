import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

export const GlobalStyle = createGlobalStyle`
body {
  overflow-x: hidden;
  color: #232b2b;
  font-weight: 400;
  background-color: #f4f6f8;
  font-family: 'Roboto', sans-serif;
}
`;

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lalezar&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Helmet>
      <GlobalStyle />
      {children}
    </>
  );
};

export { BasicLayout };
