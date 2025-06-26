import {create} from "zustand/react";
import {getChannelInfo} from "@/api/server/channel.ts";
import {connectVideo} from "@/api/server/connect.ts";
import {onToastSuccess} from "@/util/alert.ts";

export interface ChannelState {
  channelName: string | null;
  setChannelName: (name: string) => void;
  channelId: string | null;
  setChannelId: (id: string) => void;
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
    const channelId = get().channelId;
    if (!channelId) return
    const connectStatus = await connectVideo(channelId);
    if (connectStatus === 304) onToastSuccess("기존에 기록된 목록을 불러왔습니다.")
    if (connectStatus === 200) onToastSuccess("지금부터 기록을 시작합니다.")
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
