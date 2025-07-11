import {useUserStore} from "@/store/useUserStore.ts";
import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";
import fallback from "@/assets/image/fallback-image.png";
import {LoginModal} from "@/component/modal/LoginModal.tsx";
import {goTo} from "@/router/Navigator.tsx";
import {useIsMobile} from "@/hook/useIsMobile.ts";

export const UserProfile = () => {
  const {userChannelName, img} = useUserStore();
  const isMobile = useIsMobile();

  const handleOnClick = () => {
    if (userChannelName) {
      goTo("/my");
    }
  }

  return (
    <S.Wrapper onClick={handleOnClick} isMobile={isMobile}>
      {userChannelName !== null ? (
        <>
          <S.Image src={img ?? fallback} alt="이미지" isMobile={isMobile}/>
          <S.Username isMobile={isMobile}> {(userChannelName ?? "알 수 없는 사용자") + " 님"} </S.Username>
        </>
      ) : (
        <S.Login onClick={LoginModal} isMobile={isMobile}>로그인</S.Login>
      )}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    display: flex;
    justify-items: center;
    align-items: center;
    height: 100%;
    gap: ${({isMobile}) => isMobile ? `5px` : `10px`};
    cursor: pointer;
  `,
  Image: styled.img.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    width: ${({isMobile}) => isMobile ? `30px` : `50px`};
    height: ${({isMobile}) => isMobile ? `30px` : `50px`};
    padding: 4px 4px 4px 4px;
    border-radius: ${({isMobile}) => isMobile ? `10px` : `14px`};
    overflow: hidden;
    object-fit: cover;
  `,
  FallbackImage: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    width: ${({isMobile}) => isMobile ? `30px` : `50px`};
    height: ${({isMobile}) => isMobile ? `30px` : `50px`};
    border-radius: ${({isMobile}) => isMobile ? `10px` : `14px`};
    background: ${({theme}) => theme.color.mono["200"]};
  `,
  Username: styled.span.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    ${({theme, isMobile }) => fontStyle(theme.font.B(isMobile ? 16 : 24))};
    white-space: nowrap;
    user-select: none;
  `,
  Login: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    padding: ${({isMobile}) => isMobile ? `10px 12px` : `10px 20px`};
    border-radius: 8px;
    background: ${({theme}) => theme.color.point["500"]};
    color: ${({theme}) => theme.color.black};
    ${({theme, isMobile}) => fontStyle(theme.font.B(isMobile ? 18 : 24))};
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
  `,
}