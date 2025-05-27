import styled from "styled-components";
import {SubHeaderMenu} from "@/component/_common/SubHeaderMenu.tsx";

export const SubHeader = () => {
  return (
    <S.Wrapper>
      <SubHeaderMenu />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    background: ${({theme}) => theme.color.mono["200"]};
    height: 60px;
    display: flex;
    padding: 0 120px 0 120px;
    align-items: center;
    gap: 40px;
  `,
}