import {create} from "zustand/react";

export interface VideoState {
  videoId: string | null;
  setVideoId: (id: string) => void;
  reset: (path: string) => void;
  isHighlighter: boolean;
  switchHighlighter: () => void;
}

export const useVideoStore = create<VideoState>((set, get) => ({
  videoId: null,
  setVideoId: (selected) => set({videoId: selected}),
  reset: (path) => {
    if (path !== "/video") set({videoId: null});
  },
  isHighlighter: false,
  switchHighlighter: () => set({isHighlighter: !get().isHighlighter})
}));
