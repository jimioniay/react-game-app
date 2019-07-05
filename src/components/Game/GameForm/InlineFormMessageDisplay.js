import React from 'react';
import PropTypes from 'prop-types';

export default function InlineFormMessageDisplay({ content, type }) {
  return (
    <span className={type === 'error' ? 'text-danger' : 'text-success'}>
      {content}
    </span>
  );
}

InlineFormMessageDisplay.propTypes = {
  content: PropTypes.string,
  type: PropTypes.oneOf(['error', 'info']).isRequired,
};

InlineFormMessageDisplay.defaultProps = {
  content: '',
  
};
