/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import YouTube, {type YouTubeEvent} from "react-youtube";
import {useVideoStore} from "@/store/useVideoStore.ts";
import {useEffect, useRef} from "react";
import {_Channel} from "@/component/video/_Channel.tsx";
import {_Controller} from "@/component/video/_Controller.tsx";
import {useSizeStore} from "@/store/useSizeStore.ts";

export const _Video = () => {
  const { ratio } = useSizeStore();
  const { videoId } = useVideoStore();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const playerRef = useRef<YT.Player | null>(null);

  const handleReady = (event: YouTubeEvent) => {
    playerRef.current = event.target;
  };

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.cueVideoById(videoId ? videoId : "invalid_video_id");
    }
  }, [videoId]);

  return (
    <S.Wrapper>
      <YouTube
        onReady={handleReady}
        videoId=''
        opts={{
          width: 600 * ratio,
          height: 450 * ratio,
          playerVars: {
            autoplay: 0, //자동재생 X
            rel: 0, //관련 동영상 표시하지 않음
            modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
          },
        }}
        onEnd={(e)=>{e.target.stopVideo(0);}}
      />
      <S.InnerWrapper>
        <_Channel />
        <_Controller />
      </S.InnerWrapper>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
  `,
  InnerWrapper: styled.div`
    display: flex;
    justify-content: space-between;
  `
}