import styled from "styled-components";
import CheckSVG from "@/assets/image/check.svg?react"
import DotSVG from "@/assets/image/dot.svg?react"
import type {FontType} from "@/common/styles.ts";
import {fontStyle} from "@/util/fontStyle.ts";

interface Props {
  checkIcon?: boolean;
  texts: string[];
  font: FontType;
  gap?: number;
}

export const LiContents = ({checkIcon, texts, font, gap}: Props) => {
  return (
    <S.Wrapper font={font}>
      {texts.map((text) => (
        <S.Content gap={gap ?? 0}>
          {checkIcon ? <CheckSVG /> : <DotSVG />}
          <S.Text pad={parseInt(font.fontSize) / 5}>{text}</S.Text>
        </S.Content>
      ))}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["font"].includes(prop)})<{font: FontType}>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${({font}) => fontStyle(font)};
    margin-top: 20px;
  `,
  Content: styled.div.withConfig({shouldForwardProp: (prop) => !["gap"].includes(prop)})<{gap: number}>`
    display: flex;
    padding: ${({gap}) => gap + "px 0"};
  `,
  Text: styled.div.withConfig({shouldForwardProp: (prop) => !["pad"].includes(prop)})<{pad: number}>`
    margin-left: ${({pad}) => pad + "px"};
    white-space: nowrap;
  `
}
