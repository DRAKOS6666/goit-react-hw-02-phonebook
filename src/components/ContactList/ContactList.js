import React from 'react';
import propTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';

import './ContactList.scss';

function ContactList({ list, filter, deleteContact }) {
  return filter === ''
    ? listRender(list, deleteContact)
    : filterOn(list, filter, deleteContact);
}

function listRender(list, deleteContact) {
  return (
    <ul className="contactList">
      {list.map(contact => (
        <li className="contactListItem" key={contact.id}>
          <ContactListItem contact={contact} onClickDelete={deleteContact} />
        </li>
      ))}
    </ul>
  );
}

function filterOn(list, filter, deleteContact) {
  const findedContacts = list.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return findedContacts.length === 0 ? (
    <h4>Nothing found</h4>
  ) : (
    listRender(findedContacts, deleteContact)
  );
}

ContactList.propTypes = {
  list: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string,
    }),
  ).isRequired,
  deleteContact: propTypes.func.isRequired,
};

ContactList.defaultProps = {
  number: '',
};

export default ContactList;
