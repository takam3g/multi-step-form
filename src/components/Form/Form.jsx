import { useContext, useState, useEffect } from 'react';

import { FormContainer } from '../../styles/Form/Form.styles';

import { FormStepContext } from '../../contexts/FormStepContext';

import PersonalInfo from './PersonalInfo';
import SelectPlan from './SelectPlan';
import AddOns from './AddOns';
import Summary from './Summary';
import Comfirmation from './Comfirmation'


const Form = () => {
  const { currentStep } = useContext(FormStepContext);
  const [currentForm, setCurrentForm] = useState();

  useEffect(() => {
    switch (currentStep.id) {
      case 1:
        setCurrentForm(<PersonalInfo />);
        break;
      case 2:
        setCurrentForm(<SelectPlan />);
        break;
      case 3:
        setCurrentForm(<AddOns />);
        break;
      case 4:
        setCurrentForm(<Summary />);
        break;
      case 5:
        setCurrentForm(<Comfirmation />);
        break;
      default:
        new Error('Invalid step');
    }
  }, [currentStep]);

  return (
    <FormContainer>
      {currentForm}
    </FormContainer>
  );
};

export default Form;