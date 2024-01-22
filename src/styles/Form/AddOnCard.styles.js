import styled from "styled-components";

import { theme } from '../Theme.styles';


export const AddOnCardContainer = styled.div`
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

  input {
    margin-right: 1rem;
  }

  label {
    font-weight: 500;
    color: ${theme.colors.primary.marineBlue};
  }

  .note {
    color: ${theme.colors.neutral.coolGray};
    font-size: ${theme.fontSizes.regularMobile};
    padding-top: 0.5rem;
  }

  .price {
    color: ${theme.colors.primary.purplishBlue};
    margin-left: auto;
  }


  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: ${theme.fontSizes.regularDesktop};
  }
`;