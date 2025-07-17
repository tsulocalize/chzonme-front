import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";
import {_CodeSnippet} from "@/component/videoGuide/_CodeSnippet.tsx";

export const VideoGuide = () => {
  return (
    <S.Wrapper>
      <S.Page>
        <S.Title>OBS 영상 도네이션 고화질 설정 가이드</S.Title>
        <S.Text>
          <S.Week>테스트 버전: OBS 30.1.2</S.Week><br/>
          <S.Strong>효능·효험</S.Strong><br/>
          1. 영상 도네이션 화질 개선<br/>
          2. 치지직 클립 영상 부분만 잘라서 확대 처리<br/><br/><br/>

          <S.Strong>적용 방법</S.Strong><br/>

          1. OBS 실행<br/>
          2. 영상 도네이션 용 <S.Bold>브라우저 캡처</S.Bold> - <S.Bold>속성</S.Bold><br/>
          3. 너비: <S.Bold>1600</S.Bold> / 높이: <S.Bold>1200</S.Bold><br/>
          4. <S.Bold>사용자 지정 CSS</S.Bold> 아래 내용 붙여넣기
        </S.Text>
        <_CodeSnippet />
      </S.Page>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: ${({theme}) => theme.color.mono["100"]};
  `,
  Page: styled.div`
    width: 100%;
    max-width: 600px;
    padding: 20px 32px 140px 32px;
    background: ${({theme}) => theme.color.white};
    border-radius: 10px;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),
    0 4px 6px -2px rgba(0,0,0,0.05);
  `,
  Title: styled.div`
    width: 100%;
    ${({theme}) => fontStyle(theme.font.B(28))};
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
    user-select: none;
  `,
  Text: styled.div`
    ${({theme}) => fontStyle(theme.font.R(18))};
    color: ${({theme}) => theme.color.mono["900"]};
  `,
  Week: styled.div`
    ${({theme}) => fontStyle(theme.font.R(16))};
    color: ${({theme}) => theme.color.mono["400"]};
    text-align: right;
  `,
  Strong: styled.div`
    ${({theme}) => fontStyle(theme.font.M(24))};
  `,
  Bold: styled.span`
    ${({theme}) => fontStyle(theme.font.B(18))};
  `,
}
