import React from 'react';
import PropTypes from 'prop-types';
import { StyledSpacer } from './style';

const Spacer = ({ grow, width, height }) => (
  <StyledSpacer grow={grow} width={width} height={height} />
);

Spacer.propTypes = {
  grow: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string
};

Spacer.defaultProps = {
  grow: false,
  width: null,
  height: null
};

export default Spacer;
