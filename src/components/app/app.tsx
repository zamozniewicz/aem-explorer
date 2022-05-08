import { FC } from "react";
import { Container, GlobalStyles, Box } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { linksGroups } from "../../model/links";
import {
  ThemeContextProvider,
  useThemeContext,
} from "../../contexts/theme-context";
import { PreferencesContextProvider } from "../../contexts/preferences-context";
import { Footer } from "../footer/footer";
import { Mode } from "../mode/mode";
import { ClientLibs } from "../client-libs/client-libs";
import { Links } from "../links/links";
import { CurrentPageMode } from "../current-page-mode/current-page-mode";
import { Header } from "../header/header";

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
      <ThemeContextProvider>
        <PreferencesContextProvider>
          <Container
            maxWidth="sm"
            sx={{
              px: theme.size === "compact" ? 0 : 2,
              bgcolor: "background.paper",
            }}
          >
            <Header />
            <Box role="main" sx={{ mt: theme.size === "compact" ? 1 : 2 }}>
              <Mode />
              <CurrentPageMode />
              <Links linksGroups={linksGroups} />
              <ClientLibs />
            </Box>
            <Footer />
          </Container>
        </PreferencesContextProvider>
      </ThemeContextProvider>
    </>
  );
};
