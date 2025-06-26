/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import {getVideoSetting, getVideoTable} from "@/api/server/video.ts";
import {useEffect, useMemo, useState} from "react";
import {_InnerTable} from "@/component/video/_InnerTable.tsx";
import {useVideoStore} from "@/store/useVideoStore.ts";
import {formatTime} from "@/util/date.ts";
import {useUserStore} from "@/store/useUserStore.ts";

export interface VideoInfo {
  videoName: string;
  videoId: string;
  cheese: number;
  createdAt: string;
}

export interface VideoData {
  general: VideoInfo[],
  highlighter: VideoInfo[]
}

export const _Table = () => {
  const { channelId } = useUserStore();
  const { isHighlighter } = useVideoStore();
  const [ data, setData ] = useState<VideoData>({ general: [], highlighter: []});
  const [ unitPrice, setUnitPrice ] = useState(100);
  const summary = useMemo(() => {
    return {
      count: data.general.length + data.highlighter.length,
      time: formatTime((sumCheese(data.general) + sumCheese(data.highlighter)) / unitPrice)
    };

  }, [data, unitPrice]);

  useEffect(() => {
    const fetchVideoTable = async () => {
      if (channelId !== null) {
        const videoTable = await getVideoTable(channelId);
        setData(videoTable);
      }
    }

    const fetchVideoSetting = async () => {
      if (channelId !== null) {
        const videoSetting = await getVideoSetting(channelId);
        setUnitPrice(videoSetting.payAmountPerSecond);
      }
    }

    fetchVideoTable();
    fetchVideoSetting();
  }, [channelId]);


  return(
    <>
      {channelId && (
        <S.OutsideWrapper>
          <S.Wrapper>
            <_InnerTable infos={isHighlighter ? data.highlighter : data.general} unitPrice={unitPrice} />
          </S.Wrapper>
          <S.Summary>
            {`총 개수: ${summary.count}개\n총 재생 시간: ${summary.time}`}
          </S.Summary>
        </S.OutsideWrapper>
      )}
    </>
  );
}

function sumCheese(infos: VideoInfo[]) {
  return infos.length > 0 ? infos.map((info) => info.cheese).reduce((a, b) => a + b, 0) : 0;
}

const S = {
  OutsideWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
  `,
  Wrapper: styled.div`
    max-height: 550px;
    overflow-y: scroll;
      
    &::-webkit-scrollbar {
      width: 14px;
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
  Summary: styled.div`
    padding-top: 4px;
    padding-right: 14px;
    text-align: right;
    white-space: pre-line;
  `
}
