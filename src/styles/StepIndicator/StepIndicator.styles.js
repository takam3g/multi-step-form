import styled from 'styled-components';

import { theme } from '../Theme.styles';
import bgIndicatorMobile from '../../assets/bg-sidebar-mobile.svg';
import bgIndicatorDesktop from '../../assets/bg-sidebar-desktop.svg';


export const IndicatorContainer = styled.div`
  background: no-repeat url(${bgIndicatorMobile});
  background-size: cover;
  display: flex;
  justify-content: center;
  padding: 5vh 0 12vh 0;

  @media (min-width: ${theme.breakpoints.desktop}) {
    background: no-repeat url(${bgIndicatorDesktop});
    background-size: cover;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 30%;
    min-width: 180px;
    border-radius: 0.5rem;
  }
`;