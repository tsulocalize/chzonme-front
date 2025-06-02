import {createBrowserRouter, Outlet} from "react-router-dom";
import {LandingPage} from "@/page/LandingPage.tsx";
import {Header} from "@/component/_common/Header.tsx";
import {ErrorBoundary} from "react-error-boundary";
import {FallbackPage} from "@/page/FallbackPage.tsx";
import {RouteFollower} from "@/router/RouteFollower.tsx";
import {SubHeader} from "@/component/_common/SubHeader.tsx";
import {VideoPage} from "@/page/VideoPage.tsx";
import {StoreSubscribeManager} from "@/store/StoreSubscribeManager.tsx";
import {Navigator} from "@/router/Navigator.tsx";
import {VideoGuidePage} from "@/page/VideoGuidePage.tsx";
import styled from "styled-components";
import {Footer} from "@/component/_common/Footer.tsx";

const S = {
  OutletWrapper: styled.div`
      display: flex;
      flex-direction: column;
      min-height: 100dvh;
  `
}

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <ErrorBoundary fallback={<FallbackPage />}>
        <RouteFollower>
        <Navigator>
        <StoreSubscribeManager>
          <Outlet />
        </StoreSubscribeManager>
        </Navigator>
        </RouteFollower>
        </ErrorBoundary>
      ),
      children: [
        {
          path: "",
          element: (
            <>
              <S.OutletWrapper>
                <Header />
                <LandingPage />
                <Footer floor={true}/>
              </S.OutletWrapper>
            </>
          )
        },
        {
          path: "video",
          element: (
            <>
              <S.OutletWrapper>
                <Header />
                <SubHeader />
                <VideoPage />
                <Footer />
              </S.OutletWrapper>
            </>
          )
        },
        {
          path: "video-guide",
          element: (
            <>
              <VideoGuidePage />
            </>
          )
        },
      ]
    },
    {
      path: "*",
      element: <FallbackPage />
    }
  ]
)
