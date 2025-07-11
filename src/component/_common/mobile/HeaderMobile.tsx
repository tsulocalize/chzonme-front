import styled from "styled-components";
import logo from "@/assets/image/logo-black.svg";
import {UserProfile} from "@/component/_common/UserProfile.tsx";
import {goTo} from "@/router/Navigator.tsx";

export const HeaderMobile = () => {

  return (
    <S.Wrapper>
      <S.Logo src={logo} width={90} height={36} onClick={() => goTo("/")}/>
      <UserProfile />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    background: ${({theme}) => theme.color.white};
    height: 50px;
    display: flex;
    padding: 0 12px;
    justify-content: space-between;
    align-items: center;
  `,
  Logo: styled.img<{ width?: number; height?: number }>`
    width: ${({ width }) => (width ? `${width}px` : 'auto')};
    height: ${({ height }) => (height ? `${height}px` : 'auto')};
    justify-self: flex-start;
    cursor: pointer;
  `,
}