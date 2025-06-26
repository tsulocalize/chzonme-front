import styled from "styled-components";
import {_Membership} from "@/component/membership/_Membership.tsx";
import {useSizeStore} from "@/store/useSizeStore.ts";

export const MembershipItems = () => {
  const { ratio } = useSizeStore();

  return (
    <S.Wrapper ratio={ratio}>
      <_Membership tier={1} />
      <_Membership tier={2} />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["ratio"].includes(prop)})<{ ratio: number }>`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: 50px;
    transform: translate(-50%, -50%);
    display: flex;
    gap: ${({ratio}) => - 100 + 300 * ratio + 'px'};
    z-index: 10;
  `,
}