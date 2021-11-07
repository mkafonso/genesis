import React, { useCallback, useState } from 'react';

import { Button, Container, Content, Input } from './styles';

import { AuthLayout } from '../../components/templates';

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      // eslint-disable-next-line no-console
      console.log(email, password);
    },
    [email, password],
  );

  return (
    <AuthLayout>
      <Container>
        <Content>
          <form onSubmit={onSubmit}>
            <h2>Access account</h2>

            <Input
              placeholder="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <Button type="submit">Sign in</Button>
          </form>
        </Content>
      </Container>
    </AuthLayout>
  );
};
