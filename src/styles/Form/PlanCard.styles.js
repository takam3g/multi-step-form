import styled from "styled-components";

import { theme } from '../Theme.styles';


export const PlanCardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid ${theme.colors.neutral.lightGray};
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  font-size: ${theme.fontSizes.regularMobile};

  &.selected {
    border: 1px solid ${theme.colors.primary.purplishBlue};
    background-color: ${theme.colors.neutral.magnolia};
  }

  &:hover {
    cursor: pointer;
    border: 1px solid ${theme.colors.primary.purplishBlue};
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 30%;
    min-width: 140px;
    height: 180px;
    font-size: ${theme.fontSizes.regularDesktop};
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;

  .label {
    font-weight: 500;
    color: ${theme.colors.primary.marineBlue};
  }

  .price {
    color: ${theme.colors.neutral.coolGray};
    padding: 0.5rem 0;
  }

  .note {
    color: ${theme.colors.primary.marineBlue};
    font-size: ${theme.fontSizes.regularMobile};
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    margin-left: 0;

    .note {
      font-size: ${theme.fontSizes.smallDesktop};
    }
  }
`;