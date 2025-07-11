import styled from "styled-components";
import {VideoRankingItems} from "@/component/videoRanking/VideoRankingItems.tsx";

export const VideoRankingPage = () => {
  return (
    <S.Wrapper>
      <title>치즈온미 - 영도 랭킹</title>
      <VideoRankingItems />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
     padding: 20px 40px 0 40px;
    // background: ${({theme}) => theme.color.white};
    // flex: 1;
  `,
}