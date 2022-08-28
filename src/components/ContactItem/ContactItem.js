import { Btn } from '../App/App.styled';
import { Item } from './ContactItem.styled';
const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <Item>
      {name}: {number}
      <Btn type="button" onClick={() => deleteContact(id)}>
        Delete
      </Btn>
    </Item>
  );
};

export default ContactItem;
