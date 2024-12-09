import Gallery from "../components/Gallery";
import { Box, Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2E7D32",
    },
    secondary: {
      main: "#455A64",
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <Gallery />
      </Box>
    </ThemeProvider>
  );
}
