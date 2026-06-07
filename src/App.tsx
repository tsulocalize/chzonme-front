import './App.css'
import {ThemeProvider} from "styled-components";
import {theme} from "@/common/styles.ts";
import {RouterProvider} from "react-router-dom";
import {router} from "@/router/Router.tsx"
import {SizeProvider} from "@/SizeProvider.tsx";
import {useIsMobile} from "@/hook/useIsMobile.ts";
import {MobileNavigator} from "@/component/_common/mobile/MobileNavigator.tsx";
import {ContinuousLoginProvider} from "@/router/ContinuousLoginProvider.tsx";
import {GuidanceProvider} from "@/guidance/GuidanceProvider.tsx";
import {Analytics} from "@vercel/analytics/react";

function App() {
  const isMobile = useIsMobile();

  return (
    <SizeProvider>
    <ThemeProvider theme={theme}>
    <GuidanceProvider>
    <ContinuousLoginProvider>
      <RouterProvider router={router} />
      {isMobile ? <MobileNavigator /> : <></>}
      <Analytics />
    </ContinuousLoginProvider>
    </GuidanceProvider>
    </ThemeProvider>
    </SizeProvider>
  )
}

export default App
