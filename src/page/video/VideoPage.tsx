import styled from "styled-components";
import {VideoItems} from "@/component/video/VideoItems.tsx";
import {_ExtensionLink} from "@/component/video/_ExtensionLink.tsx";
import {useSizeStore} from "@/store/useSizeStore.ts";

export const VideoPage = () => {
  const { ratio } = useSizeStore();

  return (
    <S.Wrapper ratio={ratio}>
      <title>치즈온미 - 영상 도네이션</title>
      <S.LinkRow ratio={ratio}>
        <_ExtensionLink />
      </S.LinkRow>
      <VideoItems />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["ratio"].includes(prop)})<{ ratio: number }>`
    position: relative;
    padding-top: ${({ratio}) => (100 * ratio) + 'px'};
    padding-bottom: ${({ratio}) => (50 * ratio) + 'px'};
    padding-left: ${({ratio}) => (90 * ratio) + 'px'};
    padding-right: ${({ratio}) => (90 * ratio) + 'px'};
    background: ${({theme}) => theme.color.white};
    flex: 1;
  `,
  LinkRow: styled.div.withConfig({shouldForwardProp: (prop) => !["ratio"].includes(prop)})<{ ratio: number }>`
    position: absolute;
    top: ${({ratio}) => (16 * ratio) + 'px'};
    right: 40px;
    display: flex;
    justify-content: flex-end;
  `,
}