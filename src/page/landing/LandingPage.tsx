import styled from "styled-components";
import {LandingItems} from "@/component/landing/LandingItems.tsx";
import {useSizeStore} from "@/store/useSizeStore.ts";

export const LandingPage = () => {
  const { ratio } = useSizeStore();

  return (
    <S.Wrapper ratio={ratio}>
      <LandingItems />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["ratio"].includes(prop)})<{ ratio: number }>`
      padding-top: ${({ratio}) => (70 * ratio) + 'px'};
      padding-bottom: ${({ratio}) => (70 * ratio) + 'px'};
      padding-left: ${({ratio}) => (90 * ratio) + 'px'};
      padding-right: ${({ratio}) => (90 * ratio) + 'px'};
  `,
}