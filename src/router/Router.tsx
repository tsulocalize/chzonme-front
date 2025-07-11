import {createBrowserRouter, Outlet} from "react-router-dom";
import {Header} from "@/component/_common/Header.tsx";
import {FallbackPage} from "@/page/fallback/FallbackPage.tsx";
import {RouteFollower} from "@/router/RouteFollower.tsx";
import {SubHeader} from "@/component/_common/SubHeader.tsx";
import {VideoPage} from "@/page/video/VideoPage.tsx";
import {StoreSubscribeManager} from "@/store/StoreSubscribeManager.tsx";
import {Navigator} from "@/router/Navigator.tsx";
import {VideoGuidePage} from "@/page/videoguide/VideoGuidePage.tsx";
import styled from "styled-components";
import {Footer} from "@/component/_common/Footer.tsx";
import {MyPage} from "@/page/my/MyPage.tsx";
import {LoginChecker} from "@/router/LoginChecker.tsx";
import {MembershipPage} from "@/page/membership/MembershipPage.tsx";
import {RoulettePage} from "@/page/roulette/RoulettePage.tsx";
import {CustomErrorBoundary} from "@/router/CustomErrorBoundary.tsx";
import {VideoRankingPage} from "@/page/videoranking/VideoRankingPage.tsx";
import {ChattingIndex} from "@/page/chatting/ChattingIndex.tsx";
import {LandingIndex} from "@/page/landing/LandingIndex.tsx";

const S = {
  OutletWrapper: styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100dvh;

    padding-bottom: 0;
    @media (max-width: 1024px) {
      padding-bottom: var(--bottom-nav-height);
    }
  `
}

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <RouteFollower>
        <CustomErrorBoundary>
        <Navigator>
        <StoreSubscribeManager>
          <Outlet />
        </StoreSubscribeManager>
        </Navigator>
        </CustomErrorBoundary>
        </RouteFollower>
      ),
      children: [
        {
          path: "",
          element: (
            <>
              <S.OutletWrapper>
                <LandingIndex />
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
        {
          path: "ranking",
          element: (
            <>
              <VideoRankingPage />
            </>
          )
        },
        {
          path: "my",
          element: (
            <>
              <S.OutletWrapper>
                <Header />
                <MyPage />
                <Footer />
              </S.OutletWrapper>
            </>
          )
        },
        {
          path: "membership",
          element: (
            <>
              <S.OutletWrapper>
                <Header />
                <MembershipPage />
                <Footer floor/>
              </S.OutletWrapper>
            </>
          )
        },
        {
          path: "roulette",
          element: (
            <>
              <S.OutletWrapper>
                <Header />
                <SubHeader withSearch={false} />
                <RoulettePage />
                <Footer/>
              </S.OutletWrapper>
            </>
          )
        },
        {
          path: "chatting",
          element: (
            <>
              <S.OutletWrapper>
                <ChattingIndex />
              </S.OutletWrapper>
            </>
          )
        },
        {
          path: "login",
          element: (
            <LoginChecker />
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
