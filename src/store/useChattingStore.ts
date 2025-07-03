import {create} from "zustand/react";
import moment from "moment";

export interface ChattingState {
  chatting: Chatting[];
  setChatting: (responses: Response[]) => void;
  date: moment.Moment;
  setDate: (date:moment.Moment) => void;
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
  date: moment().startOf("day"),
  setDate: (moment: moment.Moment) => set({date: moment}),
  interval: 1,
  setInterval: (interval: number) => set({interval: interval})
}));
