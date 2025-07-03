/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import CalendarSVG from "@/assets/image/calendar.svg?react";
import {ToggleIcon} from "@/component/_common/ToggleIcon.tsx";

export const _Controller = () => {
  return (
    <S.Wrapper>
      <ToggleIcon svg={CalendarSVG} />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    gap: 6px;
  `,
}