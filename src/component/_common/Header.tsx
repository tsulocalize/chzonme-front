import styled from "styled-components";
import {HeaderMenu} from "./HeaderMenu.tsx";
import logo from "@/assets/Logo-black.svg";
import {UserProfile} from "@/component/_common/UserProfile.tsx";

export const Header = () => {

  return (
    <S.Wrapper>
      <S.Logo src={logo} width={126} height={50}/>
      <S.Menus>
        <HeaderMenu />
      </S.Menus>
      <S.UserProfile>
        <UserProfile />
      </S.UserProfile>
    </S.Wrapper>
  )
}

const S = {
    Wrapper: styled.div`
        background: ${({theme}) => theme.color.mono["50"]};
        height: 100px;
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
    Menus: styled.div``,
    UserProfile: styled.div`
        margin-left: auto;
    `
}