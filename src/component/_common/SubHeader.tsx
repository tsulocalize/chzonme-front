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
      {withSearch && <ChannelSearch />}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    background: ${({theme}) => theme.color.mono["100"]};
    height: 60px;
    display: flex;
    padding: 0 48px 0 120px;
    align-items: center;
    gap: 40px;
  `,
}