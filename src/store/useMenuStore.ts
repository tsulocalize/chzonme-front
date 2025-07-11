import {create} from "zustand/react";
import {immer} from "zustand/middleware/immer";

interface Menu {
  title: string;
  shortTitle: string;
  path: string;
  isCurrentMenu: boolean;
}

export interface MenuState {
  menus: Menu[];
  setCurrentMenu: (path: string) => void;
}

export const useMenuStore = create<MenuState>()(
  immer((set) => ({
      menus: [
        {title: "치즈온미 소개", shortTitle:"홈", path: "/", isCurrentMenu: true},
        {title: "영상 도네이션", shortTitle:"영도", path: "/video", isCurrentMenu: false},
        {title: "도네이션 룰렛", shortTitle:"룰렛", path: "/roulette", isCurrentMenu: false},
        {title: "채팅 그래프", shortTitle:"채팅", path: "/chatting", isCurrentMenu: false},
        {title: "멤버십", shortTitle:"멤버십", path: "/membership", isCurrentMenu: false},
      ],
      setCurrentMenu: (path) => set((state) => {
        state.menus.forEach((menu) => {
          menu.isCurrentMenu = menu.path === path
        })
      })
  }))
);

