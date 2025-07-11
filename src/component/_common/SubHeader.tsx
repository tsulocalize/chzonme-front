import styled from "styled-components";
import {SubHeaderMenu} from "@/component/_common/SubHeaderMenu.tsx";
import {ChannelSearch} from "@/component/_common/ChannelSearch.tsx";
import {useIsMobile} from "@/hook/useIsMobile.ts";

interface Props {
  withSearch?: boolean;
}

export const SubHeader = ({withSearch = true}: Props) => {
  const isMobile = useIsMobile();

  return (
    <S.Wrapper isMobile={isMobile}>
      <SubHeaderMenu />
      {withSearch &&
        <S.ChannelSearchArea isMobile={isMobile}>
          <ChannelSearch />
        </S.ChannelSearchArea>}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    display: flex;
    align-items: center;
    height: ${({isMobile}) => isMobile ? `40px` : `60px`};
    padding: ${({isMobile}) => isMobile ? `0 20px 0 12px` : `0 40px 0 120px`};
    background: ${({theme}) => theme.color.mono["100"]};
    gap: ${({isMobile}) => isMobile ? `10px` : `40px`};
  `,
  ChannelSearchArea: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    display: flex;
    align-items: center;
    position: relative;
    margin-left: auto;
    width: ${({isMobile}) => isMobile ? `100px` : `300px`};
    height: ${({isMobile}) => isMobile ? `32px` : `44px`};
  `,
}