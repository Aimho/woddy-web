import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    primary: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypeText {
    main?: string;
  }

  interface TypeBackground {
    box?: string;
  }
}

// A custom theme for this app
const theme = createTheme({
  palette: {
    background: {
      box: "#f5f5f5",
    },
    primary: {
      main: "#01A299",
    },
    text: {
      main: "#01A299",
      primary: "#202020",
      secondary: "#626262",
    },
    divider: "#E5E5E5",
  },
});

export default theme;
