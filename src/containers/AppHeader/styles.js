import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.white};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 ${({ theme }) => rgba(theme.dark, 0.1)},
    0 1px 2px 0 ${({ theme }) => rgba(theme.dark, 0.06)};
  z-index: 1;
`;

export const AppLogo = styled.img`
  max-width: 15.625rem;
  pointer-events: none;
`;

export const NavContainer = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  display: inline-flex;
  margin: 0.5rem;
  transition: all 0.2s ease-in-out;
  box-shadow: none;

  :hover {
    box-shadow: inset 0px -2px 0px 0px ${({ theme }) => theme.primary};
  }
`;
