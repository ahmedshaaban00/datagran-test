import styled from 'styled-components';
import { darken } from 'polished';

export const StyledLink = styled.a`
  color: ${({ theme, color }) => theme[color] || color || theme.link};
  text-decoration: none;
  :hover {
    color: ${({ theme, color }) =>
      darken(0.2, theme[color] || color || theme.link)};
    text-decoration: none;
  }
`;
