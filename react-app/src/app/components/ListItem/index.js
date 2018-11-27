import React from 'react';
import PropTypes from 'prop-types';

function ListItem({ desc, onClick }) {
  return <button onClick={onClick}>{desc}</button>;
}

ListItem.propTypes = {
  desc: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default ListItem;
