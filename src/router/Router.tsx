import {createBrowserRouter, Outlet} from "react-router-dom";
import {FallbackPage} from "@/page/fallback/FallbackPage.tsx";
import {RouteFollower} from "@/router/RouteFollower.tsx";
import {StoreSubscribeManager} from "@/store/StoreSubscribeManager.tsx";
import {Navigator} from "@/router/Navigator.tsx";
import {VideoGuidePage} from "@/page/videoguide/VideoGuidePage.tsx";
import styled from "styled-components";
import {LoginChecker} from "@/router/LoginChecker.tsx";
import {CustomErrorBoundary} from "@/router/CustomErrorBoundary.tsx";
import {VideoRankingPage} from "@/page/videoranking/VideoRankingPage.tsx";
import {ChattingIndex} from "@/page/chatting/ChattingIndex.tsx";
import {LandingIndex} from "@/page/landing/LandingIndex.tsx";
import {VideoIndex} from "@/page/video/VideoIndex.tsx";
import {RouletteIndex} from "@/page/roulette/RouletteIndex.tsx";
import {MembershipIndex} from "@/page/membership/MembershipIndex.tsx";
import {MyIndex} from "@/page/my/MyIndex.tsx";
import {Guidance} from "@/guidance/Guidance.tsx";

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
          <Guidance />
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
                <VideoIndex />
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
                <MyIndex />
              </S.OutletWrapper>
            </>
          )
        },
        {
          path: "membership",
          element: (
            <>
              <S.OutletWrapper>
                <MembershipIndex />
              </S.OutletWrapper>
            </>
          )
        },
        {
          path: "roulette",
          element: (
            <>
              <S.OutletWrapper>
                <RouletteIndex />
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
