import React from 'react';
import PropTypes from 'prop-types';

function ListItem({ desc, onClick }) {
  return (
    <li>
      <button onClick={onClick}>{desc}</button>
    </li>
  );
}

ListItem.propTypes = {
  desc: PropTypes.string,
  onClick: PropTypes.func
};

export default ListItem;
