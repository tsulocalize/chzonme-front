import React, {useEffect} from "react";
import {useRouteStore} from "@/store/useRouteStore.ts";
import {useSubMenuStore} from "@/store/useSubMenuStore.ts";
import {useMenuStore} from "@/store/useMenuStore.ts";

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

    return () => {
      unsubscribeSubMenuFromRoute();
      unsubscribeMenuFromRoute();
    }
  }, []);

  return (<>{children}</>);
}