import styled from "styled-components";
import {_MobileProfile} from "@/component/my/mobile/_MobileProfile.tsx";
import {fontStyle} from "@/util/fontStyle.ts";
import {_MobileSettings} from "@/component/my/mobile/_MobileSettings.tsx";

export const MyMobileItems = () => {
  return (
    <S.Wrapper>
      <S.Title>치즈온미 설정</S.Title>
      <_MobileProfile />
      <_MobileSettings />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  `,
  Title: styled.div`
    ${({theme}) => fontStyle(theme.font.B(22))};
    padding: 20px;
  `,
}