import styled from "styled-components";
import {_Profile} from "@/component/my/_Profile.tsx";
import {_Setting} from "@/component/my/_Setting.tsx";

export const MyItems = () => {
  return (
    <S.Wrapper>
      <S.Spacer />
      <_Profile />
      <_Setting />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
  `,
  Spacer: styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.7;
  `
}