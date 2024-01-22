import { createGlobalStyle } from 'styled-components';

import { theme } from './Theme.styles';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.primary};
    background-color: ${theme.colors.neutral.magnolia};
    min-width: 260px;
  }

  h1 {
    font-weight: ${theme.fontWeight.bold};
  }

  p {
    font-weight:  ${theme.fontWeight.regular};

    &.bold {
      font-weight: ${theme.fontWeight.medium};
    }
  }

  button {
    font-family: ${theme.fonts.primary};
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }


  @media (min-width: ${theme.breakpoints.desktop}) {
    .app-wrapper {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
  
      .form-card {
        background-color: ${theme.colors.neutral.white};
        height: 600px;
        width: 850px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 1rem;
        border-radius: 1rem;
      }
    }
  }
`;

export default GlobalStyles;