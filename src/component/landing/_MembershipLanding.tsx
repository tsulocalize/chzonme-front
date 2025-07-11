/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";
import {useNavigate} from "react-router-dom";
import {useIsMobile} from "@/hook/useIsMobile.ts";

interface Props {
  title: string;
  content: string;
}

export const _MembershipLanding = ({title, content}: Props) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const handleClick = (dest: string) => {
    navigate(dest)
  }

  return (
    <S.Wrapper isMobile={isMobile}>
      <S.Title isMobile={isMobile}>
        {title}
      </S.Title>
      <S.Content isMobile={isMobile}>
        {content}
      </S.Content>
      <S.CheckButton isMobile={isMobile} onClick={() => handleClick("/membership")}>
        지금 확인하기 →
      </S.CheckButton>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    display: flex;
    ${({isMobile}) => isMobile ? `flex-direction: column` : ''};
    width: 100%;
    gap: ${({isMobile}) => isMobile ? `4px` : `40px`};
  `,
  Title: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    ${({theme, isMobile}) => fontStyle(theme.font.B(isMobile ? 24 : 40))};
    width: 110px;
    text-align: ${({isMobile}) => isMobile ? 'left' : 'right'};
  `,
  Content: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    ${({theme, isMobile}) => fontStyle(theme.font.M(isMobile ? 14 : 24))};
    display: flex;
    align-items: center;
  `,
  CheckButton: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    display: flex;
    align-items: center;
    margin-left: auto;
    ${({theme, isMobile}) => fontStyle(theme.font.M(isMobile ? 14 : 20))};
    white-space: nowrap;
    user-select: none;
      
    &:hover {
      cursor: pointer;
    }
  `
}