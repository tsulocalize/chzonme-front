import {create} from "zustand/react";

export interface ChannelState {
  channelName: string | null;
  setChannelName: (id: string) => void;
  channelImage: string | null;
  setChannelImage: (id: string) => void;
  currentPath: string;
  reset: (path: string) => void;
}

export const useChannelStore = create<ChannelState>((set, get) => ({
  channelName: null,
  setChannelName: (newChannelName) => set({channelName: newChannelName}),
  channelImage: null,
  setChannelImage: (imageUrl) => set({channelImage: imageUrl}),
  currentPath: "/",
  reset: (path) => {
    if (path !== get().currentPath) set({channelName: null, currentPath: path});
  }
}));
