/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import {useChannelStore} from "@/store/useChannelStore.ts";
import {getVideoSetting, getVideoTable} from "@/api/server/video.ts";
import {useEffect, useState} from "react";
import {_InnerTable} from "@/component/video/_InnerTable.tsx";
import {useVideoStore} from "@/store/useVideoStore.ts";

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
  const { channelName } = useChannelStore();
  const { isHighlighter } = useVideoStore();
  const [ data, setData ] = useState<VideoData>({ general: [], highlighter: []});
  const [ unitPrice, setUnitPrice ] = useState(100);

  useEffect(() => {
    const fetchVideoTable = async () => {
      if (channelName !== null) {
        const videoTable = await getVideoTable(channelName);
        setData(videoTable);
      }
    }

    const fetchVideoSetting = async () => {
      if (channelName !== null) {
        const videoSetting = await getVideoSetting(channelName);
        setUnitPrice(videoSetting.payAmountPerSecond);
      }
    }

    fetchVideoTable();
    fetchVideoSetting();
  }, [channelName]);


  return(
    <S.Wrapper>
      {channelName && <_InnerTable infos={isHighlighter ? data.highlighter : data.general} unitPrice={unitPrice} />}
    </S.Wrapper>
  );
}

const S = {
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
}
