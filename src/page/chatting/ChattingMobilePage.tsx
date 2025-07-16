import styled from "styled-components";
import {ChattingItems} from "@/component/chatting/ChattingItems.tsx";

export const ChattingMobilePage = () => {
  return (
    <S.Wrapper>
      <title>치즈온미 - 채팅 그래프</title>
      <ChattingItems />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    padding: 10px 20px;
    background: ${({theme}) => theme.color.white};
    flex: 1;
  `,
}