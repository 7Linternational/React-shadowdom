declare module "@mui/material/styles" {
  interface MuiCircularProgress {
    defaultProps: {
      container: HTMLElement | null;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    defaultProps?: {
      container?: HTMLElement | null;
    };
  }
}

declare module 'react-dom/client';
