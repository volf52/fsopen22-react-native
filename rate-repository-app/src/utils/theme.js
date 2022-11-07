import { Platform } from "react-native"

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    textWhite: "#fffff0",
    white: "#fff",
    primary: "#0366d6",
    error: "#d73a4a",
    bg: {
      bar: "#24292e",
      main: "#e1e4e8",
    },
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  separator: 10,
}

export default theme
