import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Navbar } from "../components/molecules/navbar";
import "../styles/globals.css";
const theme = createTheme({
  palette: {
    primary: {
      main: "#140030",
      light: "#FFFFFF",
    },
  },
  components: {
    MuiPaper:{
      styleOverrides: {
        root: {
          background: "none",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </ThemeProvider>
  );
}

export default MyApp;
