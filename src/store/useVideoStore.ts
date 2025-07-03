import {create} from "zustand/react";

export interface VideoState {
  videoId: string | null;
  setVideoId: (id: string | null) => void;
  isHighlighter: boolean;
  switchHighlighter: () => void;
  reset: (path: string) => void;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

export const useVideoStore = create<VideoState>((set, get) => ({
  videoId: null,
  setVideoId: (selected) => set({videoId: selected}),
  isHighlighter: false,
  switchHighlighter: () => set({isHighlighter: !get().isHighlighter}),
  reset: (path) => {
    if (path !== "/video") set(
      {videoId: null, isHighlighter: false, date: undefined});
    },
  date: undefined,
  setDate: (date: Date | undefined) => set({date: date})
}));
