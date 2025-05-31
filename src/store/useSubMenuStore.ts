import {create} from "zustand/react";

interface Menu {
  title: string;
  onClick: () => void;
}

export interface SubMenuState {
  subMenus: Menu[];
  setMenus: (path: string) => void;
}

export const useSubMenuStore = create<SubMenuState>((set) => ({
  subMenus: [],
  setMenus: (path) => set({subMenus: routeDataMap[path] ?? []})
}));

const routeDataMap: Record<string, Menu[]> = {
  "/": [],
  "/video": [
    {title: "지금 영도 중인 채널", onClick: () => {}},
    {title: "이번주 영도 랭킹", onClick: () => {window.open("/ranking")}},
    {title: "영도 고화질 설정", onClick: () => {window.open("/video-guide", "_blank")}},
  ],
  "/video-guide": [
    {title: "지금 영도 중인 채널", onClick: () => {}},
    {title: "이번주 영도 랭킹", onClick: () => {window.open("/ranking")}},
    {title: "영도 고화질 설정", onClick: () => {window.open("/video-guide", "_blank")}},
  ],
}