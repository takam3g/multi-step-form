import styled from 'styled-components';

import { theme } from '../styles/Theme.styles';


export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 2rem;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Inputlabel = styled.label`
  display: inline-block;
  color: ${theme.colors.primary.marineBlue};
  font-size: ${theme.fontSizes.regularMobile};
  font-weight: ${theme.fontWeight.medium};
  margin-bottom: 0.5rem;

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: ${theme.fontSizes.regularDesktop};
  }
`;

export const ErrorMsg = styled.span`
  display: none;

  &.error {
    display: inline-block;
    font-size: ${theme.fontSizes.smallMobile};
    color: red;

    @media (min-width: ${theme.breakpoints.desktop}) {
      font-size: ${theme.fontSizes.smallDesktop};
    }
  }
`;

export const InputBox = styled.input`
  font-size: ${theme.fontSizes.regularMobile};
  font-weight: ${theme.fontWeight.medium};
  padding: 0.5rem;
  border: 1px solid ${theme.colors.neutral.lightGray};
  border-radius: 0.5rem;
  color: ${theme.colors.primary.marineBlue};

  &::placeholder {
    color: ${theme.colors.neutral.lightGray};
  }

  &:focus {
    outline: 1px solid ${theme.colors.primary.purplishBlue};
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: ${theme.fontSizes.regularDesktop};
    padding: 0.8rem;
  }
`;
