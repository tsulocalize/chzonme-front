/* eslint-disable react-hooks/rules-of-hooks */

import {Title} from "@/component/_common/Title.tsx";
import {theme} from "@/common/styles.ts";
import {ChannelSearch} from "@/component/_common/ChannelSearch.tsx";
import {Accordian} from "@/component/_common/mobile/Accordian.tsx";
import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";
import {useChannelStore} from "@/store/useChannelStore.ts";
import {useAlwaysStore} from "@/store/useAlwaysStore.ts";
import {useEffect, useState} from "react";
import {createAlwaysConnection, deleteAlwaysConnection, getAlwaysVideo} from "@/api/server/always.ts";
import {onToastSuccess} from "@/util/alert.ts";

export const _VideoAccordian = () => {
  const { channelId, channelName } = useChannelStore();
  const { alwaysConnectVideo } = useAlwaysStore();
  const [ isAlwaysConnected, setIsAlwaysConnected ] = useState(false);
  const [ byMe, setByMe] = useState(false);

  const handleOnClick = async () => {
    if (!channelId) return;
    if (isAlwaysConnected && byMe) {
      await deleteAlwaysConnection(channelId, "VIDEO")
        .then(() => {
          onToastSuccess("항상 연결이 취소되었습니다!");
        });
    }
    if (!isAlwaysConnected) {
      await createAlwaysConnection(channelId, "VIDEO")
        .then(() => {
          onToastSuccess("이제부터 항상 연결됩니다!");
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
  }, [channelId]);

  return (
    <Accordian title={"영상 도네이션 항상 연결하기"}>
      <S.Content>
        <Title mainText={""} mainFont={theme.font.M(14)}
               subText={"방송이 켜지면 이를 감지하여 연결을 시도합니다\n모든 영상 도네이션을 자동으로 기록합니다."} subFont={theme.font.M(12)}
               gap={4}/>
        <ChannelSearch border />
        <S.Result>
          {channelName == null ? `　\n　` : // 전각 여백 문자임. 빈 공간 채우기 위함
            `${channelName} 채널은\n항상 연결되어 있${isAlwaysConnected ? '습니다.' : '지 않습니다.'}`}
        </S.Result>
        <S.ButtonArea>
          { channelId && (
            <S.Button byMe={byMe} isAlwaysConnected={isAlwaysConnected} onClick={handleOnClick}>
              {byMe ? '연결끊기' : isAlwaysConnected ? '' : '연결하기'}
            </S.Button>
          )}
        </S.ButtonArea>
        <Title mainText={"내가 기록 중인 채널"} mainFont={theme.font.B(14)}
               subText={alwaysConnectVideo.length > 0 ?
                 alwaysConnectVideo.map(ac => `${ac.channelName}`).join(', ') :
                 '항상 연결 중인 채널이 없습니다.'}
               subFont={theme.font.M(14)}
               gap={4}/>
      </S.Content>
    </Accordian>
  );
}


const S = {
  Content: styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px 24px;
    background: ${({theme}) => theme.color.white};
    border-top: 1px solid ${({theme}) => theme.color.mono["200"]};
    gap: 10px;
  `,
  Result: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${({theme}) => fontStyle(theme.font.M(14))};
    white-space: pre-line;
    text-align: center;
  `,
  ButtonArea: styled.div`
    display: flex;
    justify-content: center;
    height: 50px;
  `,
  Button: styled.div.withConfig({shouldForwardProp: (prop) => !["byMe", "isAlwaysConnected"].includes(prop)})<{
    byMe: boolean,
    isAlwaysConnected: boolean
  }>`
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100px;
      border-radius: 8px;
      ${({theme}) => fontStyle(theme.font.B(18))};
      background: ${({theme}) => theme.color.point["500"]};
      user-select: none;
  `,
}
