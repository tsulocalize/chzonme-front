import {createBrowserRouter} from "react-router-dom";
import {LandingPage} from "@/page/LandingPage.tsx";
import {Header} from "@/component/_common/Header.tsx";
import {ErrorBoundary} from "react-error-boundary";
import {FallbackPage} from "@/page/FallbackPage.tsx";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <ErrorBoundary fallback={<FallbackPage />}>
          <Header />
        </ErrorBoundary>
      ),
      children: [
        {
          path: "",
          element: <LandingPage />
        },
        // {
        //   path: "video",
        //   element: <VideoPage />
        // }
      ]
    },
    {
      path: "*",
      element: <FallbackPage />
    }
  ]
)