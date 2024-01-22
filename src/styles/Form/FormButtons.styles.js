import styled from "styled-components";

import { theme } from '../Theme.styles';

export const FormButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-self: flex-end;

  // To place buttons at the bottom of the screen for mobile
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;

  @media (min-width: ${theme.breakpoints.desktop}) {
    // To clear the fixed positioning for desktop
    position: static;
    padding: 0;
  }
`;