import { FC } from "react";
import { createTheme, ThemeProvider, Theme, Container } from "@mui/material";
import { css, Global } from "@emotion/react";
import {
  ThemeContextProvider,
  useThemeContext,
} from "../../contexts/theme-context";
import { Footer } from "../footer/footer";
import { Mode } from "../mode/mode";
import { ClientLibs } from "../client-libs/client-libs";

const muiTheme: Theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const App: FC = () => {
  const { theme } = useThemeContext();

  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
            min-width: 400px;
          }
        `}
      />
      <ThemeProvider theme={muiTheme}>
        <ThemeContextProvider>
          <Container
            maxWidth="sm"
            sx={{
              p: theme === "compact" ? 0 : 2,
              pb: "56px",
              bgcolor: "background.paper",
              minHeight: "calc(100vh - 56px)",
            }}
          >
            <Mode />
            <ClientLibs />
            <Footer />
          </Container>
        </ThemeContextProvider>
      </ThemeProvider>
    </>
  );
};
