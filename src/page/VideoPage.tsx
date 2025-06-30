import styled from "styled-components";
import {VideoItems} from "@/component/video/VideoItems.tsx";
import {useSizeStore} from "@/store/useSizeStore.ts";

export const VideoPage = () => {
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
      padding-top: ${({ratio}) => (100 * ratio) + 'px'};
      padding-bottom: ${({ratio}) => (50 * ratio) + 'px'};
      padding-left: ${({ratio}) => (90 * ratio) + 'px'};
      padding-right: ${({ratio}) => (90 * ratio) + 'px'};
      background: ${({theme}) => theme.color.white};
      flex: 1;
  `,
}