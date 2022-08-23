import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from '../Section';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleInputChange = event => {
    event.preventDefault();
    console.log(event.currentTarget.value);
    this.setState({
      name: event.currentTarget.value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    // this.setState({
    //   contacts: [...event.currentTarget.value],
    // });
    console.log(this.state);
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <form onSubmit={this.handleFormSubmit}>
            <label htmlFor={nanoid()}>Name</label>
            <input
              id={nanoid()}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
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

export default Phonebook;
