import styled from 'styled-components';
import { rgba } from 'polished';

export const TextArea = styled.textarea`
  resize: none;
  outline: none;
  border: none;
  box-shadow: 0 20px 25px -5px ${({ theme }) => rgba(theme.dark, 0.1)},
    0 10px 10px -5px ${({ theme }) => rgba(theme.dark, 0.04)};
  padding: 1rem;
  border-radius: 0.5rem;
  min-height: 7rem;
`;
