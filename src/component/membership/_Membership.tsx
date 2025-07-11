/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import {theme} from "@/common/styles.ts";
import {_Basic} from "@/component/membership/_Basic.tsx";
import {_Pro} from "@/component/membership/_Pro.tsx";
import {useIsMobile} from "@/hook/useIsMobile.ts";

interface Props {
  tier: number
}

export const _Membership = ({tier}: Props) => {
  const isMobile = useIsMobile();

  return (
    <S.Wrapper tier={tier} isMobile={isMobile}>
      {tier === 1 ? <_Basic /> : <_Pro />}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["tier", "isMobile"].includes(prop)})<{ tier: number, isMobile: boolean }>`
    display: flex;
    min-width: clamp(180px, 20vw, 240px);
    border: 2px solid ${({tier}) => TierColor[tier]};
    border-radius: 20px;
    padding: ${({isMobile}) => isMobile ? `16px 16px` : `32px 26px`};
    background: ${({theme}) => theme.color.white};
  `,
}

const TierColor : { [key: number]:string } = {
  1: theme.color.mono["300"],
  2: theme.color.point["300"]
}

