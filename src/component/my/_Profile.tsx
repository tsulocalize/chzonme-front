/* eslint-disable react-hooks/rules-of-hooks */

import {useUserStore} from "@/store/useUserStore.ts";
import styled from "styled-components";
import fallback from "@/assets/image/fallback-image.png";
import {fontStyle} from "@/util/fontStyle.ts";
import {SUBSCRIBE_URL} from "@/common/constant.ts";

export const _Profile = () => {
  const { username, img, tier, startDate, endDate } = useUserStore();

  return (
    <S.Wrapper>
      <S.Title>치즈온미 프로필</S.Title>
      <S.Content>
        <S.User>
          <S.UserImage src={img ?? fallback}/>
          {/*<S.UserName>{username}</S.UserName>*/}
          <S.UserName>알 수 없는 사용자</S.UserName>
        </S.User>
        <S.Subscribe>
          {tier ? (
            <>
              현재 치즈온미 채널을 구독 중입니다.\n구독 기간: ${startDate}~${endDate}\n자동 연장: O
            </>
            ) : (
            <>
              치즈온미 채널을 구독하고 있지 않습니다.
              <S.SubscribeButton onClick={() => window.open(SUBSCRIBE_URL, "_blank")}>{"구독하러 가기"}</S.SubscribeButton>
            </>
          )}
        </S.Subscribe>
      </S.Content>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 2;
    max-width: 500px;
    background: ${({theme}) => theme.color.white};
    box-shadow: 10px 0 30px rgba(0, 0, 0, 0.06);
  `,
  Title: styled.div`
    align-self: flex-start;
    justify-self: flex-start;
    ${({theme}) => fontStyle(theme.font.B(24))};
    padding: 40px 0 0 30px;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;
    gap: 200px;
  `,
  User: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  `,
  UserImage: styled.img`
    width: 140px;
    height: 140px;
    border-radius: 14px;
  `,
  UserName: styled.div`
    ${({theme}) => fontStyle(theme.font.B(32))};
  `,
  Subscribe: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    ${({theme}) => fontStyle(theme.font.M(20))};
  `,
  SubscribeButton: styled.div`
    padding: 18px 20px;
    border-radius: 12px;
    background: ${({theme}) => theme.color.point["500"]};
    color: ${({theme}) => theme.color.black};
      ${({theme}) => fontStyle(theme.font.B(20))};
      cursor: pointer;
    user-select: none;
  `,
}