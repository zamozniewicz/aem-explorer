import { FC } from "react";
import { Box, Button, Tooltip } from "@mui/material";
import Footer from "../footer/Footer";
import Section from "../section/Section";
import { ThemeContextProvider } from "../../contexts/ThemeContext";

const App: FC = () => {
  return (
    <ThemeContextProvider>
      <Box
        sx={{
          p: 1,
          pb: "56px",
        }}
      >
        <Section>
          <Section.Title>WCM mode</Section.Title>
          <Section.Buttons>
            <Tooltip title="WCM disabled">
              <Button size="small">Disabled</Button>
            </Tooltip>
            <Tooltip title="WCM in edit mode">
              <Button size="small">Edit</Button>
            </Tooltip>
            <Tooltip title="WCM in design mode">
              <Button size="small">Design</Button>
            </Tooltip>
            <Tooltip title="WCM in preview mode">
              <Button size="small">Preview</Button>
            </Tooltip>
          </Section.Buttons>
        </Section>

        <Footer />
      </Box>
    </ThemeContextProvider>
  );
};

export default App;
