import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto-serif/600.css";
import "@fontsource/roboto-slab/400.css";
const theme = extendTheme({
  styles: {
    global: {
      "html, body, #root, main": {
        height: "100%",
        width: "100%",
        bg: "#f1f2f3",
      },
    },
  },
  colors: {
    primary: "#025940",
    secondary: "#037070",
    tertiary: "#adbfa8",
    background: "#dedede",
    font: "#dedede",
    fontSecondary: "#202020",
  },
  fonts: {
    primary: "Roboto Serif",
    secondary: 'Roboto Slab'
  },
});

export default theme;
