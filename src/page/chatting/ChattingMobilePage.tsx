import styled from "styled-components";
import {ChattingItems} from "@/component/chatting/ChattingItems.tsx";

export const ChattingMobilePage = () => {
  return (
    <S.Wrapper>
      <ChattingItems/>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    background: ${({theme}) => theme.color.white};
    flex: 1;
  `,
}