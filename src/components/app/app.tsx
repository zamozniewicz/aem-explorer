import { FC } from "react";
import {
  createTheme,
  ThemeProvider,
  Theme,
  Container,
  GlobalStyles,
} from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
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
import { Header } from "../header/header";

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
                px: theme === "compact" ? 0 : 2,
                py: "56px",
                bgcolor: "background.paper",
                minHeight: "calc(100vh - 56px)",
              }}
            >
              <Header />
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
