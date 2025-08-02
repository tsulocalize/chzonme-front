/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import {useChannelStore} from "@/store/useChannelStore.ts";
import {getPreviousVideoTable, getVideoSetting, getVideoTable} from "@/api/server/video.ts";
import {useEffect, useMemo, useRef, useState} from "react";
import {_InnerTable} from "@/component/video/_InnerTable.tsx";
import {useVideoStore} from "@/store/useVideoStore.ts";
import {formatTime} from "@/util/date.ts";
import {useSizeStore} from "@/store/useSizeStore.ts";
import {activateVideo, connect} from "@/api/server/connect.ts";
import {useIsMobile} from "@/hook/useIsMobile.ts";
import {fontStyle} from "@/util/fontStyle.ts";

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
  const isMobile = useIsMobile();
  const [ connected, setConnected ] = useState(false);
  const { channelId } = useChannelStore();
  const { isHighlighter, date } = useVideoStore();
  const { ratio } = useSizeStore();
  const [ data, setData ] = useState<VideoData>({ general: [], highlighter: []});
  const [ unitPrice, setUnitPrice ] = useState(100);
  const etag = useRef(0); // etag by length

  const summary = useMemo(() => {
    return {
      count: data.general.length + data.highlighter.length,
      time: formatTime((sumCheese(data.general) + sumCheese(data.highlighter)) / unitPrice)
    };
  }, [data, unitPrice]);

  const handleGetVideo = async (channelId: string) => {
    try {
      const result = await getVideoTable(channelId, etag.current);
      if (result === null) return true;
      setData(result);
      etag.current = result.general.length + result.highlighter.length;
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  useEffect(() => {
    if (!channelId) return;
    const setVideoConnection = async () => {
      const connected = await connect(channelId).then((serverName) => activateVideo(channelId, serverName));
      setConnected(connected == 200);
      etag.current = 0;
    }

    setVideoConnection();
  }, [channelId]);

  useEffect(() => {
    if (!connected || !channelId) return;

    const fetchVideoSetting = async () => {
      const videoSetting = await getVideoSetting(channelId);
      setUnitPrice(videoSetting.payAmountPerSecond);
    }

    const fetchVideoTable = async () => {
      const available = await handleGetVideo(channelId);
      if (!available) {
        clearInterval(intervalId);
      }
    };

    const fetchPreviousVideoTable = async () => {
      if (date) {
        const result = await getPreviousVideoTable(channelId, date);
        setData(result);
      }
    }

    fetchVideoSetting();
    if (date) {
      fetchPreviousVideoTable();
      return;
    }
    const intervalId = setInterval(fetchVideoTable, 5000);
    fetchVideoTable();

    return () => clearInterval(intervalId);
  }, [connected, date]);

  return(
    <>
      {connected && (
        <S.OutsideWrapper>
          <S.Wrapper ratio={ratio} isMobile={isMobile}>
           <_InnerTable infos={isHighlighter ? data.highlighter : data.general} unitPrice={unitPrice} />
          </S.Wrapper>
          <S.Summary isMobile={isMobile}>
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
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["ratio", "isMobile"].includes(prop)})<{ratio: number, isMobile: boolean}>`
    max-height: ${({ratio}) => 450 * ratio + 'px'};
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
