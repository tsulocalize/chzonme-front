import {createBrowserRouter, Outlet} from "react-router-dom";
import {LandingPage} from "@/page/LandingPage.tsx";
import {Header} from "@/component/_common/Header.tsx";
import {ErrorBoundary} from "react-error-boundary";
import {FallbackPage} from "@/page/FallbackPage.tsx";
import {RouteFollower} from "@/router/RouteFollower.tsx";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <ErrorBoundary fallback={<FallbackPage />}>
        <RouteFollower>
          <Header />
          <Outlet />
        </RouteFollower>
        </ErrorBoundary>
      ),
      children: [
        {
          path: "",
          element: <LandingPage />
        },
        // {
        //   path: "video",
        //   element: (
        //     <>
        //       <SubHeader />
        //       <VideoPage />
        //     </>
        //   )
        // }
      ]
    },
    {
      path: "*",
      element: <FallbackPage />
    }
  ]
)
