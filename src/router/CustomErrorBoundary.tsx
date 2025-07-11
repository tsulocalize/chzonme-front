import {useRouteStore} from "@/store/useRouteStore.ts";
import {FallbackPage} from "@/page/fallback/FallbackPage.tsx";
import {ErrorBoundary} from "react-error-boundary";
import React from "react";

interface Props {
  children: React.ReactNode
}

export const CustomErrorBoundary = ({children}: Props) => {
  const { currentPath } = useRouteStore();

  return (
    <ErrorBoundary key={currentPath} fallback={<FallbackPage />}>
      {children}
    </ErrorBoundary>
  )
}