import CheddarCheesePNG from "@/assets/image/cheddar-cheese.png";
import CartoonCheesePNG from "@/assets/image/cartoon-cheese.png";
import styled from "styled-components";
import {MembershipItems} from "@/component/membership/MembershipItems.tsx";
import {Title} from "@/component/_common/Title.tsx";
import {theme} from "@/common/styles.ts";

export const MembershipPage = () => {

  return (
    <S.Wrapper>
      <S.CheddarCheese src={CheddarCheesePNG} />
      <S.Title>
        <Title mainText={"치즈온미를 구독하고 다양한 기능을 마음껏 누려보세요!"} mainFont={theme.font.B(38)}
              subText={"회원가입 하시고 ‘치지직 치즈온미' 채널을 구독하면 자동으로 멤버십이 적용됩니다!"} subFont={theme.font.M(20)}
               gap={3}
        />
      </S.Title>
      <MembershipItems />
      <S.CartoonCheese src={CartoonCheesePNG} />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    position: relative;
    flex: 1;
  `,
  Title: styled.div`
    position: absolute;
    top: 60px;
    left: 120px;
  `,
  CheddarCheese: styled.img`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
  `,
  CartoonCheese: styled.img`
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 0;
  `
}