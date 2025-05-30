import {useUserStore} from "@/store/useUserStore.ts";
import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";
import fallback from "@/assets/image/fallback-image.png";

export const UserProfile = () => {
  const {username, img, isLoggedIn} = useUserStore();

  return (
    <S.Wrapper>
      {!isLoggedIn ? (
        <>
          <S.Image src={img ?? fallback} alt="이미지" />
          <S.Username> {(username ?? "알 수 없는 사용자") + " 님"} </S.Username>
        </>
      ) : (
        <div>
          로그인 버튼
        </div>
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
  `
}