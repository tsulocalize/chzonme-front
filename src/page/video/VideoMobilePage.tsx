import styled from "styled-components";
import {VideoItems} from "@/component/video/VideoItems.tsx";
import {useSizeStore} from "@/store/useSizeStore.ts";

export const VideoMobilePage = () => {
  const { ratio } = useSizeStore();

  return (
    <S.Wrapper ratio={ratio}>
      <title>치즈온미 - 영상 도네이션</title>
      <VideoItems />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["ratio"].includes(prop)})<{ ratio: number }>`
    padding: 10px 20px;
    background: ${({theme}) => theme.color.white};
    flex: 1;
  `,
}