import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";

interface Props {
  floor?: boolean;
}

export const FooterMobile = ({floor}: Props) => {
  const menuData = [
    {
      content: "이용약관",
      url: "https://drive.google.com/file/d/1dAMzO-wwlZDxJrJGvgo5-BHEse_XBWSM/view?usp=sharing"
    },
    {
      content: "개인정보처리방침",
      url: "https://drive.google.com/file/d/1NZjZb7ogkRFoZSlI7BWdy3B_tH2Q0o_b/view?usp=sharing"
    },
    {
      content: "1:1 문의",
      url: "https://open.kakao.com/o/sd6r2uzh"
    },
    {
      content: "디스코드",
      url: "https://discord.gg/48J5u2NVwK"
    },
  ];

  return (
    <S.Wrapper floor={floor}>
      <S.Menus>
        {menuData.map((data, index) => (
          <S.Menu key={index} onClick={() => window.open(data.url, "_blank")}>{data.content}</S.Menu>
        ))}
      </S.Menus>
      <S.Copyright>{`ⓒ 2024-2025. 치즈온미(ChzOnMe)\nAll rights reserved.`}</S.Copyright>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["floor"].includes(prop)})<{floor?: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 6px 0;  
    background: ${({theme, floor}) => floor ? theme.color.white : theme.color.mono["100"]};
    ${({theme}) => fontStyle(theme.font.M(12))};
  `,
  Line: styled.div`
    display: flex;
  `,
  Spacer: styled.div`
    flex: 1;
  `,
  Copyright: styled.div`
    flex: 1;
    text-align: center;
    white-space: pre-line;
    color: ${({theme}) => theme.color.mono["400"]};
  `,
  Menus: styled.div`
    flex: none;
    display: flex;
    justify-content: center;
    gap: 30px;  
  `,
  Menu: styled.div`
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
  `,
}

