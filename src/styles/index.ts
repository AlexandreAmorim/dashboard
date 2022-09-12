import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      horus: "#676432",

      white: "#FFF",

      gray900: "#121214",
      gray800: "#202024",
      gray700: "#29292E",
      gray600: "#323238",
      gray500: "#7C7C8A",
      gray400: "#8D8D99",
      gray300: "#C4C4CC",
      gray100: "#E1E1E6",

      green700: "#015F43",
      green500: "#00875F",
      green300: "#00B37E",

      red700: "#7A1921",
      red500: "#AB222E",
      red300: "#F75A68",
    },
  },
});
