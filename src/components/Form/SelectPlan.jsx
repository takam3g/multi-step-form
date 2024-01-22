import { useState, useContext, useEffect } from 'react';

import { SelectPlanContainer, PlanCardsContainer, ToggleSwitchContainer } from '../../styles/Form/SelectPlan.styles';
import { UserContext } from '../../contexts/UserContext';
import { PLAN_MODES, PLAN_TYPES } from '../../constants/planConstants';

import PlanCard from './PlanCard';
import FormHeader from './FormHeader';
import FormButtons from './FormButtons';
import ToggleSwitch from '../ToggleSwitch';


const SelectPlan = () => {
  const { user } = useContext(UserContext);
  const [plan, setPlan] = useState({
    mode: user.plan.mode,
    type: user.plan.type
  });

  // False: Monthly, True: Yearly
  const [isToggled, setIsToggled] = useState(user.plan.mode === PLAN_MODES.YEARLY); 

  useEffect(() => {
    setPlan(currentPlan => ({
      ...currentPlan,
      mode: isToggled ? PLAN_MODES.YEARLY : PLAN_MODES.MONTHLY
    }));
  }, [isToggled]);

  return (
    <>
      <FormHeader />
      <SelectPlanContainer>
        <PlanCardsContainer>
          {
            Object.entries(PLAN_TYPES).map(([key, value]) => (
              <PlanCard 
                key={key}
                isYearly={isToggled}
                planType={value}
                plan={plan}
                setPlan={setPlan}
              />
            ))
          }
        </PlanCardsContainer>
        <ToggleSwitchContainer> 
          <p>Monthly</p>
          <ToggleSwitch 
            isToggled={isToggled}
            setIsToggled={setIsToggled}
          />
          <p>Yearly</p>
        </ToggleSwitchContainer>
      </SelectPlanContainer>
      <FormButtons 
        userInfoToUpdate={{plan}}
      />
    </>
  );
};

export default SelectPlan;