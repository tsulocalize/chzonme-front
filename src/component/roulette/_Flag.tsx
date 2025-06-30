/* eslint-disable react-hooks/rules-of-hooks */

import {useVoteStore} from "@/store/useVoteStore.ts";
import styled, {css, keyframes} from "styled-components";

export const _Flag = () => {
  const { winningVote, trigger } = useVoteStore();

  return (
    <S.Flag visible={trigger}>
      {winningVote}
    </S.Flag>
  )
}

const S = {
  Flag: styled.div.withConfig({shouldForwardProp: (prop) => !["visible"].includes(prop)})<{ visible: boolean}>`
    position: fixed;
    top : 20%;
    left: 50%;
    transform: translateX(-50%);
    background-color: ghostwhite;
    color: #282c34;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: x-large;
    font-weight: bold;
    opacity: 0;
    z-index: 9999;
    border: 3px solid #1a1a1a;  /* Outer green line */
    box-sizing: border-box;    /* Ensure border does not affect overall size */

    ${({ visible }) =>
            visible &&
            css`animation: ${dropAndRise} 6s ease backwards;`}
  `,
}

const dropAndRise = keyframes`
  0% {
    top: 20%;
    opacity: 0;
  }
  30% {
     top: 41%;
     opacity: 1;
  }
  50% {
    top: 40%;
    opacity: 1;
  }
  75% {
      top: 40%;
      opacity: 1;
  }
  80% {
    top: 41%;
    opacity: 1;
  }
  100% {
    top: 20%;
    opacity: 0;
  }
`;
