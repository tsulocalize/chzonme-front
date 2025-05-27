import './App.css'
import {ThemeProvider} from "styled-components";
import {theme} from "@/common/styles.ts";
import {RouterProvider} from "react-router-dom";
import {router} from "@/router/Router.tsx"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
