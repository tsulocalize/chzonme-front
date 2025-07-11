import {useSizeStore} from "@/store/useSizeStore.ts";
import styled from "styled-components";
import {ChattingItems} from "@/component/chatting/ChattingItems.tsx";

export const ChattingPage = () => {
  const { ratio } = useSizeStore();

  return (
    <S.Wrapper ratio={ratio}>
      <title>치즈온미 - 채팅 그래프</title>
      <ChattingItems/>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["ratio"].includes(prop)})<{ ratio: number }>`
    padding-top: ${({ratio}) => (70 * ratio) + 'px'};
    padding-bottom: ${({ratio}) => (70 * ratio) + 'px'};
    padding-left: ${({ratio}) => (90 * ratio) + 'px'};
    padding-right: ${({ratio}) => (90 * ratio) + 'px'};
    background: ${({theme}) => theme.color.white};
    flex: 1;
  `,
}