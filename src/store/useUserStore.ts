import {create} from "zustand/react";

export interface UserState {
  username: string | null;
  channelId: string | null;
  img: string | null;
  tier: string | null;
  startDate: string | null;
  endDate: string | null;
  isLoggedIn: boolean;
  setData: (userData: UserData) => void;
}

export interface UserData {
  channelName: string;
  channelId: string;
  img: string;
  tier: string;
  startDate: string | null;
  endDate: string | null;
}

export const useUserStore = create<UserState>((set) => ({
  username: null,
  channelId: null,
  img: null,
  tier: null,
  startDate: null,
  endDate: null,
  isLoggedIn: false,

  setData: (userData: UserData) => {
    set({
      username: userData.channelName,
      channelId: userData.channelId,
      img: userData.img,
      tier: userData.tier,
      startDate: userData.startDate,
      endDate: userData.endDate,
      isLoggedIn: true,
    });
  },

  resetData: () => {
    set({
      username: null,
      channelId: null,
      img: null,
      tier: null,
      startDate: null,
      endDate: null,
      isLoggedIn: false,
    });
  },
}));
