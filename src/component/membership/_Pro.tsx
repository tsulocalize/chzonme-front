import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";
import {SUBSCRIBE_URL} from "@/common/constant.ts";
import {Title} from "@/component/_common/Title.tsx";
import {theme} from "@/common/styles.ts";
import {LiContents} from "@/component/_common/LiContents.tsx";

export const _Pro = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <Title mainText={"Pro"} mainFont={theme.font.B(40)}
               subText={"치지직 2티어 구독"} subFont={theme.font.M(18)} />
        <S.Price>
          14,900원 / 월
        </S.Price>
        <LiContents checkIcon font={theme.font.M(20)} gap={8}
                    texts={["과거 영상 도네이션 목록", "항상 연결하기 2채널", "채팅 그래프 기록"]}
        />
      </S.Content>
      <S.ButtonWrapper>
        <S.SubscribeButton onClick={() => window.open(SUBSCRIBE_URL, "_blank")}>구독하러가기
        </S.SubscribeButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex:1;
  `,
  Content: styled.div``,
  Price: styled.div`
    ${({theme}) => fontStyle(theme.font.M(24))};
    border-bottom: 1px solid ${({theme}) => theme.color.mono["300"]};
    margin-top: 12px;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
  `,
  SubscribeButton: styled.div`
    padding: 10px 20px;
    border-radius: 8px;
    background: ${({theme}) => theme.color.point["300"]};
    color: ${({theme}) => theme.color.black};
    ${({theme}) => fontStyle(theme.font.B(24))};
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
      
    &:hover {
      background: ${({theme}) => theme.color.point["500"]};
    }
  `,
}
