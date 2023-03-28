import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  

  *:focus,
  *:active {
    -webkit-tap-highlight-color: transparent;
  }


  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }


  
  body {
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    max-width: 100vw;
    min-height: 100vh;
    background-color: #F5F6FA;
  }


  /* Heading (L) */

  h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
  }

  
  /* Heading (M) */


  h2 {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }


  /* Heading (S) */


  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }

  
    /* Body (M) */

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }



  
  input,
  button {
    outline: none;
  }


  a {
    text-decoration: none;
  }


  
  button,
  svg {
    cursor: pointer;
  }


  a {
    text-decoration: none;
  }
  

  input,
  fieldset,
  button {
    border: unset;
    outline: unset;
  }



  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`
