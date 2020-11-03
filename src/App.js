import React, { Component } from 'react';
import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

import './App.scss';

export default class App extends Component {
  static defaultProps = {
    filter: '',
    contacts: [],
  };

  static propTypes = {
    contacts: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        number: propTypes.string,
      }),
    ),
  };

  state = {
    contacts: [],
    filter: '',
  };

  findContact = event => {
    this.setState({ filter: event.target.value });
  };

  isUnique = name => {
    const findResult = this.state.contacts.find(
      contact => contact.name === name,
    );
    return findResult === undefined ? true : name !== findResult.name;
  };

  addContact = ({ name, number }) => {
    if (name !== '' && this.isUnique(name)) {
      const contactsArr = this.state.contacts;
      const id = uuidv4();
      const newContact = [{ name, number, id }];
      this.setState({ contacts: [...contactsArr, ...newContact] });
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
    return (
      <div className="wrapper">
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter onFindItem={this.findContact} />
        <ContactList
          list={this.state.contacts}
          filter={this.state.filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
