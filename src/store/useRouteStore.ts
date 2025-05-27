import {create} from "zustand/react";

export interface RouteState {
  currentPath: string;
  setPath: (path: string) => void;
}

export const useRouteStore = create<RouteState>((set) => ({
  currentPath: "/",
  setPath: (path) => {
    set({currentPath: path})
  },
}));