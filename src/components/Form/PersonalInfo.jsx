import { useState, useContext } from 'react';

import { PersonalInfoContainer } from '../../styles/Form/PersonalInfo.styles';

import { UserContext } from '../../contexts/UserContext';

import FormHeader from './FormHeader';
import FormButtons from './FormButtons';
import Input from '../Input';


const FORM_CONTENTS = {
  name: {
    type: 'text',
    labelText: 'Name',
    placeholder: 'e.g. Stephan King',
    isRequired: true,
  },
  email: {
    type: 'email',
    labelText: 'Email Address',
    placeholder: 'e.g. stepahnking@lorem.com',
    isRequired: true, 
  },
  phone: {
    type: 'text',
    labelText: 'Phone Number',
    placeholder: 'e.g. 1234567890',
    isRequired: true,
  }
};

const PersonalInfo = () => {
  const { user } = useContext(UserContext);

  const [personalInfo, setPersonalInfo] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone
  });

  const [error, setError] = useState({
    name: {
      isError: false,
      message: ''
    },
    email: {
      isError: false,
      message: ''
    },
    phone: {
      isError: false,
      message: ''
    }
  });

  return (
    <>
      <FormHeader />
      <PersonalInfoContainer> 
        {
          Object.entries(FORM_CONTENTS).map(([key, value]) => (
            <Input
              key={key}
              id={key}
              labelText={value.labelText}
              type={value.type}
              placeholder={value.placeholder}
              isRequired={value.isRequired}
              value={personalInfo[key]}
              onChangeHandler={(e) => setPersonalInfo({...personalInfo, [key]: e.target.value})}
              error={error[key]}
            />
          ))
        }
      </PersonalInfoContainer>
      <FormButtons 
        userInfoToUpdate={personalInfo}
        setError={setError}
      />
    </>
  );
};

export default PersonalInfo;