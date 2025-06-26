import {_Table} from "@/component/video/_Table.tsx";
import {_Video} from "@/component/video/_Video.tsx";
import styled from "styled-components";
import {useSizeStore} from "@/store/useSizeStore.ts";

export const VideoItems = () => {
  const { ratio } = useSizeStore();

  return (
    <S.Wrapper ratio={ratio}>
      <_Video />
      <_Table />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["ratio"].includes(prop)})<{ ratio: number }>`
    display: flex;
    gap: ${({ratio}) => 30 * ratio + 'px'};
    justify-content: space-between;
  `
}