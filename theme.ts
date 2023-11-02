import { extendTheme } from "@chakra-ui/react";
import "@fontsource/montserrat";
import "@fontsource/merriweather-sans/"; 
const theme = extendTheme({
  styles: {
    global: {
      "html, body, #root, main, #__next": {
        height: "100%",
        width: "100%",
        bg: "#f1f2f3",
      },
    },
  },
  colors: {
    primary: "#CD8D8E",
    secondary: "#944141",
    tertiary: "#B3AC8F",
    background: "#B3AC8F",
    font: "#dedede",
    fontSecondary: "#202020",
  },
  fonts: {
    primary: "Montserrat",
    secondary: 'Merriweather Sans'
  },
});

export default theme;
