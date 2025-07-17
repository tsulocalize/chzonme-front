import styled from "styled-components";
import {VideoRankingItems} from "@/component/videoRanking/VideoRankingItems.tsx";
import {useIsMobile} from "@/hook/useIsMobile.ts";

export const VideoRankingPage = () => {
  const isMobile = useIsMobile();

  return (
    <S.Wrapper isMobile={isMobile}>
      <title>치즈온미 - 영도 랭킹</title>
      <VideoRankingItems />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
     padding: ${({isMobile}) => isMobile ? `6px 16px 0 16px` : `20px 40px 0 40px`};
  `,
}