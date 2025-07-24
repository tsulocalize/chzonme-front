/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import {_MembershipLanding} from "@/component/landing/_MembershipLanding.tsx";
import {useIsMobile} from "@/hook/useIsMobile.ts";

interface Props {
  title: string;
  content: string;
}

interface PropsList {
  propsList: Props[];
}

export const _HorizontalContent = ({propsList}: PropsList) => {
  const isMobile = useIsMobile();

  return (
    <S.Wrapper isMobile={isMobile}>
      {propsList.map((props, index) => (
        <_MembershipLanding title={props.title}
                            content={props.content}
                            key={index}
        />
      ))}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${({theme}) => theme.color.white};
    border-radius: 12px;
    padding: ${({isMobile}) => isMobile ? `16px 20px` : `32px 32px 32px 24px`};
    gap: ${({isMobile}) => isMobile ? `20px` : `30px`};
    box-sizing: border-box;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    flex-shrink: 0
  `,

  Image: styled.img`
    width: 400px;
    margin-top: auto;
    align-self: center;
  `
}