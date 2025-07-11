import './App.css'
import {ThemeProvider} from "styled-components";
import {theme} from "@/common/styles.ts";
import {RouterProvider} from "react-router-dom";
import {router} from "@/router/Router.tsx"
import {setMockIfEnable} from "@/api/mock/mockingIndex.ts";
import {SizeProvider} from "@/SizeProvider.tsx";
import {useIsMobile} from "@/hook/useIsMobile.ts";
import {MobileNavigator} from "@/component/_common/mobile/MobileNavigator.tsx";

function App() {
  const isMobile = useIsMobile();
  setMockIfEnable();

  return (
    <SizeProvider>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      {isMobile ? <MobileNavigator /> : <></>}
    </ThemeProvider>
    </SizeProvider>
  )
}

export default App
