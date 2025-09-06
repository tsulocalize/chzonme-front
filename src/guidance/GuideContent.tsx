import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";

interface Props {
  content: string;
}

export const GuideContent = ({content}: Props) => {
  return (
    <S.Wrapper>
      {content}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    ${({theme}) => fontStyle(theme.font.M(16))} 
    white-space: pre-line;
  `
}
