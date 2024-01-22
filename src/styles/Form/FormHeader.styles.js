import styled from "styled-components";

import { theme } from '../Theme.styles';

export const FormHeaderContainer = styled.div`
  margin-bottom: 2rem;

  h1 {
    color: ${theme.colors.primary.marineBlue};
    font-size: ${theme.fontSizes.largeMobile};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${theme.colors.neutral.coolGray};
    font-size: ${theme.fontSizes.regularMobile};
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    h1 {
      font-size: ${theme.fontSizes.largeDesktop};
    }

    p {
      font-size: ${theme.fontSizes.regularDesktop};
    }
  }
`;