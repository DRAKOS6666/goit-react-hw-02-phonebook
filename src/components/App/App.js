import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import './App.scss';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  findContact = event => {
    this.setState({ filter: event.target.value });
  };

  isUnique = name => {
    return !this.state.contacts.some(contact => contact.name === name);
  };

  addContact = ({ name, number }) => {
    if (name !== '' && this.isUnique(name)) {
      const id = uuidv4();
      const newContact = { name, number, id };
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    }
    if (!this.isUnique(name)) {
      alert(`${name} is already in contact`);
    }
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
      <div className="wrapper">
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        {contacts.length > 0 ? (
          <Filter onFindItem={this.findContact} />
        ) : (
          <h3>Please add contacts...</h3>
        )}
        {contacts.length > 0 && (
          <ContactList
          contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        )}
      </div>
    );
  }
}
