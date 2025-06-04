import styled from "styled-components";
import {_Membership} from "@/component/membership/_Membership.tsx";

export const MembershipItems = () => {

  return (
    <S.Wrapper>
      <_Membership tier={1} />
      <_Membership tier={2} />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: clamp(150px, 18vw, 250px);
    z-index: 10;
  `,
}