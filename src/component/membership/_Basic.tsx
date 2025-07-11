/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";
import {SUBSCRIBE_URL} from "@/common/constant.ts";
import {Title} from "@/component/_common/Title.tsx";
import {theme} from "@/common/styles.ts";
import {LiContents} from "@/component/_common/LiContents.tsx";
import {useIsMobile} from "@/hook/useIsMobile.ts";

export const _Basic = () => {
  const isMobile = useIsMobile();

  return (
    <S.Wrapper>
      <S.Content>
        <S.ContentHeader isMobile={isMobile}>
          <Title mainText={"Basic"} mainFont={theme.font.B(isMobile ? 32 : 38)}
                 subText={"치지직 1티어 구독"} subFont={theme.font.M(isMobile ? 14 : 18)}/>
          <S.Price isMobile={isMobile}>
            4,900원 / 월
          </S.Price>
        </S.ContentHeader>
        <LiContents checkIcon font={theme.font.M(isMobile ? 16 : 20)} gap={isMobile ? 2 : 8}
                    texts={["과거 영상 도네이션 목록", "항상 연결하기 1채널"]}
        />
      </S.Content>
      <S.ButtonWrapper isMobile={isMobile}>
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
  ContentHeader: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{isMobile: boolean}>`
    display: flex;
    ${({isMobile}) => isMobile ? `justify-content: space-between` : `flex-direction: column`};
  `,
  Price: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{isMobile: boolean}>`
    ${({theme, isMobile}) => fontStyle(theme.font.M(isMobile ? 20 : 24))};
    ${({theme, isMobile}) => isMobile ? '' : `border-bottom: 1px solid ${theme.color.mono["300"]}`};
    margin-top: ${({isMobile}) => isMobile ? `4px` : `12px`};
  `,
  ButtonWrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{isMobile: boolean}>`
    display: flex;
    justify-content: center;
    margin-top: ${({isMobile}) => isMobile ? `20px` : `50px`};
  `,
  SubscribeButton: styled.div`
    padding: 10px 20px;
    border-radius: 8px;
    background: ${({theme}) => theme.color.mono["100"]};
    color: ${({theme}) => theme.color.black};
    ${({theme}) => fontStyle(theme.font.B(24))};
    cursor: pointer;
    user-select: none;
    white-space: nowrap;

    @media (hover: hover) {
      &:hover {
        background: ${({theme}) => theme.color.mono["200"]};
      }
    }
  `,
}
