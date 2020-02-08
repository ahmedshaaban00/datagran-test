import React from 'react';
import PropTypes from 'prop-types';
import { TextArea as StyledTextArea } from './styles';

const TextArea = ({ placeholder, onChange, ...rest }) => (
  <StyledTextArea
    placeholder={placeholder}
    onChange={onChange}
    resize={false}
    {...rest}
  />
);

TextArea.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

TextArea.defaultProps = {
  placeholder: 'Insert text here',
  onChange: () => {}
};

export default TextArea;
