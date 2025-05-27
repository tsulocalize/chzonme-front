import {create} from "zustand/react";

export interface UserState {
  username: string | null;
  img: string | null;
  isLoggedIn: boolean;
}

interface UserData {
  channelName:string,
  img:string
}

export const useUserStore = create<UserState>((set) => ({
  username: null,
  img: null,
  isLoggedIn: false,

  login: (userData: UserData) => {
    set({
      username: userData.channelName,
      img: userData.img,
      isLoggedIn: true,
    });
  },

  logout: () => {
    set({
      username: null,
      img: null,
      isLoggedIn: false,
    });
  },
}));
