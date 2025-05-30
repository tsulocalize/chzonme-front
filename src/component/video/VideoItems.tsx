import {_Table} from "@/component/video/_Table.tsx";
import {_Video} from "@/component/video/_Video.tsx";
import styled from "styled-components";

export const VideoItems = () => {
  return (
    <S.Wrapper>
      <_Video />
      <_Table />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
  `
}