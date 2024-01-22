import { InputWrapper, LabelContainer, Inputlabel, ErrorMsg, InputBox } from '../styles/Input.styles';


const Input = ({id, labelText, type, placeholder, isRequired, value, onChangeHandler, error }) => {
  return (
    <InputWrapper>
      <LabelContainer>
        <Inputlabel htmlFor={id}>{labelText}</Inputlabel>
        <ErrorMsg 
          className={error.isError ? 'error' : ''}
        >
          {error.message}
        </ErrorMsg>
      </LabelContainer>
      <InputBox
        id={id}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        value={value}
        onChange={onChangeHandler}
      />
    </InputWrapper>
  );
};

export default Input;