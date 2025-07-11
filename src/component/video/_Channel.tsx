/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import {useChannelStore} from "@/store/useChannelStore.ts";
import fallback from "@/assets/image/fallback-image.png";
import {fontStyle} from "@/util/fontStyle.ts";
import {useIsMobile} from "@/hook/useIsMobile.ts";

export const _Channel = () => {
  const isMobile = useIsMobile();
  const { channelName, channelImage } = useChannelStore();

  return (
    <S.Wrapper>
      {channelName && (
        <>
          <S.ChannelImage isMobile={isMobile} src={channelImage ?? fallback}/>
          <S.ChannelName isMobile={isMobile}>{channelName}</S.ChannelName>
        </>
      )}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    padding: 2px;
    gap: 10px;
    user-select: none;
  `,
  ChannelImage: styled.img.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    width: ${({isMobile}) => isMobile ? `30px` : `50px`};
    height: ${({isMobile}) => isMobile ? `30px` : `50px`};
    border-radius: ${({isMobile}) => isMobile ? `8px` : `15px`};
    background: ${({theme}) => theme.color.mono["200"]};
  `,
  ChannelName: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    ${({theme, isMobile}) => fontStyle(theme.font.B(isMobile ? 16 : 22))};
  `,
}