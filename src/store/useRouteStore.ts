import {create} from "zustand/react";
import { subscribeWithSelector } from 'zustand/middleware'

export interface RouteState {
  currentPath: string;
  setPath: (path: string) => void;
}

export const useRouteStore = create<RouteState>()(
  subscribeWithSelector((set) => ({
    currentPath: "/",
    setPath: (path) => {
      set({currentPath: path})
    },
  }))
);