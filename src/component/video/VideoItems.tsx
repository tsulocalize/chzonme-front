import {_Table} from "@/component/video/_Table.tsx";
import {_Video} from "@/component/video/_Video.tsx";
import styled from "styled-components";
import {useSizeStore} from "@/store/useSizeStore.ts";
import {useIsMobile} from "@/hook/useIsMobile.ts";

export const VideoItems = () => {
  const isMobile = useIsMobile();
  const { ratio } = useSizeStore();

  return (
    <S.Wrapper ratio={ratio} isMobile={isMobile}>
      <_Video />
      <_Table />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["ratio", "isMobile"].includes(prop)})<{ ratio: number, isMobile: boolean }>`
    display: flex;
    ${({isMobile}) => isMobile ? `flex-direction: column` : ``};
    gap: ${({ratio}) => 30 * ratio + 'px'};
    justify-content: space-between;
  `
}