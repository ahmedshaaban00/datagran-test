import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.dark};
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
  }
`;

export const NavLink = styled(RouterNavLink).attrs({
  activeClassName: 'active'
})`
  color: ${({ theme }) => theme.dark};
  text-decoration: none !important;

  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    font-weight: 500;
  }
`;
