import {_Chart} from "@/component/chatting/_Chart.tsx";
import {useChattingStore} from "@/store/useChattingStore.ts";
import {useEffect, useRef} from "react";
import {useUserStore} from "@/store/useUserStore.ts";
import {getChattingData} from "@/api/server/chatting.ts";
import styled from "styled-components";
import {Title} from "@/component/_common/Title.tsx";
import {theme} from "@/common/styles.ts";
import {onToastError} from "@/util/alert.ts";
import {_Controller} from "@/component/chatting/_Controller.tsx";
import {useIsMobile} from "@/hook/useIsMobile.ts";
import moment from "moment";

export const ChattingItems = () => {
  const isMobile = useIsMobile();
  const { setChatting, date, interval } = useChattingStore();
  const { userChannelId } = useUserStore();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!userChannelId) {
      onToastError("로그인된 회원만 사용할 수 있습니다.")
      return;
    }
    const fetchChatting = async() => {
      const result = await getChattingData(interval,
        moment(date).format(LOCAL_DATE_TIME_FORMAT),
        moment(date).clone().add(1, "days").format(LOCAL_DATE_TIME_FORMAT))
      setChatting(result.chatting);
    }

    fetchChatting();
  }, [userChannelId, interval, date]);

  return(
    <S.Wrapper ref={ref}>
      <Title mainFont={theme.font.B(isMobile ? 20 : 24)}
             mainText={moment(date).format("yyyy년 MM월 DD일 채팅 그래프")}/>
      <_Chart maxWidth={ref.current?.getBoundingClientRect().width}/>
      <_Controller />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 400px;
  `,
}

const LOCAL_DATE_TIME_FORMAT = "YYYY-MM-DDTHH:mm:ss";
