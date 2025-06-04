import styled from "styled-components";
import {MyItems} from "@/component/my/MyItems.tsx";

export const MyPage = () => {
  return (
    <S.Wrapper>
      <title>치즈온미 - 마이페이지</title>
      <MyItems />
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