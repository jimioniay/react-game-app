import React from 'react';
import PropTypes from 'prop-types';

function Price({ price }) {
  return <span style={{ backgroundColor: 'transparent' }}>${price / 100}</span>;
}

Price.defaultProps = {
  price: 0,
};

Price.propTypes = {
  price: PropTypes.number.isRequired,
};
export default Price;
