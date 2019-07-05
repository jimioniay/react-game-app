import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuidv4';

export default function Featured({ id, featured, handleToggle }) {
  return (
    <a
      style={{ backgroundColor: 'transparent' }}
      className="float-right display-block"
      onClick={() => handleToggle(id)}
    >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: featured ? 'gold' : 'green' }}
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
      </span>
    </a>
  );
}

Featured.propTypes = {
  featured: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

Featured.defaultProps = {
  featured: false,
  id: uuidv4(),
};
