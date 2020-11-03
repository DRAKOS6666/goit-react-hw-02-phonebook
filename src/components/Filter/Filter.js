import React from 'react';
import propTypes from 'prop-types';

function Filter({ onFindItem }) {
  return (
    <label>
      Find contacts by name
      <input type="text" onChange={onFindItem} />
    </label>
  );
}

Filter.propTypes = {
  onFindItem: propTypes.func.isRequired,
};

export default Filter;
