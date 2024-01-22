import styled from "styled-components";

import { theme } from '../Theme.styles';


export const SummaryContainer = styled.div`
  width: 100%;
  margin-bottom: auto;
`;

export const SummaryCard = styled.div`
  background-color: ${theme.colors.neutral.magnolia};
  border-radius: 10px;
  font-size: ${theme.fontSizes.regularMobile};
  padding: 1rem;

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: ${theme.fontSizes.regularDesktop};
  }
`;

export const PlanSummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.primary.marineBlue};
  font-weight: ${theme.fontWeight.bold};

  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    button {
      text-decoration: underline;
    }
  }

  .price {
    font-weight: ${theme.fontWeight.bold};
  }
`;

export const AddOnsSummaryContainer = styled.div`

`;

export const AddOnContainer = styled.div` 
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  p {
    color: ${theme.colors.neutral.coolGray};
  }

  .price {
    color: ${theme.colors.primary.marineBlue};
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${theme.colors.neutral.coolGray};
  padding: 1rem;
  margin-top: 1rem;

  .price {
    color: ${theme.colors.primary.purplishBlue};
    font-weight: ${theme.fontWeight.bold};
  }
`;