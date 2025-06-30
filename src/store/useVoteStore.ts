import {create} from "zustand/react";

export interface Vote {
  name: string;
  cheese: number;
}

export interface VoteState {
  votes: Vote[];
  setVotes: (votes: Vote[]) => void;
  winningVote: string;
  setWinningVote: (winningVote: string) => void;
  isVoting: boolean;
  setIsVoting: (voting: boolean) => void;
  trigger: boolean;
  setTrigger: (trigger: boolean) => void;
  unitPrice: number;
  setUnitPrice: (unitPrice: number) => void;
  reset: (path: string) => void;
}

export const useVoteStore = create<VoteState>((set) => ({
  votes: [],
  setVotes: (votes: Vote[]) => set({votes: votes}),
  isVoting: false,
  setIsVoting: (isVoting: boolean) => set({isVoting: isVoting}),
  winningVote: "",
  setWinningVote: (winningVote: string) => set({winningVote: winningVote}),
  trigger: false,
  setTrigger: (trigger: boolean) => set({trigger: trigger}),
  unitPrice: 1000,
  setUnitPrice: (unitPrice: number) => set({unitPrice: unitPrice}),
  reset: (path) => {
    if (path !== "/roulette") set({votes: [], winningVote: ""});
  },
}));
