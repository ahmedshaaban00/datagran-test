import styled from 'styled-components';
import { darken, lighten, rgba } from 'polished';

export const StyledButton = styled.button`
  border: 0;
  outline: 0;
  padding: 0;
  background-color: ${({ theme, color }) =>
    theme[color] || color || theme.primary};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  box-shadow: 0 4px 6px -1px ${({ theme }) => rgba(theme.dark, 0.1)},
    0 2px 4px -1px ${({ theme }) => rgba(theme.dark, 0.06)};

  :hover {
    background-color: ${({ theme, color }) =>
      darken(0.01, theme[color] || color || theme.primary)};
    box-shadow: 0 20px 25px -5px ${({ theme }) => rgba(theme.dark, 0.1)},
      0 10px 10px -5px ${({ theme }) => rgba(theme.dark, 0.04)};
  }

  :focus {
    outline: 0;
  }

  ${({ disabled, theme }) =>
    disabled &&
    `
    &,&:hover{
      background-color: ${lighten(0.1, theme.grey)};
      box-shadow: none;
      pointer-events: none;
    }
  `}
`;
