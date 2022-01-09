import { ThemeProvider, createTheme } from "@mui/material/styles";
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
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
