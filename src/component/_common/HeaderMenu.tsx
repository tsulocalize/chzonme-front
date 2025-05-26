import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";
import {useNavigate} from "react-router-dom";

export const HeaderMenu = () => {
  const navigate = useNavigate();
  const handleClick = (dest: string) => {
    navigate(dest)
  }

  return (
    <S.Wrapper>
      <S.Menu onClick={() => handleClick("/")}>
        치즈온미 소개
      </S.Menu>
      <S.Menu onClick={() => handleClick("/video")}>
        영상 도네이션
      </S.Menu>
      <S.Menu>
        도네이션 룰렛
      </S.Menu>
      <S.Menu>
        채팅 그래프
      </S.Menu>
      <S.Menu>
        멤버십
      </S.Menu>
      <S.Menu>
        고객문의
      </S.Menu>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    gap: 45px;
  `,

  Menu: styled.div`
    background: none;
    color: ${({theme}) => theme.color.mono["700"]};
    ${({theme}) => fontStyle(theme.font.B["24"])};
    user-select: none;
    height: 45px;
    line-height: 45px;
    padding: 5px;
    white-space: nowrap;
      
      &:hover {
        cursor: pointer;
    }
  `
}
