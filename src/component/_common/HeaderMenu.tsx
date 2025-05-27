import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";
import {useMenuStore} from "@/store/useMenuStore.ts";
import {goTo} from "@/router/Navigator.tsx";

export const HeaderMenu = () => {
  const { menus } = useMenuStore();

  return (
    <S.Wrapper>
      {menus.map((menu) => (
        <S.Menu onClick={() => goTo(menu.path)} isCurrentMenu={menu.isCurrentMenu}>{menu.title}</S.Menu>
      ))}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    gap: 40px;
  `,

  Menu: styled.div.withConfig({shouldForwardProp: (prop) => !["isCurrentMenu"].includes(prop)})<{isCurrentMenu: boolean}>`
    background: none;
    color: ${({theme, isCurrentMenu}) => 
            isCurrentMenu ? theme.color.mono["700"] : theme.color.mono["300"]};
    ${({theme}) => fontStyle(theme.font.B(24))};
    user-select: none;
    height: 50px;
    line-height: 50px;
    padding: 5px;
    white-space: nowrap;
    transition: color 0.3s ease;

      &:hover {
        cursor: pointer;
        color: ${({theme}) => theme.color.mono["900"]};
      }
  `
}
