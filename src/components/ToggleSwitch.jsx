import { SwitchLabel, SwitchInput, Slider } from '../styles/ToggleSwitch.styles';


const ToggleSwitch = ({ isToggled, setIsToggled}) => {
  return (
    <SwitchLabel>
      <SwitchInput 
        type='checkbox' 
        checked={isToggled} 
        onChange={() => setIsToggled(!isToggled)}
      />
      <Slider />
    </SwitchLabel>
  );
};

export default ToggleSwitch;
