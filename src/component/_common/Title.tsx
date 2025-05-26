import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";
import type {FontType} from "@/common/styles.ts";

interface Props {
  mainText: string;
  mainFont: FontType;
  subText?: string;
  subFont?: FontType;
  gap?: number;
}

export const Title = ({mainText, mainFont, subText, subFont, gap}: Props) => {
  return (
    <S.Wrapper gap={gap}>
      <S.MainTitle mainFont={mainFont}>{mainText}</S.MainTitle>
      <S.SubTitle subFont={subFont}>{subText}</S.SubTitle>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div<{gap?: number}>`
    display: flex;
    flex-direction: column;
    gap: ${({gap}) => gap && gap + "px"};
  `,

  MainTitle: styled.div<{mainFont: FontType}>`
    ${({mainFont}) => fontStyle(mainFont)};
  `,

  SubTitle: styled.div<{subFont?: FontType}>`
    ${({subFont}) => subFont && fontStyle(subFont)};
    color: ${({theme}) => theme.color.mono["400"]};
    white-space: pre-line;
  `
}