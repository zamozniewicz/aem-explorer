import { FC } from "react";
import {
  createTheme,
  ThemeProvider,
  Theme,
  Container,
  GlobalStyles,
} from "@mui/material";
import {
  ThemeContextProvider,
  useThemeContext,
} from "../../contexts/theme-context";
import { OpenInNewTabContextProvider } from "../../contexts/open-in-new-tab-context";
import { Footer } from "../footer/footer";
import { Mode } from "../mode/mode";
import { ClientLibs } from "../client-libs/client-libs";
import { Links } from "../links/links";
import { CurrentPageMode } from "../current-page-mode/current-page-mode";

const muiTheme: Theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const App: FC = () => {
  const { theme } = useThemeContext();

  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            padding: 0,
            minWidth: "400px",
          },
        }}
      />
      <ThemeProvider theme={muiTheme}>
        <ThemeContextProvider>
          <OpenInNewTabContextProvider>
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
              <CurrentPageMode />
              <Links />
              <Footer />
            </Container>
          </OpenInNewTabContextProvider>
        </ThemeContextProvider>
      </ThemeProvider>
    </>
  );
};
