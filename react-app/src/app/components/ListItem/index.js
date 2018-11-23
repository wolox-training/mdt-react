import React from 'react';
import PropTypes from 'prop-types';

export default function ListItem({ desc, onClick }) {
  return <button onClick={onClick}>{desc}</button>;
}

ListItem.propTypes = {
  desc: PropTypes.string,
  onClick: PropTypes.func.isRequired
};
