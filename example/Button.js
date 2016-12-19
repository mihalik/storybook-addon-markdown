import React from 'react';

// A not well documented button component

const Button = ({ disabled, label, style, onClick }) => (
  <button disabled={disabled} onClick={onClick}>
    {label}
  </button>
);

Button.displayName = 'Button';
Button.propTypes = {
  /**
   * Label used on the button
   */
  label: React.PropTypes.string.isRequired,
  /**
   * Style of the button as an inline style object
   */
  style: React.PropTypes.object,
  /**
   * Sets disabled flag on the button component
   */
  disabled: React.PropTypes.bool,
  /**
   * Click event handler function (receives an event)
   */
  onClick: React.PropTypes.func,
};

export default Button;
