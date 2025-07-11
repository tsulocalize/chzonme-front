/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import {Title} from "@/component/_common/Title.tsx";
import {theme} from "@/common/styles.ts";
import {useUserStore} from "@/store/useUserStore.ts";
import {type AlwaysConnection, useAlwaysStore} from "@/store/useAlwaysStore.ts";
import {_AlwaysConnectModal} from "@/component/my/_AlwaysConnectModal.tsx";
import {useEffect, useState} from "react";
import {createAlwaysConnection, deleteAlwaysConnection, getAlwaysConnectionByMe} from "@/api/server/always.ts";
import {onToastError, onToastSuccess} from "@/util/alert.ts";


export const _Settings = () => {
  const { userChannelId, userChannelName } = useUserStore()
  const { alwaysConnectVideo, setAlwaysConnectVideo, alwaysConnectChatting, setAlwaysConnectChatting } = useAlwaysStore();
  const [ active, setActive ] = useState(false);

  const handleSetActive = () => {
    if (!userChannelId) {
      onToastError("로그인된 회원만 사용할 수 있습니다.");
      return;
    }
    setActive(true);
  }

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

  useEffect(() => {
    const fetchMyConnections = async () => {
      const result = await getAlwaysConnectionByMe();
      setAlwaysConnectVideo(result.filter((ac: AlwaysConnection) => ac.activation === "VIDEO"));
      setAlwaysConnectChatting(result.filter((ac: AlwaysConnection) => ac.activation === "CHATTING")[0]);
    }

    fetchMyConnections()
  }, [userChannelId, active]);

  return (
    <>
      <S.Wrapper>
        <S.Box>
          <S.Content>
            <Title mainText={"영상 도네이션 항상 연결하기"} mainFont={theme.font.B(20)}
                   subText={"해당 채널의 방송이 켜지면 이를 감지하여 연결을 시도합니다.\n모든 영상 도네이션을 자동으로 기록합니다."}
                   subFont={theme.font.M(14)}
                   gap={4}/>
            <Title mainText={"내가 기록 중인 채널"} mainFont={theme.font.B(16)}
                   subText={alwaysConnectVideo.length > 0 ? alwaysConnectVideo.map(ac => `- ${ac.channelName}(영상 도네이션)`).join('\n') : '항상 연결 중인 채널이 없습니다.'}
                   subFont={theme.font.M(14)}
                   gap={4}/>
          </S.Content>
          <S.Control>
            <S.Button onClick={handleSetActive}>
              추가하기
            </S.Button>
          </S.Control>
        </S.Box>
        <S.Box>
          <S.Content>
            <Title mainText={"채팅 그래프 항상 연결하기"} mainFont={theme.font.B(20)}
                   subText={"내 채널의 방송이 켜지면 이를 감지하여 연결을 시도합니다.\n모든 채팅을 자동으로 기록합니다."}
                   subFont={theme.font.M(14)}
                   gap={4}/>
            <Title mainText={`내 채널(${userChannelName ? userChannelName : ''}) 연결`} mainFont={theme.font.B(16)}
                   subText={alwaysConnectChatting ? "항상 연결 중입니다." : "항상 연결 중이 아닙니다."}
                   subFont={theme.font.M(14)}
                   gap={4}/>
          </S.Content>
          <S.Control>
            <S.Button onClick={handleAlwaysConnectChatting}>
              {alwaysConnectChatting ? '연결끊기' : '연결하기'}
            </S.Button>
          </S.Control>
        </S.Box>
      </S.Wrapper>
      <_AlwaysConnectModal active={active} setActive={setActive} />
    </>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;
    align-items: center;
    justify-content: space-between;
    padding: 50px 0 50px 0;
  `,
  Box: styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 70%;
    height: 30%;
    background: ${({theme}) => theme.color.white};
    border-radius: 20px;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    padding: 24px;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  Control: styled.div`
    position: absolute;
    right: 24px;
  `,
  Button: styled.div`
    white-space: nowrap;
    text-decoration: underline;
    cursor: pointer;
    user-select: none;
  `
}
