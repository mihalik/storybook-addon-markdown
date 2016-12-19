import React from 'react';

// A not well documented button component

const Button = ({ disabled, label, style, onClick }) => (
  <button disabled={disabled} onClick={onClick}>
    {label}
  </button>
);

Button.displayName = 'Button';
Button.propTypes = {
  label: React.PropTypes.string.isRequired,
  style: React.PropTypes.object,
  disabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};

export default Button;
