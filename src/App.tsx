import './App.css'
import {ThemeProvider} from "styled-components";
import {theme} from "@/common/styles.ts";
import {RouterProvider} from "react-router-dom";
import {router} from "@/router/Router.tsx"
import {SizeProvider} from "@/SizeProvider.tsx";
import {useIsMobile} from "@/hook/useIsMobile.ts";
import {MobileNavigator} from "@/component/_common/mobile/MobileNavigator.tsx";
import {ContinuousLoginProvider} from "@/router/ContinuousLoginProvider.tsx";
import {setMockIfEnable} from "@/api/mock/mockingIndex.ts";
import {GuidanceProvider} from "@/guidance/GuidanceProvider.tsx";

function App() {
  const isMobile = useIsMobile();
  setMockIfEnable();

  return (
    <SizeProvider>
    <ThemeProvider theme={theme}>
    <GuidanceProvider>
    <ContinuousLoginProvider>
      <RouterProvider router={router} />
      {isMobile ? <MobileNavigator /> : <></>}
    </ContinuousLoginProvider>
    </GuidanceProvider>
    </ThemeProvider>
    </SizeProvider>
  )
}

export default App
