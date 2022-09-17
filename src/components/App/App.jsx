import { useState, useEffect } from 'react';
import { Box } from '../Box';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { GlobalStyle } from '../GlobalStyle';

import Section from '../Section';

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(
      'contacts',
      JSON.stringify(this.state.contacts)
    );
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const compareContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    compareContact
      ? alert(`${name} is already in contacts`)
      : setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const getVisibleContacts = () => {
    // const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <Box
      textAlign="center"
      bg="bgApp"
      pt={4}
      mx="auto"
      mt="50px"
      width="500px"
      flexWrap="wrap"
      justifyContent="center"
      border="normal"
      borderRadius="md"
      borderColor="border"
      as="main"
    >
      <Box as="h1" textAlign="center" color="heading" fontSize="l">
        Phonebook
      </Box>
      <Section>
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      </Section>

      <GlobalStyle />
    </Box>
  );
}

export default App;
