import { useContext } from 'react';

import { FormHeaderContainer } from '../../styles/Form/FormHeader.styles';

import { FormStepContext } from '../../contexts/FormStepContext';

const FormHeader = () => {
  const { currentStep } = useContext(FormStepContext);

  return (
    <FormHeaderContainer>
      <h1>{currentStep.title}</h1>
      <p>{currentStep.description}</p>
    </FormHeaderContainer>
  );
};

export default FormHeader;