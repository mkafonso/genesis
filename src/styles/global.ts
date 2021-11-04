import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 85.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    text-rendering:optimizeLegibility !important;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  html, body, #root {
    height: 100%;
  }

  body,
  input,
  button {
    font: 400 1rem "Assistant", sans-serif;
  }

  button {
    cursor: pointer;
  }

  button,
  input {
    transition: all 300ms ease-out;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    user-select: none;
  }
`;
