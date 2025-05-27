import {useLocation} from "react-router-dom";
import {useRouteStore} from "@/store/useRouteStore.ts";
import React, {useEffect} from "react";

interface Props {
  children: React.ReactNode
}

export const RouteFollower = ({children}: Props) => {
  const location = useLocation();
  const { setPath } = useRouteStore();

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  return (<>{children}</>);
}