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
import { OpenInNewTabContextProvider } from "../../contexts/open-in-new-tab-context";
import { Footer } from "../footer/footer";
import { Mode } from "../mode/mode";
import { ClientLibs } from "../client-libs/client-libs";
import { Links } from "../links/links";
import { CurrentPageMode } from "../current-page-mode/current-page-mode";
import { Header } from "../header/header";

export const App: React.FC = () => {
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
        <OpenInNewTabContextProvider>
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
              <ClientLibs />
              <CurrentPageMode />
              <Links linksGroups={linksGroups} />
            </Box>
            <Footer />
          </Container>
        </OpenInNewTabContextProvider>
      </ThemeContextProvider>
    </>
  );
};
