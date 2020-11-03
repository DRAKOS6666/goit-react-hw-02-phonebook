import React, { Component } from 'react';
import propTypes from 'prop-types';
import './ContactForm.scss';

export default class ContactForm extends Component {
  static defaultProps = {
    name: '',
    number: '',
  };

  static propTypes = {
    name: propTypes.string,
    number: propTypes.string,
  };

  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };
  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
    event.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            className="formInput"
            type="text"
            onChange={this.handleNameChange}
          />
        </label>
        <label>
          Number:
          <input
            className="formInput"
            type="text"
            onChange={this.handleNumberChange}
          />
        </label>
        <input className="submitBtn" type="submit" value="Add contact" />
      </form>
    );
  }
}
