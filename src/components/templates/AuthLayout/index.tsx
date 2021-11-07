import React from 'react';
import { useTheme } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Container, Header } from './styles';

export const AuthLayout: React.FC = ({ children }) => {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <span>Genesis</span>

        <div>
          <NavLink
            to="/accounts/login"
            style={({ isActive }) => {
              return {
                color: isActive ? theme.colors.secondary : theme.colors.text,
              };
            }}
          >
            Login
          </NavLink>

          <NavLink
            to="/accounts/signup"
            style={({ isActive }) => {
              return {
                color: isActive ? theme.colors.secondary : theme.colors.text,
              };
            }}
          >
            Signup
          </NavLink>
        </div>
      </Header>

      <main>{children}</main>
    </Container>
  );
};
