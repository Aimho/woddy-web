import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    primary: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    primary?: React.CSSProperties;
  }

  interface TypeBackground {
    box?: string;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    primary: true;
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
      primary: "#202020",
      secondary: "#626262",
    },
    divider: "#E5E5E5",
  },
  typography: {
    primary: {
      fontSize: "1rem",
      lineHeight: 1.75,
      color: "#01A299",
    },
  },
});

export default theme;
