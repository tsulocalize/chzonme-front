/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import {useEffect, useState} from "react";
import {ChannelSearch} from "@/component/_common/ChannelSearch.tsx";
import {fontStyle} from "@/util/fontStyle.ts";
import {useChannelStore} from "@/store/useChannelStore.ts";
import {createAlwaysConnection, deleteAlwaysConnection, getAlwaysVideo} from "@/api/server/always.ts";
import {useAlwaysStore} from "@/store/useAlwaysStore.ts";
import {onToastSuccess} from "@/util/alert.ts";

interface Props {
  active: boolean,
  setActive: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

export const _AlwaysConnectModal = ({active, setActive}: Props) => {
  const { alwaysConnectVideo } = useAlwaysStore();
  const { channelId, channelName} = useChannelStore();
  const [ isAlwaysConnected, setIsAlwaysConnected] = useState(false);
  const [ byMe, setByMe] = useState(false);

  const handleOnClick = async () => {
    if (!channelId) return;
    if (isAlwaysConnected && byMe) {
      await deleteAlwaysConnection(channelId, "VIDEO")
        .then(() => {
          onToastSuccess("항상 연결이 취소되었습니다!");
          setActive(false);
        });
    }
    if (!isAlwaysConnected) {
      await createAlwaysConnection(channelId, "VIDEO")
        .then(() => {
          onToastSuccess("이제부터 항상 연결됩니다!");
          setActive(false);
        });
    }
  }

  useEffect(() => {
    if (!channelId) return;
    const fetchAlwaysVideo = async () => {
      try {
        const result = await getAlwaysVideo(channelId);
        setIsAlwaysConnected(true);
        setByMe(alwaysConnectVideo.map(ac => ac.channelId).includes(result.channelId));
      } catch (err) {
        setIsAlwaysConnected(false);
        setByMe(false);
        console.error(err);
      }
    }

    fetchAlwaysVideo();
  }, [channelId, active]);

  return (
    <>
      {active && (
        <>
        <S.Wrapper>
          <S.Header>
            <S.Title>항상 연결하기 확인</S.Title>
            <S.Close onClick={() => setActive(false)}>X</S.Close>
          </S.Header>
          <S.ChannelSearchArea>
            <ChannelSearch border/>
          </S.ChannelSearchArea>
          <S.Content>
            {channelId && (
              <div>{`${channelName} 채널은 항상 연결되어 있${isAlwaysConnected ? '습니다.' : '지 않습니다.'}`}</div>
            )}
          </S.Content>
          <S.ButtonArea>
            { channelId && (
              <S.Button byMe={byMe} isAlwaysConnected={isAlwaysConnected} onClick={handleOnClick}>
                {byMe ? '연결끊기' : isAlwaysConnected ? '' : '연결하기'}
              </S.Button>
            )}
          </S.ButtonArea>
        </S.Wrapper>
        <S.Overlay />
        </>
      )}
    </>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 500px;
    padding: 28px;
    background: ${({theme}) => theme.color.white};
    border-radius: 8px;
    box-sizing: border-box;
    z-index: 1001;
  `,
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    ${({theme}) => fontStyle(theme.font.B(24))};
    padding-bottom: 20px;
  `,
  ChannelSearchArea: styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 44px;
  `,
  Title: styled.div`
  `,
  Close: styled.div`
    cursor: pointer;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    ${({theme}) => fontStyle(theme.font.M(20))}
  `,
  ButtonArea: styled.div`
    display: flex;
    justify-content: center;
  `,
  Button: styled.div.withConfig({shouldForwardProp: (prop) => !["byMe", "isAlwaysConnected"].includes(prop)})<{
    byMe: boolean,
    isAlwaysConnected: boolean
  }>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100px;
    border-radius: 8px;
    ${({theme}) => fontStyle(theme.font.B(18))};
    background: ${({theme}) => theme.color.point["300"]};
    cursor: pointer;
    user-select: none;
    transition: background-color 0.2s ease;
      
    &:hover {
      background: ${({theme}) => theme.color.point["500"]};
    }
  `,
  Overlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vw;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  `,
}
