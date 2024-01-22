import { useContext } from 'react';

import { FormButtonsContainer } from '../../styles/Form/FormButtons.styles';

import { FormStepContext, FORM_STEPS } from '../../contexts/FormStepContext';
import { UserContext } from '../../contexts/UserContext';

import Button, { BUTTON_TYPE_CLASSES } from '../Button';


const FormButtons = ({ userInfoToUpdate, setError }) => {
  const { currentStep, setCurrentStep } = useContext(FormStepContext);
  const { user, setUser } = useContext(UserContext);

  const validatePersonalInfo = () => {
    const { name, email, phone } = userInfoToUpdate;

    // Validate format of email and phone
    const isEmailValid = (email) => {
      const requiredFormat = /\S+@\S+\.\S+/;
      return requiredFormat.test(email);
    };
  
    const isPhoneValid = (phone) => {
      const requiredFormat = /^\d{10}$/;
      return requiredFormat.test(phone);
    };

    // Set error if any of the required fields are empty or invalid
    if (!name || !email || !phone || !isEmailValid(email) || !isPhoneValid(phone)) {
      setError({
        name: {
          isError: !name ? true : false,
          message: !name ? 'Name field is required' : ''
        },
        email: {
          isError: !email || !isEmailValid(email) ? true : false,
          message: !email ? 'Email field is required' : !isEmailValid(email) ? 'Email is not in valid format' : ''
        },
        phone: {
          isError: !phone || !isPhoneValid(phone) ? true : false,
          message: !phone ? 'Phone field is required' : !isPhoneValid(phone) ? 'Phone number should be 10 digits' : ''
        }
      });
      return false;
    };

    return true;
  };

  const handleGoBack = () => {
    const selectedStep = FORM_STEPS.find((step) => step.id === currentStep.id - 1);
    setCurrentStep(selectedStep);
  };

  const handleNext = () => {
    // Check if all required fields are filled and valid in PersonalInfo
    if (currentStep.id === 1) {
      if (!validatePersonalInfo()) {
        return;
      }
    };

    // Update user with the new input
    setUser({ ...user, ...userInfoToUpdate });

    const selectedStep = FORM_STEPS.find((step) => step.id === currentStep.id + 1);
    setCurrentStep(selectedStep);
  };

  const handleConfirm = () => {
    setCurrentStep({id: 5});

    // TODO: Send user data to backend
    console.log("Form submitted", user);
  };

  return (
    <FormButtonsContainer>
      {(currentStep.id > 1 && currentStep.id <= FORM_STEPS.length) ? 
        <Button
          buttonType={BUTTON_TYPE_CLASSES.neutral}
          onClick={handleGoBack}
        >
          Go Back
        </Button>
        : <div></div>
      }
      {currentStep.id < FORM_STEPS.length
        ? 
        <Button
          buttonType={BUTTON_TYPE_CLASSES.default}
          onClick={handleNext}
        >
          Next Step
        </Button>
        :
        <Button
        buttonType={BUTTON_TYPE_CLASSES.action}
        onClick={handleConfirm}
        >
          Confirm
        </Button>
      }
    </FormButtonsContainer>
  );
};

export default FormButtons;