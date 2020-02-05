import React from 'react';
import PropTypes from 'prop-types';
import { Content, Title, SubTitle } from './styles';

const Text = ({ type, children, ...rest }) => {
  switch (type) {
    case 'title':
      return <Title {...rest}>{children}</Title>;
    case 'subtitle':
      return <SubTitle {...rest}>{children}</SubTitle>;
    default:
      return <Content {...rest}>{children}</Content>;
  }
};

Text.propTypes = {
  type: PropTypes.oneOf(['content', 'title', 'subtitle']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired
};

Text.defaultProps = {
  type: 'content'
};

export default Text;
