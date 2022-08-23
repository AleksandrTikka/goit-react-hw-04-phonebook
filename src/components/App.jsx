import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  handleInputChange = event => {
    event.preventDefault();
    console.log(event.currentTarget.value);
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  createContact(e) {
    const name = this.state.name;
    const number = this.state.number;
    return { name: name, number: number, id: nanoid() };
  }
  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  handleFormSubmit = e => {
    e.preventDefault();
    this.addContact(this.createContact());
    console.log(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleFilterContacts = filter => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ),
    }));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <form onSubmit={this.handleFormSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label>
              Number
              <input
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleInputChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>

            <button type="submit">Add contact</button>
          </form>
        </Section>
        <Section title="Contacts">
          <label>
            Find contacts by name
            <input
              type="tel"
              name="filter"
              value={this.state.filter}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <ul
          // onFilter={() => this.handleFilterContacts()}
          >
            {this.state.contacts.map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
                <button
                  type="button"
                  onClick={() => this.deleteContact(contact.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </Section>
      </>
    );
  }
}
export default App;
