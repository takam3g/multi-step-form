import { useState, useContext } from 'react';

import { AddOnsContainer } from '../../styles/Form/AddOns.styles';

import { UserContext } from '../../contexts/UserContext';
import { ADD_ONS, PLAN_MODES } from '../../constants/planConstants';

import AddOnCard from './AddOnCard';
import FormHeader from './FormHeader';
import FormButtons from './FormButtons';


const AddOns = () => {
  const { user } = useContext(UserContext);
  const [addOns, setAddOns] = useState({
    onlineService: user.addOns.onlineService,
    largeStorage: user.addOns.largeStorage,
    customizableProfile: user.addOns.customizableProfile
  });

  return (
    <>
      <FormHeader />
      <AddOnsContainer>
      {
        Object.entries(ADD_ONS).map(([key, value]) => (
          <AddOnCard
            key={key}
            isYearly={user.plan.mode === PLAN_MODES.YEARLY}
            addOn={value}
            addOns={addOns}
            setAddOns={setAddOns}
          />
        ))
      }
      </AddOnsContainer>
      <FormButtons 
        userInfoToUpdate={{addOns}}
      />
    </>
  );
};

export default AddOns;