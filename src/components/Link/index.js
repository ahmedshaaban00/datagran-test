import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './styles';

const Link = ({ href, ...rest }) => <StyledLink href={href} {...rest} />;

Link.propTypes = {
  href: PropTypes.string.isRequired
};

export default Link;
