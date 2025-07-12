/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import {useIsMobile} from "@/hook/useIsMobile.ts";
import {fontStyle} from "@/util/fontStyle.ts";

interface Props {
  texts: string[]
}

export const _LiContent = ({texts}: Props) => {
  const isMobile = useIsMobile();

  return (
    <S.Wrapper isMobile={isMobile}>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {texts.map((text) => (
          <li>{text}</li>
        ))}
      </ul>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${({isMobile}) => isMobile ? `0` : `20px 20px 20px 10px`};
    margin-top: -10px;
    ${({theme, isMobile}) => isMobile ? fontStyle(theme.font.R(12)) : ''};
  `
}