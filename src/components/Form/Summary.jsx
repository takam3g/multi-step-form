import { useContext } from 'react';

import { 
  SummaryContainer, 
  SummaryCard, 
  PlanSummaryContainer, 
  AddOnsSummaryContainer, 
  AddOnContainer, 
  TotalPrice 
} from '../../styles/Form/Summary.styles';

import { UserContext } from '../../contexts/UserContext';
import { FormStepContext, FORM_STEPS } from '../../contexts/FormStepContext';
import { PLAN_MODES, PLAN_TYPES, ADD_ONS } from '../../constants/planConstants';

import FormHeader from './FormHeader';
import FormButtons from './FormButtons';
import Button, { BUTTON_TYPE_CLASSES } from '../Button';


const Summary = () => {
  const { user } = useContext(UserContext);
  const { setCurrentStep } = useContext(FormStepContext);
  const isYearly = user.plan.mode === PLAN_MODES.YEARLY;

  const getPlanPrice = () => {
    const planPrice = Object.values(PLAN_TYPES).find(plan => plan.name === user.plan.type).price;
    return isYearly ? planPrice * 10 : planPrice;
  };

  const getSelectedAddOns = () => {
    // Get all the keys of the addOns object that have a value of true
    const selectedAddOnKeys = Object.keys(user.addOns).filter(key => user.addOns[key] === true);

    // Get ADD_ONS objects that have a keyName that matches the selectedAddOnKeys
    const selectedAddOns = selectedAddOnKeys.map(key => {
      return Object.values(ADD_ONS).find(addon => addon.keyName === key);
    });

    return selectedAddOns;
  };

  const getTotalPrice = () => {
    const planPrice = getPlanPrice();
    let addOnsPrice = getSelectedAddOns().reduce((total, addOn) => total + addOn.price, 0);
    isYearly && (addOnsPrice *= 10);
    const totalPrice = planPrice + addOnsPrice;
    return totalPrice;
  };

  return (
    <>
      <FormHeader />
      <SummaryContainer>
        <SummaryCard>
          <PlanSummaryContainer>
            <div className='title'>
              <span>{user.plan.type} ({user.plan.mode})</span>
              <Button 
                buttonType={BUTTON_TYPE_CLASSES.neutral}
                onClick={() => setCurrentStep(FORM_STEPS[1])}
              >
                Change
              </Button>
            </div>
            <p className='price'>${getPlanPrice()}/{isYearly ? 'yr' : 'mo'}</p>
          </PlanSummaryContainer>
          <hr color='lightgray'/>
          <AddOnsSummaryContainer>
            { getSelectedAddOns().length > 0 
              ?  
              getSelectedAddOns().map(addOn => (
                <AddOnContainer key={addOn.keyName}>
                  <p>{addOn.name}</p>
                  <p className='price'>+${isYearly ? addOn.price * 10 : addOn.price}/{isYearly ? 'yr' : 'mo'}</p>
                </AddOnContainer>
              )) 
              : 
              <AddOnContainer>
                <p>Add-Ons not selected</p>
              </AddOnContainer>
            }
          </AddOnsSummaryContainer>
        </SummaryCard>
        <TotalPrice>
          <p>Total (per {isYearly ? 'year' : 'month'})</p>
          <p className='price'>${getTotalPrice()}/{isYearly ? 'yr' : 'mo'}</p>
        </TotalPrice>
      </SummaryContainer>
      <FormButtons/>
    </>
  );
};

export default Summary;