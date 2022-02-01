import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Navbar } from "../components/molecules/navbar";
import "../styles/globals.css";
const theme = createTheme({
  overrides: {
    MuiSelect: {
      select: {
        "&:focus": {
          background: "$labelcolor",
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
