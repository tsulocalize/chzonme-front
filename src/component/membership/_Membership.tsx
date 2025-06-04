import styled from "styled-components";
import {theme} from "@/common/styles.ts";
import {_Basic} from "@/component/membership/_Basic.tsx";
import {_Pro} from "@/component/membership/_Pro.tsx";

interface Props {
  tier: number
}

export const _Membership = ({tier}: Props) => {
  return (
    <S.Wrapper tier={tier}>
      {tier === 1 ? <_Basic /> : <_Pro />}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["tier"].includes(prop)})<{tier: number}>`
    display: flex;
    min-width: clamp(180px, 20vw, 240px);
    border: 2px solid ${({tier}) => TierColor[tier]};
    border-radius: 20px;
    padding: 32px 26px;
    background: ${({theme}) => theme.color.white};
  `,
}

const TierColor : { [key: number]:string } = {
  1: theme.color.mono["300"],
  2: theme.color.point["300"]
}

