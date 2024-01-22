import { NeutralButton, DefaultButton, ActionButton } from '../styles/Button.styles';


export const BUTTON_TYPE_CLASSES = {
  neutral: 'neutral',
  default: 'default',
  action: 'action',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => 
  ({
    [BUTTON_TYPE_CLASSES.neutral]: NeutralButton,
    [BUTTON_TYPE_CLASSES.default]: DefaultButton,
    [BUTTON_TYPE_CLASSES.action]: ActionButton,
  }[buttonType]);


const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...otherProps}>
      {children}
    </CustomButton>
  );
};

export default Button;