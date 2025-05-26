import styled from "styled-components";
import {LandingItems} from "@/component/landing/LandingItems.tsx";

export const LandingPage = () => {
  return (
    <S.OutsideWrapper>
      <LandingItems />
    </S.OutsideWrapper>
  );
}

const S = {
  OutsideWrapper: styled.div`
    padding: 90px 120px 0 120px;
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 200px;
  `
}