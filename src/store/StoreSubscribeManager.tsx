import React, {useEffect} from "react";
import {useRouteStore} from "@/store/useRouteStore.ts";
import {useSubMenuStore} from "@/store/useSubMenuStore.ts";
import {useMenuStore} from "@/store/useMenuStore.ts";
import {useVideoStore} from "@/store/useVideoStore.ts";
import {useChannelStore} from "@/store/useChannelStore.ts";

interface Props {
  children: React.ReactNode
}

export const StoreSubscribeManager = ({children}: Props) => {
  useEffect(() => {
    const unsubscribeSubMenuFromRoute = useRouteStore.subscribe(
      (state) => state.currentPath,
      (currentPath) => {
        useSubMenuStore.getState().setMenus(currentPath);
      },
    )

    const unsubscribeMenuFromRoute = useRouteStore.subscribe(
      (state) => state.currentPath,
      (currentPath) => {
        useMenuStore.getState().setCurrentMenu(currentPath);
      },
    )

    const unsubscribeVideoFromRoute = useRouteStore.subscribe(
      (state) => state.currentPath,
      (currentPath) => {
        useVideoStore.getState().reset(currentPath);
      },
    )

    const unsubscribeChannelFromRoute = useRouteStore.subscribe(
      (state) => state.currentPath,
      (currentPath) => {
        useChannelStore.getState().reset(currentPath);
      },
    )

    return () => {
      unsubscribeSubMenuFromRoute();
      unsubscribeMenuFromRoute();
      unsubscribeVideoFromRoute();
      unsubscribeChannelFromRoute()
    }
  }, []);

  return (<>{children}</>);
}