/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import {useUserStore} from "@/store/useUserStore.ts";
import {type AlwaysConnection, useAlwaysStore} from "@/store/useAlwaysStore.ts";
import {useEffect} from "react";
import {getAlwaysConnectionByMe} from "@/api/server/always.ts";
import {_VideoAccordian} from "@/component/my/mobile/_VideoAccordian.tsx";
import {_ChattingAccordian} from "@/component/my/mobile/_ChattingAccordian.tsx";


export const _MobileSettings = () => {
  const { userChannelId } = useUserStore();
  const { setAlwaysConnectVideo, setAlwaysConnectChatting } = useAlwaysStore();

  useEffect(() => {
    const fetchMyAlwaysConnections = async () => {
      const result = await getAlwaysConnectionByMe();
      setAlwaysConnectVideo(result.filter((ac: AlwaysConnection) => ac.activation === "VIDEO"));
      setAlwaysConnectChatting(result.filter((ac: AlwaysConnection) => ac.activation === "CHATTING")[0]);
    }

    fetchMyAlwaysConnections();
  }, [userChannelId]);

  return (
      <S.Wrapper>
        <_VideoAccordian />
        <_ChattingAccordian />
      </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 50px 0 50px 0;
    gap: 20px;
  `,
}
