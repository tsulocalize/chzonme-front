import styled from "styled-components";
import {RouletteItems} from "@/component/roulette/RouletteItems.tsx";

export const RoulettePage = () => {

  return (
    <S.Wrapper>
      <title>치즈온미 - 룰렛</title>
      <RouletteItems />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
  `,
}
