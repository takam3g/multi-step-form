import { PlanCardContainer, TextContainer } from '../../styles/Form/PlanCard.styles';

import { PLAN_TYPES } from '../../constants/planConstants';

import arcadeIcon from '../../assets/icon-arcade.svg';
import advancedIcon from '../../assets/icon-advanced.svg';
import proIcon from '../../assets/icon-pro.svg'


const PlanCard = ({ planType, isYearly, plan, setPlan }) => {
  const getIcon = () => {
    switch (planType.name) {
      case PLAN_TYPES.ARCADE.name:
        return arcadeIcon;
      case PLAN_TYPES.ADVANCED.name:
        return advancedIcon;
      case PLAN_TYPES.PRO.name:
        return proIcon;
      default:
        return arcadeIcon;
    }
  };

  return (
    <PlanCardContainer 
      onClick={() => setPlan({...plan, type: planType.name })}
      className={`${planType.name === plan.type ? 'selected' : ''}`}
    >
      <img src={getIcon()} alt='icon' />
      <TextContainer>
        <p className='label'>{planType.name}</p>
        {
          isYearly 
          ? 
          <>
            <p className='price'>${planType.price * 10}/yr</p>
            <p className='note'>2 months free</p>
          </>
          : <p className='price'>${planType.price}/mo</p>
        }
      </TextContainer>
    </PlanCardContainer>
  );
};

export default PlanCard;