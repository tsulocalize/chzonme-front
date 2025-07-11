import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";
import {useSubMenuStore} from "@/store/useSubMenuStore.ts";
import {useIsMobile} from "@/hook/useIsMobile.ts";

export const SubHeaderMenu = () => {
  const isMobile = useIsMobile();
  const { subMenus } = useSubMenuStore();

  return (
    <S.Wrapper isMobile={isMobile}>
      {subMenus.map((prop, index) => (
        <S.Menu isMobile={isMobile} key={index} onClick={prop.onClick}>
          {isMobile ? prop.shortTitle : prop.title}
        </S.Menu>
      ))}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    display: flex;
    gap: ${({isMobile}) => isMobile ? `20px` : `60px`};
  `,

  Menu: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    background: none;
    color: ${({theme}) => theme.color.mono["400"]};
    ${({theme, isMobile}) => fontStyle(theme.font.B(isMobile ? 14 : 18))};
    user-select: none;
    height: 50px;
    line-height: 50px;
    padding: 5px;
    white-space: nowrap;
    transition: color 0.3s ease;

    &:hover {
      cursor: pointer;
      color: ${({theme}) => theme.color.mono["800"]};
    }
  `
}
