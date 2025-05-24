import './App.css'
import {LandingPage} from "./page/LandingPage.tsx";
import {ThemeProvider} from "styled-components";
import {theme} from "@/common/styles.ts";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <LandingPage></LandingPage>
    </ThemeProvider>
  )
}

export default App
