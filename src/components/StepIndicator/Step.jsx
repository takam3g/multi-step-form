import { useContext } from 'react';

import { StepContainer, StepNumber, StepTextContainer } from '../../styles/StepIndicator/Step.styles';

import { FormStepContext } from '../../contexts/FormStepContext';


const Step = ({step}) => {
  const { id, name } = step;
  const { currentStep } = useContext(FormStepContext);

  return (
    <StepContainer>
      <StepNumber $isCurrent={id===currentStep.id}>{id}</StepNumber>
      <StepTextContainer>
        <p>STEP {id}</p>
        <p className='title bold'>{name}</p>
      </StepTextContainer>
    </StepContainer>
  );
};

export default Step;