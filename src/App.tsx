import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';
import dracula from './styles/theme/dracula';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={dracula}>
      <h1>Hello, world</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
};
