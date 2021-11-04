import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;

    colors: {
      text: string;
      background: string;

      primary: string;
      secondary: string;
      details: string;

      danger: string;
      success: string;
      warning: string;
    };
  }
}
