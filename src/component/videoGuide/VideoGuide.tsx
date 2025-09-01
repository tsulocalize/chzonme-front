import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";
import {_CodeSnippet} from "@/component/videoGuide/_CodeSnippet.tsx";
import {useIsMobile} from "@/hook/useIsMobile.ts";

export const VideoGuide = () => {
  const isMobile = useIsMobile();

  return (
    <S.Wrapper>
      <S.Page isMobile={isMobile}>
        <S.Title isMobile={isMobile}>OBS 영상 도네이션 고화질 설정 가이드</S.Title>
        <S.Text isMobile={isMobile}>
          <S.Week>테스트 버전: OBS 30.1.2</S.Week><br/>
          <S.Strong isMobile={isMobile}>효능·효험</S.Strong><br/>
          1. 영상 도네이션 화질 개선<br/>
          2. 치지직 클립: 영상 부분만 잘라서 확대 처리<br/><br/><br/>

          <S.Strong isMobile={isMobile}>적용 방법</S.Strong><br/>

          1. OBS 실행<br/>
          2. 영상 도네이션 용 <S.Bold isMobile={isMobile}>브라우저 캡처</S.Bold> - <S.Bold isMobile={isMobile}>속성</S.Bold><br/>
          3. 너비: <S.Bold isMobile={isMobile}>1600</S.Bold> / 높이: <S.Bold isMobile={isMobile}>1200</S.Bold><br/>
          4. <S.Bold isMobile={isMobile}>사용자 지정 CSS</S.Bold> 안에 아래 내용 복사/붙여넣기
          <br/><br/>

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
  Page: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    width: 100%;
    max-width: ${({isMobile}) => isMobile ? `250px`: `600px`};
    padding: ${({isMobile}) => isMobile ? `10px 20px 20px 20px` : `20px 32px 140px 32px`};
    background: ${({theme}) => theme.color.white};
    border-radius: 10px;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),
    0 4px 6px -2px rgba(0,0,0,0.05);
  `,
  Title: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    width: 100%;
    ${({theme, isMobile}) => fontStyle(theme.font.B(isMobile ? 20 : 28))};
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
    user-select: none;
  `,
  Text: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    ${({theme, isMobile}) => fontStyle(theme.font.R(isMobile ? 14 : 18))};
    color: ${({theme}) => theme.color.mono["900"]};
  `,
  Week: styled.div`
    ${({theme}) => fontStyle(theme.font.R(16))};
    color: ${({theme}) => theme.color.mono["400"]};
    text-align: right;
  `,
  Strong: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    ${({theme, isMobile}) => fontStyle(theme.font.M(isMobile ? 18 : 24))};
  `,
  Bold: styled.span.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    ${({theme, isMobile}) => fontStyle(theme.font.B(isMobile ? 14 : 18))};
  `,
}
