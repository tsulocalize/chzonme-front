import styled from "styled-components";
import {SubHeaderMenu} from "@/component/_common/SubHeaderMenu.tsx";
import {ChannelSearch} from "@/component/_common/ChannelSearch.tsx";

interface Props {
  withSearch?: boolean;
}

export const SubHeader = ({withSearch = true}: Props) => {
  return (
    <S.Wrapper>
      <SubHeaderMenu />
      {withSearch &&
        <S.ChannelSearchArea>
          <ChannelSearch />
        </S.ChannelSearchArea>}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 40px 0 120px;
    background: ${({theme}) => theme.color.mono["100"]};
    gap: 40px;
  `,
  ChannelSearchArea: styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-left: auto;
    width: 300px;
    height: 44px;
  `,
}