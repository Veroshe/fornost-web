import { createTheme, alpha, Shadows } from "@mui/material/styles";

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    highlighted: true;
  }
}
declare module "@mui/material/styles/createPalette" {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface PaletteColor extends ColorRange {}

  interface Palette {
    baseShadow: string;
  }
}

const defaultTheme = createTheme();

const customShadows: Shadows = [...defaultTheme.shadows];

export const brand = {
  50: "#f8f9e9",
  100: "#edefc8",
  200: "#e1e5a6",
  300: "#d6db87",
  400: "#cdd371",
  500: "#c6cc5e",
  600: "#b8bb57",
  700: "#a7a550",
  800: "#948f4a",
  900: "#746b41"
};

export const gray = {
  50: "#b6ada6",
  100: "#b6ada6",
  200: "#958c86",
  300: "#6d655f",
  400: "#5a524c",
  500: "#3b342e",
  600: "#1B140E",
  700: "#110D09",
  800: "#0F0C09",
  900: "#0F0C09"
};

export const green = {
  50: "hsl(120, 80%, 98%)",
  100: "hsl(120, 75%, 94%)",
  200: "hsl(120, 75%, 87%)",
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  600: "hsl(120, 70%, 25%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)",
  900: "hsl(120, 87%, 6%)"
};

export const orange = {
  50: "hsl(45, 100%, 97%)",
  100: "hsl(45, 92%, 90%)",
  200: "hsl(45, 94%, 80%)",
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  600: "hsl(45, 91%, 25%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)",
  900: "hsl(45, 93%, 12%)"
};

export const red = {
  50: "hsl(0, 100%, 97%)",
  100: "hsl(0, 92%, 90%)",
  200: "hsl(0, 94%, 80%)",
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  600: "hsl(0, 91%, 25%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)",
  900: "hsl(0, 93%, 6%)"
};

export const getDesignTokens = () => {
  customShadows[1] =
    "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px";

  return {
    palette: {
      primary: {
        light: brand[200],
        main: brand[400],
        dark: brand[700],
        contrastText: brand[50]
      },
      info: {
        light: brand[100],
        main: brand[300],
        dark: brand[600],
        contrastText: gray[50]
      },
      warning: {
        light: orange[300],
        main: orange[400],
        dark: orange[800]
      },
      error: {
        light: red[300],
        main: red[400],
        dark: red[800]
      },
      success: {
        light: green[300],
        main: green[400],
        dark: green[800]
      },
      grey: {
        ...gray
      },
      divider: alpha(gray[300], 0.4),
      background: {
        default: "hsl(0, 0%, 99%)",
        paper: "hsl(220, 35%, 97%)"
      },
      text: {
        primary: "#000",
        secondary: "000",
        warning: orange[400]
      },
      action: {
        hover: alpha(gray[200], 0.2),
        selected: `${alpha(gray[200], 0.3)}`
      }
    },
    typography: {
      fontFamily: "Open Sans, sans-serif",
      h1: {
        fontSize: defaultTheme.typography.pxToRem(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: {
        fontSize: defaultTheme.typography.pxToRem(36),
        fontWeight: 600,
        lineHeight: 1.2
      },
      h3: {
        fontSize: defaultTheme.typography.pxToRem(30),
        lineHeight: 1.2
      },
      h4: {
        fontSize: defaultTheme.typography.pxToRem(24),
        fontWeight: 600,
        lineHeight: 1.5
      },
      h5: {
        fontSize: defaultTheme.typography.pxToRem(20),
        fontWeight: 600
      },
      h6: {
        fontSize: defaultTheme.typography.pxToRem(18),
        fontWeight: 600
      },
      subtitle1: {
        fontSize: defaultTheme.typography.pxToRem(18)
      },
      subtitle2: {
        fontSize: defaultTheme.typography.pxToRem(14),
        fontWeight: 500
      },
      body1: {
        fontSize: defaultTheme.typography.pxToRem(14)
      },
      body2: {
        fontSize: defaultTheme.typography.pxToRem(14),
        fontWeight: 400
      },
      caption: {
        fontSize: defaultTheme.typography.pxToRem(12),
        fontWeight: 400
      }
    },
    shape: {
      borderRadius: 8
    },
    shadows: customShadows
  };
};

export const palette = {
  primary: {
    light: brand[200],
    main: brand[400],
    dark: brand[700],
    contrastText: brand[50]
  },
  info: {
    light: brand[100],
    main: brand[300],
    dark: brand[600],
    contrastText: gray[50]
  },
  warning: {
    light: orange[300],
    main: orange[400],
    dark: orange[800]
  },
  error: {
    light: red[300],
    main: red[400],
    dark: red[800]
  },
  success: {
    light: green[300],
    main: green[400],
    dark: green[800]
  },
  grey: {
    ...gray
  },
  divider: alpha(gray[900], 0.4),
  background: {
    default: "#948F4A",
    paper: "hsl(220, 35%, 97%)"
  },
  text: {
    primary: "#000",
    secondary: "#262118",
    warning: orange[400]
  },
  action: {
    hover: alpha(gray[200], 0.2),
    selected: `${alpha(gray[200], 0.3)}`
  },
  baseShadow: "#4C4230 0px 4px 16px 0px, #4C4230 0px 8px 16px -5px"
};

export const typography = {
  fontFamily: "Open Sans, sans-serif",
  h1: {
    fontSize: defaultTheme.typography.pxToRem(48),
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: -0.5
  },
  h2: {
    fontSize: defaultTheme.typography.pxToRem(36),
    fontWeight: 600,
    lineHeight: 1.2
  },
  h3: {
    fontSize: defaultTheme.typography.pxToRem(30),
    lineHeight: 1.2
  },
  h4: {
    fontSize: defaultTheme.typography.pxToRem(24),
    fontWeight: 600,
    lineHeight: 1.5
  },
  h5: {
    fontSize: defaultTheme.typography.pxToRem(20),
    fontWeight: 600
  },
  h6: {
    fontSize: defaultTheme.typography.pxToRem(18),
    fontWeight: 600
  },
  subtitle1: {
    fontSize: defaultTheme.typography.pxToRem(18)
  },
  subtitle2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 500
  },
  body1: {
    fontSize: defaultTheme.typography.pxToRem(16)
  },
  body2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 400
  },
  caption: {
    fontSize: defaultTheme.typography.pxToRem(12),
    fontWeight: 400
  }
};

export const shape = {
  borderRadius: 8
};

// @ts-ignore
const defaultShadows: Shadows = [
  "none",
  "var(--template-palette-baseShadow)",
  ...defaultTheme.shadows.slice(2)
];
export const shadows = defaultShadows;
