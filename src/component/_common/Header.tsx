import styled from "styled-components";
import {HeaderMenu} from "./HeaderMenu.tsx";
import logo from "@/assets/image/logo-black.svg";
import {UserProfile} from "@/component/_common/UserProfile.tsx";

export const Header = () => {

  return (
    <S.Wrapper>
      <S.Logo src={logo} width={126} height={50}/>
      <HeaderMenu />
      <S.UserProfile>
        <UserProfile />
      </S.UserProfile>
    </S.Wrapper>
  )
}

const S = {
    Wrapper: styled.div`
        background: ${({theme}) => theme.color.white};
        height: 90px;
        display: flex;
        padding: 0 48px 0 48px;
        align-items: center;
        gap: 55px;
    `,
    Logo: styled.img<{ width?: number; height?: number }>`
        width: ${({ width }) => (width ? `${width}px` : 'auto')};
        height: ${({ height }) => (height ? `${height}px` : 'auto')};
        justify-self: flex-start;
    `,
    UserProfile: styled.div`
        margin-left: auto;
    `
}