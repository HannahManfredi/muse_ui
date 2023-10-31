import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  sm: "375px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
  "2xl": "1680px",
};

export const theme = extendTheme({ breakpoints });
