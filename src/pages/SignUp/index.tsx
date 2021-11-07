import React, { useCallback, useState } from 'react';

import {
  Button,
  Container,
  Content,
  Input,
  PreviewUploadedAvatar,
} from './styles';

import { AuthLayout } from '../../components/templates';

import { AddIcon } from '../../assets/icons';

export const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      // eslint-disable-next-line no-console
      console.log(email, password, username, thumbnail);
    },
    [email, password, thumbnail, username],
  );

  return (
    <AuthLayout>
      <Container>
        <Content>
          <form onSubmit={onSubmit}>
            <h2>Create an account</h2>

            <PreviewUploadedAvatar>
              <AddIcon />
            </PreviewUploadedAvatar>

            <Input
              placeholder="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />

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

            <Button type="submit">Sign up</Button>
          </form>
        </Content>
      </Container>
    </AuthLayout>
  );
};
