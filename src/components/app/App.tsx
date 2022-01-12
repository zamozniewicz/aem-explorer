import { FC } from "react";
import { Box } from "@mui/material";
import { ThemeContextProvider } from "../../contexts/ThemeContext";
import { Footer } from "../footer/Footer";
import { Mode } from "../mode/Mode";
import { ClientLibs } from "../client-libs/ClientLibs";

export const App: FC = () => {
  return (
    <ThemeContextProvider>
      <Box
        sx={{
          p: 1,
          pb: "56px",
        }}
      >
        <Mode />
        <ClientLibs />
        <Footer />
      </Box>
    </ThemeContextProvider>
  );
};
