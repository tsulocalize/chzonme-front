/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";
import {useNavigate} from "react-router-dom";

interface Props {
  title: string;
  content: string;
}

export const _Membership = ({title, content}: Props) => {
  const navigate = useNavigate();
  const handleClick = (dest: string) => {
    navigate(dest)
  }

  return (
    <S.Wrapper>
      <S.Title>
        {title}
      </S.Title>
      <S.Content>
        {content}
      </S.Content>
      <S.CheckButton onClick={() => handleClick("/membership")}>
        지금 확인하기 →
      </S.CheckButton>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    width: 100%;
    gap: 25px;
  `,
  Title: styled.div`
    ${({theme}) => fontStyle(theme.font.B(40))};
    //display: flex;
    width: 110px;
    text-align: right;
  `,
  Content: styled.div`
    ${({theme}) => fontStyle(theme.font.M(24))};
    display: flex;
    align-items: center;
  `,
  CheckButton: styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    ${({theme}) => fontStyle(theme.font.M(20))};
    white-space: nowrap;
    user-select: none;
      
    &:hover {
      cursor: pointer;
    }
  `
}