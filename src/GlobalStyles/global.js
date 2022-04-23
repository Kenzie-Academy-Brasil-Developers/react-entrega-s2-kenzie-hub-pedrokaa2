import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    font-family: 'Inter', sans-serif
  }

  :root {
    --pinkPrimary: #FF577F;
    --pinkFocus: #FF427F;
    --pinkNegative: #59323F;
    --grey4: #121214;
    --grey3: #212529;
    --grey2: #343B41;
    --grey1: #868E96;
    --grey0: #F8F9FA;
  }

  button, input {
    font-family: 'Inter', sans-serif
  }

  h1, h2, h3 {
    font-size: 16px;
  }

  h1, h3 {
    font-weight: 700;
  }

  h2 {
    font-weight: 600;
  }

  p, span {
    font-size: 12px;
  }

  p {
    font-weight: 600;
  }

  span {
    font-weight: 400;
  }

`

export default GlobalStyles