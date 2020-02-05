import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as StyledNavLink } from './styles';

const NavLink = ({ to, ...rest }) => (
  <StyledNavLink to={to} activeClassName="active" {...rest} />
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired
};

export default NavLink;
