import styled from 'styled-components';

import { theme } from '../styles/Theme.styles';

export const NeutralButton = styled.button`
  width: auto;
  height: 40px;
  line-height: 40px;
  font-size: ${theme.fontSizes.regular};
  color: ${theme.colors.neutral.coolGray};

  &:hover {
    color: ${theme.colors.primary.marineBlue};
  }
`;

export const DefaultButton = styled(NeutralButton)`
  min-with: 100px;
  padding: 0 1rem;
  background-color: ${theme.colors.primary.marineBlue};
  color: ${theme.colors.neutral.white};
  border-radius: 0.5rem;

  &:hover {
    color: ${theme.colors.neutral.white};
    opacity: 0.7;
  }
`;

export const ActionButton = styled(DefaultButton)`
  background-color: ${theme.colors.primary.purplishBlue};

  &:hover {
    opacity: 0.7;
  }
`;
