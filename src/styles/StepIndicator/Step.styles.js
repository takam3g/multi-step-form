import styled from "styled-components";

import { theme } from '../Theme.styles';


export const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StepNumber = styled.p`
  width: 1.8rem;
  height: 1.8rem;
  text-align: center;
  line-height: 1.8rem;
  color: ${({$isCurrent}) => $isCurrent ? theme.colors.neutral.marineBlue : theme.colors.neutral.white};
  background-color: ${({$isCurrent}) => $isCurrent ?  theme.colors.primary.lightBlue : 'transparent'};
  border: ${({$isCurrent}) => !$isCurrent ? `1px solid ${theme.colors.neutral.white}` : ''};
  border-radius: 50%;
  margin: 0.5rem;

  @media (min-width: ${theme.breakpoints.desktop}) {
    margin: 1rem;
  }
`;

export const StepTextContainer = styled.div`
  display: none;

  @media (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${theme.colors.neutral.coolGray};

    p.title {
      color: ${theme.colors.neutral.white};
    }
  }
`;