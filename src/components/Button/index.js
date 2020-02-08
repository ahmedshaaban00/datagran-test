import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './style';

const Button = ({ children, color, type, disabled, onClick, ...rest }) => (
  <StyledButton
    type={type}
    color={color}
    disabled={disabled}
    onClick={onClick}
    {...rest}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  color: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  color: 'primary',
  type: 'button',
  disabled: false,
  onClick: () => {}
};

export default Button;
