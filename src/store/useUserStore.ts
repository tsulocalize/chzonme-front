import {create} from "zustand/react";

export interface UserState {
  username: string | null;
  img: string | null;
  isSubscribed: boolean;
  subscribeDuration: string | null;
  isLoggedIn: boolean;
  login: (userData: UserData) => void;
}

export interface UserData {
  channelName:string;
  img:string;
  isSubscribed: boolean;
  subscribeDuration: string;
}

export const useUserStore = create<UserState>((set) => ({
  username: null,
  img: null,
  isSubscribed: false,
  subscribeDuration: null,
  isLoggedIn: false,

  login: (userData: UserData) => {
    console.log(userData.channelName);
    set({
      username: userData.channelName,
      img: userData.img,
      isSubscribed: userData.isSubscribed,
      subscribeDuration: userData.subscribeDuration,
      isLoggedIn: true,
    });
  },

  logout: () => {
    set({
      username: null,
      img: null,
      isSubscribed: false,
      subscribeDuration: null,
      isLoggedIn: false,
    });
  },
}));
