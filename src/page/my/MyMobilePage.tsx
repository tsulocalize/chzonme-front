import styled from "styled-components";
import {MyMobileItems} from "@/component/my/mobile/MyMobileItems.tsx";

export const MyMobilePage = () => {
  return (
    <S.Wrapper>
      <title>치즈온미 - 마이페이지</title>
      <MyMobileItems />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
  `,
}