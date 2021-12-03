import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../css/global';
import theme from '../css/theme';
import 'tailwindcss/tailwind.css';
import FontStyles from '../components/fontApplication/fontStyles';

const MyApp = ({Component, pageProps}) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <FontStyles>

          <Component {...pageProps} />

        </FontStyles>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
