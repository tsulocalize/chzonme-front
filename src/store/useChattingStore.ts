import {create} from "zustand/react";
import moment from "moment";

export interface ChattingState {
  chatting: Chatting[];
  setChatting: (responses: Response[]) => void;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  interval: number;
  setInterval: (interval: number) => void;
}

export interface Chatting {
  time: number;
  totalCount: number;
  zzzCount: number;
}

export interface Response {
  time: string;
  totalCount: number;
  zzzCount: number;
}

export const useChattingStore = create<ChattingState>((set) => ({
  chatting: [],
  setChatting: (responses: Response[]) => set({
    chatting: responses.map((response: Response) => ({...response, time: moment(response.time).unix() }))
  }),
  date: undefined,
  setDate: (date: Date | undefined) => set({date: date}),
  interval: 1,
  setInterval: (interval: number) => set({interval: interval})
}));
