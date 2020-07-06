import React, { Fragment } from "react";
import Homepage from "./Homepage.js";
import {
  ThemeProvider,
  ColorModeProvider,
  theme,
  CSSReset,
} from "@chakra-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Homepage />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
