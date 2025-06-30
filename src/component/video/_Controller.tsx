/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import HighlighterSVG from "@/assets/image/highlighter.svg?react";
import {useVideoStore} from "@/store/useVideoStore.ts";
import CalendarSVG from "@/assets/image/calendar.svg?react";
import {ToggleIcon} from "@/component/_common/ToggleIcon.tsx";

export const _Controller = () => {
  const { switchHighlighter } = useVideoStore();

// TODO: calendar 라이브러리
  return (
    <S.Wrapper>
      <ToggleIcon svg={CalendarSVG} />
      <ToggleIcon svg={HighlighterSVG} onClick={switchHighlighter} />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    gap: 6px;
  `,
}