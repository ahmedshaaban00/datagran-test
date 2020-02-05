import React from 'react';
import { Container, AppLogo, NavContainer, NavItem } from './styles';
import NavLink from '../../components/NavLink';
import logo from '../../images/logo.svg';

const AppHeader = () => (
  <Container>
    <AppLogo src={logo} alt="datagran logo" />
    <NavContainer>
      <NavItem>
        <NavLink to="/line-graph">Line Graph</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/posts">Posts</NavLink>
      </NavItem>
    </NavContainer>
  </Container>
);

export default AppHeader;
