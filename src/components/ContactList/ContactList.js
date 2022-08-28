import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          // <li key={contact.id}>
          //   {contact.name}: {contact.number}
          //   <button type="button" onClick={() => onDeleteContact(contact.id)}>
          //     Delete
          //   </button>
          // </li>
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            deleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
