import { StyleFunctionProps, mode } from "@chakra-ui/theme-tools";

export const globalStyles = {
  colors: {
    gray: {
      700: "#1f2733",
    },
    navy: {
      50: "#d0dcfb",
      100: "#aac0fe",
      200: "#a3b9f8",
      300: "#728fea",
      400: "#3652ba",
      500: "#1b3bbb",
      600: "#24388a",
      700: "#1b254b",
      800: "#111c44",
      900: "#0b1437",
    },
  },
  styles: {
    global: (props: StyleFunctionProps | Record<string, unknown>) => ({
      body: {
        overflowX: "hidden",
        bg: mode("gray.50", "#1B254B")(props),
        fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
        fontWeight: 400,
        backgroundColor: "#242424",
        WebkitFontSmoothing: "antialiased",
        WebkitTextSizeAdjust: "100%",
        lineHeight: "1.5rem",
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "2rem",
        textAlign: "center",
        display: "flex",
        minWidth: "320px",
        minHeight: "100vh",
      },
      html: {
        fontFamily: "Helvetica, sans-serif",
      },
    }),
  },
};
