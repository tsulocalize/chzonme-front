import {create} from "zustand/react";

export interface UserState {
  userChannelId: string | null;
  userChannelName: string | null;
  img: string | null;
  tier: string | null;
  isLoggedIn: boolean;
  setData: (userData: UserData) => void;
}

export interface UserData {
  channelId: string;
  channelName: string;
  img: string;
  tier: string;
}

export const useUserStore = create<UserState>((set) => ({
  userChannelId: null,
  userChannelName: null,
  img: null,
  tier: null,
  isLoggedIn: false,

  setData: (userData: UserData) => {
    set({
      userChannelId: userData.channelId,
      userChannelName: userData.channelName,
      img: userData.img,
      tier: userData.tier,
      isLoggedIn: true,
    });
  },

  resetData: () => {
    set({
      userChannelId: null,
      userChannelName: null,
      img: null,
      tier: null,
      isLoggedIn: false,
    });
  },
}));
