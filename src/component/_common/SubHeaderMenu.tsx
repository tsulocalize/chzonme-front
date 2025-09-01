import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";
import {useSubMenuStore} from "@/store/useSubMenuStore.ts";
import {useIsMobile} from "@/hook/useIsMobile.ts";
import {_VideoChannels} from "@/component/_common/_VideoChannels.tsx";

export const SubHeaderMenu = () => {
  const isMobile = useIsMobile();
  const { subMenus, menuIndex } = useSubMenuStore();

  return (
    <S.Wrapper isMobile={isMobile}>
      {subMenus.map((prop, index) => (
        <S.MenuWrapper key={index}>
          <S.Menu isMobile={isMobile} key={index} onClick={prop.onClick}>
            {isMobile ? prop.shortTitle : prop.title}
          </S.Menu>
          { menuIndex === index && (
            <_VideoChannels />
          )}
        </S.MenuWrapper>
      ))}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    display: flex;
    gap: ${({isMobile}) => isMobile ? `20px` : `60px`};
  `,
  MenuWrapper: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
  `,
  Menu: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    position: relative;
    background: none;
    color: ${({theme}) => theme.color.mono["400"]};
    ${({theme, isMobile}) => fontStyle(theme.font.B(isMobile ? 14 : 18))};
    user-select: none;
    height: ${({isMobile}) => isMobile ? `40px` : `50px`};
    line-height: ${({isMobile}) => isMobile ? `40px` : `50px`};
    padding: 5px;
    white-space: nowrap;
    transition: color 0.3s ease;

    @media (hover: hover) {
      &:hover {
          cursor: pointer;
          color: ${({theme}) => theme.color.mono["800"]};
      }
    }
  `
}
