import React from 'react';

import { Container, UserAvatar, UserDetails } from './styles';

import { MenuList } from '../../molecules';

export const NavigationMenu: React.FC = () => {
  return (
    <Container>
      <UserDetails>
        <UserAvatar>
          <img
            src="https://avatars.githubusercontent.com/u/73212666?v=4"
            alt="mkafonso's avatar"
            title="Makaya Afonso"
            loading="lazy"
          />
        </UserAvatar>

        <h2>Hey, Makaya Afonso</h2>
      </UserDetails>

      <div className="separator" />

      <MenuList />
    </Container>
  );
};
