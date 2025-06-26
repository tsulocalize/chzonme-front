import './App.css'
import {ThemeProvider} from "styled-components";
import {theme} from "@/common/styles.ts";
import {RouterProvider} from "react-router-dom";
import {router} from "@/router/Router.tsx"
import {setMockIfEnable} from "@/api/mock/mockingIndex.ts";
import {SizeProvider} from "@/SizeProvider.tsx";

function App() {

  setMockIfEnable();

  return (
    <SizeProvider>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
    </SizeProvider>
  )
}

export default App
