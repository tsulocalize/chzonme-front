/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import {useEffect, useMemo} from "react";
import {useUserStore} from "@/store/useUserStore.ts";
import {getRouletteTable} from "@/api/server/roulette.ts";
import {_InnerTable} from "@/component/roulette/_InnerTable.tsx";
import {useVoteStore, type Vote} from "@/store/useVoteStore.ts";
import {useIsMobile} from "@/hook/useIsMobile.ts";
import {fontStyle} from "@/util/fontStyle.ts";

export const _Table = () => {
  const isMobile = useIsMobile();
  const { userChannelId } = useUserStore();
  const { votes, setVotes, unitPrice } = useVoteStore();
  const summary = useMemo(() => {
    return {
      count: getVoteCount(votes, unitPrice)
    };
  }, [votes, unitPrice]);

  const handleGetRoulette = async () => {
    try {
      const result = await getRouletteTable();
      setVotes(result.elements);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  useEffect(() => {
    if (!userChannelId) return;

    const fetchRouletteTable = async () => {
      if (userChannelId !== null) {
        const available = await handleGetRoulette();
        if (!available) {
          clearInterval(intervalId);
        }
      }
    }

    const intervalId = setInterval(fetchRouletteTable, 5000);
    fetchRouletteTable();

    return () => clearInterval(intervalId);
  }, [userChannelId]);


  return(
    <>
      {votes.length != 0 && (
        <S.OutsideWrapper>
          <S.Wrapper isMobile={isMobile}>
            <_InnerTable summary={summary} />
          </S.Wrapper>
          <S.Summary isMobile={isMobile}>
            {`총 투표수: ${summary.count}개`}
          </S.Summary>
        </S.OutsideWrapper>
      )}
    </>
  );
}

function getVoteCount(votes: Vote[], unitPrice: number) {
  return votes.length > 0 ? votes.map((vote) => Math.floor(vote.cheese / unitPrice))
    .reduce((a, b) => a + b, 0) : 0;
}

const S = {
  OutsideWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
  `,
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{isMobile: boolean}>`
    max-height: 550px;
    overflow-y: scroll;
      
    &::-webkit-scrollbar {
      width: ${({isMobile}) => isMobile ? `12px` : `14px`};
    }

      /* 스크롤바 막대 (thumb) */
    &::-webkit-scrollbar-thumb {
      background-color: ${({theme}) => theme.color.mono["100"]};
      border-radius: 10px;
      border: 2px solid white;
    }

      /* 스크롤바 트랙 */
    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 8px;
      margin: 2px 0 2px 0;
    }
  `,
  Summary: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{isMobile: boolean}>`
    padding-top: 4px;
    padding-right: 14px;
    text-align: right;
    white-space: pre-line;
    ${({theme, isMobile}) => isMobile ? fontStyle(theme.font.M(12)) : ''};
  `
}
