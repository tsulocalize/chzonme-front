/* eslint-disable react-hooks/rules-of-hooks */

import React from "react";
import styled from "styled-components";
import {Title} from "@/component/_common/Title.tsx";
import {theme} from "@/common/styles.ts";
import {useIsMobile} from "@/hook/useIsMobile.ts";

interface Props {
  mainText: string;
  subText: string;
  contents: React.ReactNode[];
  gap?: number
}

export const _Item = ({mainText, subText, contents, gap}: Props) => {
  const isMobile = useIsMobile();

  return (
    <S.Wrapper gap={gap} isMobile={isMobile}>
      <Title mainText={mainText} mainFont={theme.font.B(isMobile ? 20 : 40)}
             subText={subText} subFont={theme.font.M(isMobile ? 12 : 16)} gap={isMobile ? 2 : 8} />
      <S.Content isMobile={isMobile}>
        {contents}
      </S.Content>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["gap", "isMobile"].includes(prop)})<{ gap?: number, isMobile: boolean }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${({gap, isMobile}) => isMobile ? `20px` : (gap ?? 50) + "px"};
  `,
  Content: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    display: flex;
    justify-content: space-between;
    ${({isMobile}) => isMobile ? `flex-direction: column; gap: 40px;` : ``};
  `
}