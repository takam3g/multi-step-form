import { AddOnCardContainer } from '../../styles/Form/AddOnCard.styles';


const AddOnCard = ({ addOn, isYearly, addOns, setAddOns }) => {
  return (
    <AddOnCardContainer
      className={`${addOns[addOn.keyName] ? 'selected' : ''}`}
      onClick={() => setAddOns({...addOns, [addOn.keyName]: !addOns[addOn.keyName]})}
    >
      <input
        type="checkbox"
        id={addOn.name.toLowerCase().split(' ').join('-')}
        checked={addOns[addOn.keyName]}
        onChange={() => {}}
      />
      <div>
      <label
        className='label'
        htmlFor={addOn.name.toLowerCase().split(' ').join('-')}
      >
        {addOn.name}
      </label>
      <p className='note'>{addOn.description}</p>
      </div>
      {
        isYearly 
        ? 
        <>
          <p className='price'>+${addOn.price * 10}/yr</p>
        </>
        : <p className='price'>${addOn.price}/mo</p>
      }
    </AddOnCardContainer>
  );
};

export default AddOnCard;