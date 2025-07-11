import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode
}

export const MobileWrapper = ({children}: Props) => {
  return (
    <S.Wrapper>{children}</S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    width: 100%;
  `
}
