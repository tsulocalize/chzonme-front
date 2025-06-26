import {create} from "zustand/react";

export interface SizeState {
  windowWidth: number;
  setWindowWidth: (width: number) => void;
  ratio: number;
}

export const useSizeStore = create<SizeState>((set) => ({
  windowWidth: window.innerWidth,
  setWindowWidth: width => set({
    windowWidth: width,
    ratio: getRatio(width)
  }),
  ratio: 1.0
}));

function getRatio(width: number) {
  if (width > 1920) return 1.5;
  if (width > 1600) return 1.2;
  if (width > 1200) return 1.0;
  return 0.8;
}
