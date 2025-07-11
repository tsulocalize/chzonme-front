import styled from "styled-components";
import {RouletteItems} from "@/component/roulette/RouletteItems.tsx";
import {useSizeStore} from "@/store/useSizeStore.ts";

export const RouletteMobilePage = () => {
  const { ratio } = useSizeStore();

  return (
    <S.Wrapper ratio={ratio}>
      <title>치즈온미 - 룰렛</title>
      <RouletteItems />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["ratio"].includes(prop)})<{ ratio: number }>`
    padding: 10px 20px;
    background: ${({theme}) => theme.color.white};
    flex: 1;
  `,
}
