/* eslint-disable react-hooks/rules-of-hooks */

import {useUserStore} from "@/store/useUserStore.ts";
import styled from "styled-components";
import fallback from "@/assets/image/fallback-image.png";
import {fontStyle} from "@/util/fontStyle.ts";
import {goTo} from "@/router/Navigator.tsx";

export const _MobileProfile = () => {
  const { userChannelName, img, tier } = useUserStore();

  return (
    <S.Wrapper>
      <S.Content>
        <S.User>
          <S.UserImage src={img ?? fallback}/>
          <S.UserName>{userChannelName}</S.UserName>
        </S.User>
        <S.Subscribe>
          {tier ? (
            <>
              {`현재 치즈온미 채널을 ${tier}티어 구독 중입니다.`}
            </>
            ) : (
            <>
              <S.SubscribeButton onClick={() => goTo("/membership")}>{"구독하기"}</S.SubscribeButton>
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
    background: ${({theme}) => theme.color.white};
    box-shadow: 10px 0 30px rgba(0, 0, 0, 0.06);
    padding: 5px 10px;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  `,
  User: styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
  `,
  UserImage: styled.img`
    width: 50px;
    height: 50px;
    padding: 5px 5px 5px 5px;
    border-radius: 18px;
    overflow: hidden;
    object-fit: cover;
  `,
  UserName: styled.div`
    ${({theme}) => fontStyle(theme.font.B(24))};
  `,
  Subscribe: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    ${({theme}) => fontStyle(theme.font.M(16))};
  `,
  SubscribeButton: styled.div`
    padding: 8px 10px;
    border-radius: 6px;
    background: ${({theme}) => theme.color.point["500"]};
    color: ${({theme}) => theme.color.black};
      ${({theme}) => fontStyle(theme.font.B(16))};
      cursor: pointer;
    user-select: none;
  `,
}