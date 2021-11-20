import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1DFF81",
    },
    grey: {
      400: "#EEEEEE",
      500: "#F2F2F2",
      600: "#C9C9C9",
      700: "#707070",
      800: "#474747", // 가장 짙은 회색
    },
    info: {
      main: "#1bb2f1",
    },
    success: {
      main: "#1dff81",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: `'Roboto'`,
  },
  zIndex: {
    appBar: 999,
  },
});
theme.typography.h1 = {
  fontSize: "40px",
  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: "24px",
  },
};
theme.typography.h4 = {
  fontSize: "28px",
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: "20px",
  },
};
theme.typography.body1 = {
  fontSize: "20px",
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: "16px",
  },
};

export default theme;
