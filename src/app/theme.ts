import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: string;
      };
      secondary: {
        main: string;
      };
      background: {
        main: string;
        white: string;
      };
      text: {
        main: string;
        white: string;
        black: string;
        gray: string;
      };
      success: {
        main: string;
      };
      warning: {
        main: string;
      };
      error: {
        main: string;
      };
    };
  }
}

export const theme = {
  colors: {
    primary: {
      main: '#007AFF',
    },
    secondary: {
      main: '#5856D6',
    },
    background: {
      main: '#F2F2F7',
      white: '#FFFFFF',
    },
    text: {
      main: '#1C1C1E',
      white: '#FFFFFF',
      black: '#000000',
      gray: '#8E8E93',
    },
    success: {
      main: '#34C759',
    },
    warning: {
      main: '#FF9500',
    },
    error: {
      main: '#FF3B30',
    },
  },
};
