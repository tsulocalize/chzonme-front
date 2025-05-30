/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import {useChannelStore} from "@/store/useChannelStore.ts";
import fallback from "@/assets/image/fallback-image.png";
import {fontStyle} from "@/util/fontStyle.ts";

export const _Channel = () => {
  const { channelName, channelImage } = useChannelStore();

  return (
    <S.Wrapper>
      {channelName && (
        <>
          <S.ChannelImage src={channelImage ?? fallback}/>
          <S.ChannelName>{channelName}</S.ChannelName>
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
  ChannelImage: styled.img`
    width: 50px;
    height: 50px;
    border-radius: 15px;
    background: ${({theme}) => theme.color.mono["200"]};
  `,
  ChannelName: styled.div`
    ${({theme}) => fontStyle(theme.font.B(22))};
  `,
}