/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import PlaySVG from "@/assets/image/play.svg?react";
import StopSVG from "@/assets/image/stop.svg?react";
import VoteSVG from "@/assets/image/vote.svg?react";
import RefreshSVG from "@/assets/image/refresh.svg?react";
import {Icon} from "@/component/_common/Icon.tsx";
import {useState} from "react";
import {connectRoulette, disconnectRoulette} from "@/api/server/connect.ts";
import {useUserStore} from "@/store/useUserStore.ts";
import {createRoulette, getRouletteTable} from "@/api/server/roulette.ts";
import {ToggleIcon} from "@/component/_common/ToggleIcon.tsx";
import {useVoteStore} from "@/store/useVoteStore.ts";
import {useIsMobile} from "@/hook/useIsMobile.ts";

interface _ControllerProps {
  handleRotate: () => void,
  handleStop: () => void
}

export const _Controller = ({handleRotate, handleStop}: _ControllerProps) => {
  const isMobile = useIsMobile();
  const { votes, setVotes, setWinningVote, isVoting, setIsVoting } = useVoteStore();
  const { userChannelId } = useUserStore();
  const [ isRotating, setIsRotating] = useState(false);

  const refresh = async () => {
    if (votes.length == 0) return;
    await createRoulette();
    const result = await getRouletteTable();
    setVotes(result.elements);
    setWinningVote("");
  }

  const toggleVote = () => {
    if (!userChannelId) return;

    if (isVoting) {
      connectRoulette(userChannelId);
      setIsVoting(true);
      return;
    }
    disconnectRoulette(userChannelId);
    setIsVoting(false);
  }

  const turnWheel = () => {
    if (votes.length == 0) return;
    if (isRotating) {
      handleStop();
      setIsRotating(false);
      return;
    }
    handleRotate();
    setIsRotating(true);
  }

  return (
    <S.Wrapper>
      <Icon svg={RefreshSVG} onClick={refresh} isMobile={isMobile} id={'step-3'}/>
      <ToggleIcon svg={VoteSVG} onClick={toggleVote} isMobile={isMobile} id={'step-4'}/>
      <Icon svg={isRotating ? StopSVG : PlaySVG} onClick={turnWheel} isMobile={isMobile} id={'step-5'}/>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 6px;
  `
}