import styled from "styled-components";

interface Props {
  texts: string[]
}

export const _LiContent = ({texts}: Props) => {
  return (
    <S.Wrapper>
      {texts.map((text) => (
        <li>{text}</li>
      ))}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 20px 20px 10px;
  `
}