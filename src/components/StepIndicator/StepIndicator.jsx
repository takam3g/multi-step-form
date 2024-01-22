import { IndicatorContainer } from '../../styles/StepIndicator/StepIndicator.styles';

import { FORM_STEPS } from '../../contexts/FormStepContext';

import Step from './Step';


const StepIndicator = () => {
  return (
    <IndicatorContainer>
      {
        FORM_STEPS.map((step) => (
          <Step
            key={step.id}
            step={step}
          />
        ))
      }
    </IndicatorContainer>
  );
};

export default StepIndicator;