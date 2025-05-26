import styled from "styled-components";
import {_Membership} from "@/component/landing/_Membership.tsx";

interface Props {
  title: string;
  content: string;
}

interface PropsList {
  propsList: Props[];
}

export const _HorizontalContent = ({propsList}: PropsList) => {
  return (
    <S.Wrapper>
      {propsList.map((props) => (
        <_Membership title={props.title}
                     content={props.content}
        />
      ))}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${({theme}) => theme.color.white};
    border-radius: 12px;
    padding: 32px 24px 32px 24px;
    gap: 30px;
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