import React, { Component } from 'react';
import { Box } from '../Box';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
// import { GlobalStyle } from '../GlobalStyle';

import Section from '../Section';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    const compareContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    compareContact
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    return (
      <Box
        // textAlign="center"
        bg="bgApp"
        pt={4}
        mx="auto"
        mt="50px"
        width="500px"
        // display="flex"
        flexWrap="wrap"
        justifyContent="center"
        border="normal"
        borderRadius="md"
        borderColor="border"
        as="main"
      >
        <Box as="h1" textAlign="center" color="accent" fontSize="l">
          Phonebook
        </Box>
        {/* <Section> */}
        <ContactForm onSubmit={this.addContact} />
        {/* </Section> */}
        <Section title="Contacts">
          {/* <h2>Contacts</h2> */}
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactList
            contacts={this.getVisibleContacts()}
            onDeleteContact={this.deleteContact}
          />
        </Section>

        {/* <GlobalStyle /> */}
      </Box>
    );
  }
}
export default App;