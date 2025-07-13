/* eslint-disable react-hooks/rules-of-hooks */

import {Title} from "@/component/_common/Title.tsx";
import {theme} from "@/common/styles.ts";
import {Accordian} from "@/component/_common/mobile/Accordian.tsx";
import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";
import {useAlwaysStore} from "@/store/useAlwaysStore.ts";
import {createAlwaysConnection, deleteAlwaysConnection} from "@/api/server/always.ts";
import {onToastError, onToastSuccess} from "@/util/alert.ts";
import {useUserStore} from "@/store/useUserStore.ts";

export const _ChattingAccordian = () => {
  const { userChannelId, userChannelName } = useUserStore();
  const { alwaysConnectChatting, setAlwaysConnectChatting } = useAlwaysStore();


  const handleAlwaysConnectChatting = async () => {
    if (!userChannelId) {
      onToastError("로그인된 회원만 사용할 수 있습니다.");
      return;
    }
    if (alwaysConnectChatting) {
      await deleteAlwaysConnection(userChannelId, "CHATTING")
        .then(() => {
          onToastSuccess("이제부터 연결하지 않습니다!");
          setAlwaysConnectChatting(false);
        });
    } else {
      await createAlwaysConnection(userChannelId, "CHATTING")
        .then(() => {
          onToastSuccess("이제부터 항상 연결합니다!");
          setAlwaysConnectChatting(true);
        });
    }
  }

  return (
    <Accordian title={"채팅 그래프 항상 연결하기"}>
      <S.Content>
        <Title mainText={""} mainFont={theme.font.M(14)}
               subText={"내 방송이 켜지면 이를 감지하여 연결을 시도합니다.\n모든 채팅을 자동으로 기록합니다."} subFont={theme.font.M(12)}
               gap={4}/>
        <S.Result>
          {`내 채널(${userChannelName ? userChannelName : ''})은\n항상 연결되어 있${alwaysConnectChatting ? '습니다.' : '지 않습니다.'}`}
        </S.Result>
        <S.ButtonArea>
          <S.Button isAlwaysConnected={alwaysConnectChatting} onClick={handleAlwaysConnectChatting}>
            {alwaysConnectChatting ? '연결끊기' : '연결하기'}
          </S.Button>
        </S.ButtonArea>
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
  Button: styled.div.withConfig({shouldForwardProp: (prop) => !["isAlwaysConnected"].includes(prop)})<{
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
