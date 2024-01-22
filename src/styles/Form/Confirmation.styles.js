import styled from "styled-components";

import { theme } from '../Theme.styles';


export const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 3rem 0.5rem;
  font-size: ${theme.fontSizes.regularMobile};

  img {
    width: 3rem;
  }

  .title {
    font-size: ${theme.fontSizes.largeMobile};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.colors.primary.marineBlue}; 
    margin: 2rem;
  }

  .message {
    color: ${theme.colors.neutral.coolGray};
    text-align: center;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: ${theme.fontSizes.regularDesktop};
    width: 100%;

    img {
      width: 5rem;
    }

    .title {
      font-size: ${theme.fontSizes.largeDesktop};
    }

    .message {
      width: 80%;
    }
  }
`;