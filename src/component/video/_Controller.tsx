/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import HighlighterSVG from "@/assets/image/highlighter.svg?react";
import {useVideoStore} from "@/store/useVideoStore.ts";
import CalendarSVG from "@/assets/image/calendar.svg?react";
import {Icon} from "@/component/_common/Icon.tsx";

export const _Controller = () => {
  const { switchHighlighter } = useVideoStore();

// TODO: calendar 라이브러리
  return (
    <S.Wrapper>
      <Icon svg={CalendarSVG} />
      <Icon svg={HighlighterSVG} onClick={switchHighlighter} />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    gap: 6px;
  `,
}