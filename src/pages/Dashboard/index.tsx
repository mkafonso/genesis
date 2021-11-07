import React from 'react';

import { AppLayout } from '../../components/templates';

import { Container } from './styles';

export const Dashboard: React.FC = () => {
  return (
    <AppLayout>
      <Container>
        <h1>Dashboard</h1>
      </Container>
    </AppLayout>
  );
};
