import {create} from "zustand/react";

export interface AlwaysConnection {
  channelId: string;
  channelName: string;
  activation: string;
}

export interface AlwaysState {
  alwaysConnectVideo: AlwaysConnection[];
  setAlwaysConnectVideo: (alwaysConnectVideo: AlwaysConnection[]) => void;
  alwaysConnectChatting: boolean;
  setAlwaysConnectChatting: (alwaysConnectChatting: boolean) => void;
}

export const useAlwaysStore = create<AlwaysState>((set) => ({
  alwaysConnectVideo: [],
  setAlwaysConnectVideo: (alwaysConnectVideo: AlwaysConnection[]) => set({alwaysConnectVideo: alwaysConnectVideo}),
  alwaysConnectChatting: false,
  setAlwaysConnectChatting: (alwaysConnectChatting: boolean) => set({alwaysConnectChatting: alwaysConnectChatting}),
}));
