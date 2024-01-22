import { createContext, useState } from 'react';


export const FORM_STEPS = [
  {
    id: 1,
    name: 'YOUR INFO',
    title: 'Personal info',
    description: 'Please provide your name, email address, and phone number.',
  },
  {
    id: 2,
    name: 'SELECT PLAN',
    title: 'Select your plan',
    description: 'You have the option of monthly or yearly billing.',
  },
  {
    id: 3,
    name: 'ADD-ONS',
    title: 'Pick add-ons',
    description: 'Add-ons help enhance your gaming experience.',
  },
  {
    id: 4,
    name: 'SUMMARY',
    title: 'Finishing up',
    description: 'Double-check everything looks OK before confirming. ',
  },
];

export const FormStepContext = createContext({
  currentStep: 1,
  handleGoBack: () => {},
  handleNext: () => {},
  handleConfirm: () => {},
});

export const FormStepProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(FORM_STEPS[0]);

  const value = { currentStep, setCurrentStep };

  return <FormStepContext.Provider value={value}>{children}</FormStepContext.Provider>;
};