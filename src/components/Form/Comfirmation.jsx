import { ConfirmationContainer } from '../../styles/Form/Confirmation.styles';

import thankYouIcon from '../../assets/icon-thank-you.svg';


const Comfirmation = () => {
  return (
    <ConfirmationContainer>
      <img src={thankYouIcon} alt='Thank you' />
      <p className='title'>Thank you!</p>
      <p className='message'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </ConfirmationContainer>
  );
};

export default Comfirmation;