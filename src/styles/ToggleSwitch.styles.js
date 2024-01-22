import styled from 'styled-components';

import { theme } from '../styles/Theme.styles';

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 1.5rem;
  margin: 0 1rem;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.primary.marineBlue};
  transition: 0.4s;
  border-radius: 1rem;

  &:before {
    content: "";
    position: absolute;
    height: 1rem;
    width: 1rem;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  ${SwitchInput}:checked + &:before {
    transform: translateX(1.5rem);
  }
`;


