import {create} from "zustand/react";

interface Vote {
  name: string;
  count: number;
  percentage: string;
}

export interface VoteState {
  votes: Vote[];
  setVotes: (votes: Vote[]) => void;
  reset: (path: string) => void;
}

export const useVoteStore = create<VoteState>((set) => ({
  votes: [],
  setVotes: (votes: Vote[]) => set({votes: votes}),
  reset: (path) => {
    if (path !== "/roulette") set({votes: []});
  },
}));
