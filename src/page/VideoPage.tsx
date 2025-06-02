import styled from "styled-components";
import {VideoItems} from "@/component/video/VideoItems.tsx";

export const VideoPage = () => {
  return (
    <S.Wrapper>
      <title>치즈온미 - 영상 도네이션</title>
      <VideoItems />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    padding: 120px 120px 0 120px;
    background: ${({theme}) => theme.color.white};
    flex: 1;
  `,
}