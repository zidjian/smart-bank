import React, { useState } from "react";

import {EstilosGlobales} from "./EstilosGlobales";
import Header from "./Components/Header";
import Container from "./Components/Container";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { SwitcherTheme } from "./Components/SwitcherTheme";

function App() {
  const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [colorTheme, setColorTheme] = useState(darkMode);

  function cambiarTema() {
    setColorTheme(!colorTheme);
  }
  
  return (
    <ThemeProvider theme={!colorTheme ? temaClaro : temaOscuro}>
      <EstilosGlobales />
      <SwitcherTheme colorTheme={colorTheme} cambiarTema={cambiarTema} />
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
