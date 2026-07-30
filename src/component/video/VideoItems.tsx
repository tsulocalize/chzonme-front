import {_Table} from "@/component/video/_Table.tsx";
import {_Video} from "@/component/video/_Video.tsx";
import styled from "styled-components";
import {useSizeStore} from "@/store/useSizeStore.ts";
import {useIsMobile} from "@/hook/useIsMobile.ts";

export const VideoItems = () => {
  const isMobile = useIsMobile();
  const { ratio } = useSizeStore();

  return (
    <div>
      [시스템 점검 안내] (07.31 오후 ~ 08.01 오전) <br />
      정확한 시간은 미정이며, 연결/조회가 언제든 중단될 수 있습니다
      <S.Wrapper ratio={ratio} isMobile={isMobile}>
        <_Video />
        <_Table />
      </S.Wrapper>
    </div>
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