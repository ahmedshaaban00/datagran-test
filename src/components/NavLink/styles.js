import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const NavLink = styled(RouterNavLink).attrs({
  activeClassName: 'active'
})`
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.dark};
  text-decoration: none !important;

  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    font-weight: 500;
  }
`;
