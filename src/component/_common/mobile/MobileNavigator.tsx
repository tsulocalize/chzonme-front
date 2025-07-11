import styled from "styled-components";
import {useMenuStore} from "@/store/useMenuStore.ts";
import {goTo} from "@/router/Navigator.tsx";
import HomeSVG from "@/assets/image/mobile/homeNav.svg?react"
import VideoSVG from "@/assets/image/mobile/videoNav.svg?react"
import RouletteSVG from "@/assets/image/mobile/rouletteNav.svg?react"
import ChattingSVG from "@/assets/image/mobile/chattingNav.svg?react"
import MembershipSVG from "@/assets/image/mobile/membershipNav.svg?react"

const svgMap = [
  <HomeSVG />,
  <VideoSVG />,
  <RouletteSVG />,
  <ChattingSVG />,
  <MembershipSVG />,
]

export const MobileNavigator = () => {
  const { menus } = useMenuStore();

  return (
    <S.Wrapper>
      {menus.map((menu, index) => (
        <S.Menu key={index} onClick={() => goTo(menu.path)}
                isCurrentMenu={menu.isCurrentMenu}>{menu.shortTitle}
          {svgMap[index]}
        </S.Menu>
      ))}
    </S.Wrapper>
  );
}


const S = {
  Wrapper: styled.div`
    position: fixed;
    bottom: 0;
    left: 0; 
    right: 0;
    padding-bottom: env(safe-area-inset-bottom);
    display: flex;
    justify-content: space-between;
    height: var(--bottom-nav-height);
    padding-left: 10px;
    padding-right: 10px;
    border-top: 1px gray solid;
    background: ${({theme}) => theme.color.white};
  `,
  Menu: styled.div.withConfig({shouldForwardProp: (prop) => !["isCurrentMenu"].includes(prop)})<{isCurrentMenu: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${({theme, isCurrentMenu}) =>
          isCurrentMenu ? theme.color.mono["800"] : theme.color.mono["300"]};
    transition: color 0.2s ease;
    white-space: pre-line;
    cursor: pointer;
    user-select: none;
    min-width: 40px;
  `
}