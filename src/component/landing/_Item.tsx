import React from "react";
import styled from "styled-components";
import {Title} from "@/component/_common/Title.tsx";
import {theme} from "@/common/styles.ts";

interface Props {
  mainText: string;
  subText: string;
  contents: React.ReactNode[];
  gap?: number
}

export const _Item = ({mainText, subText, contents, gap}: Props) => {
  return (
    <S.Wrapper gap={gap}>
      <Title mainText={mainText} mainFont={theme.font.B(40)}
             subText={subText} subFont={theme.font.M(16)} gap={8} />
      <S.Content>
        {contents}
      </S.Content>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["gap"].includes(prop)})<{gap? : number}>`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${({gap}) => (gap ?? 50) + "px"};
  `,
  Content: styled.div`
    display: flex;
    justify-content: space-between;
  `
}