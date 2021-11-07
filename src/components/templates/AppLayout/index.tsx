import React from 'react';

import { Container } from './styles';

import { NavigationMenu } from '../../organisms';

export const AppLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <NavigationMenu />

      <main>{children}</main>
    </Container>
  );
};
