import styled from "styled-components";
import {LandingItems} from "@/component/landing/LandingItems.tsx";

export const LandingMobilePage = () => {
  return (
    <S.Wrapper>
      <LandingItems />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    padding: 10px 20px;
  `,
}