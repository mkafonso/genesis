import React from 'react';

// import styles
import { Container } from './styles';

// import components
import { MenuItem } from '..';

// import constants
import { HomeIcon, ExitIcon, AddIcon } from '../../../assets/icons';

export const MenuList: React.FC = () => {
  return (
    <Container>
      <div>
        <MenuItem name="General" goTo="/" icon={HomeIcon} />
        <MenuItem name="New Project" goTo="/add-project" icon={AddIcon} />
      </div>

      <MenuItem name="Log out" goTo="/accounts/login" icon={ExitIcon} />
    </Container>
  );
};
