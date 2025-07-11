import CheddarCheesePNG from "@/assets/image/cheddar-cheese.png";
import CartoonCheesePNG from "@/assets/image/cartoon-cheese.png";
import styled from "styled-components";
import {MembershipItems} from "@/component/membership/MembershipItems.tsx";
import {Title} from "@/component/_common/Title.tsx";
import {theme} from "@/common/styles.ts";
import {useSizeStore} from "@/store/useSizeStore.ts";
import {useIsMobile} from "@/hook/useIsMobile.ts";

export const MembershipMobilePage = () => {
  const isMobile = useIsMobile();
  const { ratio } = useSizeStore();

  return (
    <S.Wrapper isMobile={isMobile}>
      <S.CheddarCheese src={CheddarCheesePNG} isMobile={isMobile} />
      <S.Title isMobile={isMobile}>
        {isMobile ? (
          <Title mainText={"치즈온미를 구독하고\n다양한 기능을 마음껏 누려보세요!"} mainFont={theme.font.B(22)}
                 subText={"회원가입 하고 ‘치즈온미' 채널을 구독하면\n자동으로 멤버십이 적용됩니다!"} subFont={theme.font.M(14)}
                 gap={8}
          />
        ) : (
          <Title mainText={"치즈온미를 구독하고 다양한 기능을 마음껏 누려보세요!"} mainFont={theme.font.B(30 + 4 * ratio)}
                subText={"회원가입 하고 ‘치즈온미' 채널을 구독하면 자동으로 멤버십이 적용됩니다!"} subFont={theme.font.M(16 + 4 * ratio)}
                 gap={3}
          />
        )}
      </S.Title>
      <MembershipItems />
      {!isMobile && (
        <S.CartoonCheese src={CartoonCheesePNG} />
      )}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{isMobile: boolean}>`
    position: relative;
    flex: 1;
    ${({isMobile}) => isMobile ? `padding: 10px 20px` : ``};
  `,
  Title: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{isMobile: boolean}>`
    ${({isMobile}) => isMobile ? `position: relative` : `position: absolute; top: 40px; left: 120px;`};
  `,
  CheddarCheese: styled.img.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{isMobile: boolean}>`
    position: absolute;
    top: 0;
    right: 0;
    ${({isMobile}) => isMobile ? `width: 100px` : ''};
    z-index: 0;
  `,
  CartoonCheese: styled.img`
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 0;
  `
}