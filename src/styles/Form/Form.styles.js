import styled from "styled-components";

import { theme } from '../Theme.styles';


export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${theme.colors.neutral.white};;
  position: relative;
  bottom: 5rem;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;

  @media (min-width: ${theme.breakpoints.desktop}) {
    position: static;
    border-radius: 0;
    padding: 2rem 3rem;
    width: 70%;
    margin: 0;
  }
`;