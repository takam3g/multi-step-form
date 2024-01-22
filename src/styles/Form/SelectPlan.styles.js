import styled from "styled-components";

import { theme } from '../Theme.styles';


export const SelectPlanContainer = styled.div`
  width: 100%;
  margin-bottom: auto;
`;

export const PlanCardsContainer = styled.div`
  margin-bottom: 2rem;

  @media (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ToggleSwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
