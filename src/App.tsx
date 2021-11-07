import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppRoutes } from './routes';

import { GlobalStyle } from './styles/global';
import dracula from './styles/theme/dracula';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={dracula}>
        <AppRoutes />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
};
