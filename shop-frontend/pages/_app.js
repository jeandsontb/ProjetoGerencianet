import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../css/global';
import theme from '../css/theme';
import 'tailwindcss/tailwind.css';
import FontStyles from '../components/fontApplication/fontStyles';
import { CardProvider } from '../components/context/CardContext';

const MyApp = ({Component, pageProps}) => {
  return (
    <React.Fragment>
      <CardProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <FontStyles>

            <Component {...pageProps} />

          </FontStyles>
        </ThemeProvider>
      </CardProvider>
    </React.Fragment>
  )
}

export default MyApp
