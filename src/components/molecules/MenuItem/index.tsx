import React from 'react';
import { IconBaseProps } from 'react-icons';
import { NavLink } from 'react-router-dom';
import { useTheme } from 'styled-components';

// import styles
import { Container } from './styles';

interface IMenuItemProps {
  name: string;
  goTo: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export const MenuItem: React.FC<IMenuItemProps> = ({
  name,
  goTo,
  icon: Icon,
}) => {
  const theme = useTheme();

  return (
    <Container>
      <NavLink
        to={goTo}
        style={({ isActive }) => {
          return {
            color: isActive ? theme.colors.secondary : theme.colors.background,
          };
        }}
      >
        {Icon && <Icon size={20} />}
        {name}
      </NavLink>
    </Container>
  );
};
