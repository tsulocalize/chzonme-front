import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";

interface Props {
  criteria: string;
  setCriteria: (criteria: string) => void;
}

export const _CriteriaSelector = ({ criteria, setCriteria }: Props) => {
  return (
    <S.Wrapper>
      <S.Button active={criteria === 'COMBINED'}  onClick={() => setCriteria('COMBINED')}>
        종합
      </S.Button>
      <S.Button active={criteria === 'CHEESE'} onClick={() => setCriteria('CHEESE')}>
        치즈
      </S.Button>
      <S.Button active={criteria === 'COUNT'} onClick={() => setCriteria('COUNT')}>
        횟수
      </S.Button>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    gap: 8px;
    margin: 16px 0 16px 0;
  `,
  Button: styled.div.withConfig({shouldForwardProp: (prop) => !["active"].includes(prop)})<{active: boolean}>`
    display: flex;
    align-items: center;
    padding: 8px 16px 8px 16px;
    border-radius: 8px;
    background: ${({theme, active}) => active ? theme.color.point["300"] : theme.color.mono["300"]};
    color: ${({theme, active}) => active ? theme.color.black : theme.color.mono["700"]};
    ${({theme}) => fontStyle(theme.font.M(16))}
    user-select: none;
    cursor: pointer;
  `
}
