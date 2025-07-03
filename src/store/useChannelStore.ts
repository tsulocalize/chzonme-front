import {create} from "zustand/react";
import {getChannelInfo} from "@/api/server/channel.ts";

export interface ChannelState {
  channelId: string | null;
  setChannelId: (id: string) => void;
  channelName: string | null;
  setChannelName: (name: string) => void;
  channelImage: string | null;
  setChannelImage: (img: string) => void;
  currentPath: string;
  reset: (path: string) => void;
}

export const useChannelStore = create<ChannelState>((set, get) => ({
  channelId: null,
  setChannelId: (channelId) => set({channelId: channelId}),
  channelName: null,
  setChannelName: async (channelName) => {
    const info = await getChannelInfo(channelName);
    set({
      channelName: info.channelName,
      channelId: info.channelId,
      channelImage: info.channelImageUrl
    })
  },
  channelImage: null,
  setChannelImage: (imageUrl) => set({channelImage: imageUrl}),
  currentPath: "/",
  reset: (path) => {
    if (path !== get().currentPath) set({
      channelId: null,
      channelName: null,
      currentPath: path,
    });
  }
}));
