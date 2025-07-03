import {useUserStore} from "@/store/useUserStore.ts";
import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";
import fallback from "@/assets/image/fallback-image.png";
import {LoginModal} from "@/component/modal/LoginModal.tsx";
import {goTo} from "@/router/Navigator.tsx";

export const UserProfile = () => {
  const {userChannelName, img} = useUserStore();

  const handleOnClick = () => {
    if (userChannelName) {
      goTo("/my");
    }
  }

  return (
    <S.Wrapper onClick={handleOnClick}>
      {userChannelName !== null ? (
        <>
          <S.Image src={img ?? fallback} alt="이미지" />
          <S.Username> {(userChannelName ?? "알 수 없는 사용자") + " 님"} </S.Username>
        </>
      ) : (
        <S.Login onClick={LoginModal}>로그인</S.Login>
      )}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    height: 100%;
    gap: 10px;
    cursor: pointer;
  `,
  Image: styled.img`
    width: 50px;
    height: 50px;
    padding: 5px 5px 5px 5px;
    border-radius: 15px;
    overflow: hidden;
    object-fit: cover;
  `,
  FallbackImage: styled.div`
    width: 50px;
    height: 50px;
    border-radius: 15px;
    background: ${({theme}) => theme.color.mono["200"]};
  `,
  Username: styled.span`
    ${({theme}) => fontStyle(theme.font.B(24))};
    white-space: nowrap;
    user-select: none;
  `,
  Login: styled.div`
    padding: 10px 20px;
    border-radius: 8px;
    background: ${({theme}) => theme.color.point["500"]};
    color: ${({theme}) => theme.color.black};
    ${({theme}) => fontStyle(theme.font.B(24))};
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
  `,
}