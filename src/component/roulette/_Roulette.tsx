import {useVoteStore} from "@/store/useVoteStore.ts";
import {useEffect} from "react";
import {getVideoSetting, getVideoTable} from "@/api/server/video.ts";

export const _Roulette = () => {
  const { votes, setVotes } = useVoteStore();
// 현재 룰렛이 없다면, 룰렛 생성 버튼 만들기


  return (<></>);
}