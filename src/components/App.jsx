import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleInputChange = event => {
    event.preventDefault();
    console.log(event.currentTarget.value);
    this.setState({
      name: event.target.value,
    });
  };
  createContact(name) {
    return { name: name, id: nanoid() };
  }
  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    });
  };
  handleFormSubmit = (e, name) => {
    e.preventDefault();
    this.addContact(this.createContact(name));
    console.log(this.state);
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

            <button type="submit">Add contact</button>
          </form>
        </Section>
        <Section title="Contacts">
          <ul>{/* contacts.map((contact) => <li> contact </li>) */}</ul>
        </Section>
      </>
    );
  }
}
export default App;
