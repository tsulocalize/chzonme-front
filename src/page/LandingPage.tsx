import styled from "styled-components";
import {LandingItems} from "@/component/landing/LandingItems.tsx";

export const LandingPage = () => {
  return (
    <S.Wrapper>
      <LandingItems />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    padding: 90px 120px 90px 120px;
  `,
}