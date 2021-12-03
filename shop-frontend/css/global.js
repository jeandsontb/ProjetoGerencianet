import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  };
  body {
    background-color: #F7F2B2;
    overflow-x: hidden;
  }
`

export default GlobalStyle;