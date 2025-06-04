import styled from "styled-components";
import {Title} from "@/component/_common/Title.tsx";
import {theme} from "@/common/styles.ts";

export const _Setting = () => {
  return (
    <S.Wrapper>
      <S.Box>
        <S.Content>
          <Title mainText={"항상 연결하기"} mainFont={theme.font.B(24)}
                 subText={"해당 채널의 방송이 켜지면 이를 감지하여 연결을 시도합니다.\n구독 기간 동안 모든 영상 도네이션 or 채팅 그래프를 자동으로 기록합니다."}
                 subFont={theme.font.M(16)}
                 gap={8}/>
          <Title mainText={"내가 연결 중인 채널"} mainFont={theme.font.B(20)}
                 subText={"- 따효니(영상 도네이션)\n- 족제비와 토끼(영상 도네이션)"}
                 subFont={theme.font.M(20)}
                 gap={8}/>
        </S.Content>
        <S.Control>
          <S.Button onClick={() => {}}>
            추가하기
          </S.Button>
        </S.Control>
      </S.Box>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;
    align-items: center;
    justify-content: space-between;
    padding: 50px 0 50px 0;
  `,
  Box: styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    height: 30%;
    background: ${({theme}) => theme.color.white};
    border-radius: 20px;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    padding: 36px;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 6px 0;
  `,
  Control: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `,
  Button: styled.div`
    white-space: nowrap;
    text-decoration: underline;
    cursor: pointer;
    user-select: none;
  `
}
