import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";
import {useMenuStore} from "@/store/useMenuStore.ts";
import {goTo} from "@/router/Navigator.tsx";
import {useSizeStore} from "@/store/useSizeStore.ts";

export const HeaderMenu = () => {
  const { menus } = useMenuStore();
  const { ratio } = useSizeStore();

  return (
    <S.Wrapper ratio={ratio}>
      {menus.map((menu, index) => (
        <S.Menu key={index} onClick={() => goTo(menu.path)} isCurrentMenu={menu.isCurrentMenu} ratio={ratio}>{menu.title}</S.Menu>
      ))}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["ratio"].includes(prop)})<{ratio: number}>`
    display: flex;
    flex: 1;
    justify-content: space-between;
    max-width: ${({ratio}) => 800 * ratio + 'px'};
  `,

  Menu: styled.div.withConfig({shouldForwardProp: (prop) => !["isCurrentMenu", "ratio"].includes(prop)})<{isCurrentMenu: boolean, ratio: number}>`
    background: none;
    color: ${({theme, isCurrentMenu}) => 
            isCurrentMenu ? theme.color.mono["700"] : theme.color.mono["300"]};
    ${({theme, ratio}) => fontStyle(theme.font.B(22 + 2 * ratio))};
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
