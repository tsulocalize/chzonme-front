/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import HighlighterSVG from "@/assets/image/highlighter.svg?react";
import {useVideoStore} from "@/store/useVideoStore.ts";
import CalendarSVG from "@/assets/image/calendar.svg?react";
import {ToggleIcon} from "@/component/_common/ToggleIcon.tsx";
import {Calendar} from "@/component/_common/Calendar.tsx";
import {useState} from "react";
import {useUserStore} from "@/store/useUserStore.ts";
import {onToastError} from "@/util/alert.ts";
import {useIsMobile} from "@/hook/useIsMobile.ts";

export const _Controller = () => {
  const isMobile = useIsMobile();
  const { userChannelId } = useUserStore();
  const { switchHighlighter, date, setDate } = useVideoStore();
  const [ activeCalendar, setActiveCalendar ] = useState(false);

  const handleCalendar = () => {
    if (!userChannelId) {
      onToastError("로그인된 회원만 사용할 수 있습니다.");
      return;
    }
    // if (!tier) {
    //   onToastError("1티어 이상 구독 전용 기능입니다.");
    //   return;
    // }
    setActiveCalendar(!activeCalendar);
  }

  return (
    <S.Wrapper>
      <>
        <ToggleIcon svg={CalendarSVG} onClick={handleCalendar} activation={activeCalendar} isMobile={isMobile} id={'step-3'}/>
        { activeCalendar && (
          <>
            <Calendar date={date} setDate={setDate} />
            <S.Background onClick={() => {setActiveCalendar(false)}}/>
          </>
        )}
      </>
      <ToggleIcon svg={HighlighterSVG} onClick={switchHighlighter} isMobile={isMobile} id={'step-2'}/>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    gap: 6px;
  `,
  Background: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 998;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.color.black};
    opacity: 0.3;
  `,
}