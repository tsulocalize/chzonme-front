import {Title} from "@/component/_common/Title.tsx";
import {theme} from "@/common/styles.ts";
import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";
import {useSearchParams} from "react-router-dom";

export const TossPaymentFailPage = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const message = searchParams.get("message");

  return (
    <S.Wrapper>
      <Title mainText={"결제 에러가 발생했습니다"} mainFont={theme.font.B(24)}
             subText={`에러 코드: ${code}\n에러 메시지: ${message}`} subFont={theme.font.M(18)}
             gap={20} />
      <S.Button onClick={() => window.location.replace("/")}>
        홈으로
      </S.Button>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    position: fixed;
    text-align: center;
    min-width: 250px;  
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${({theme}) => fontStyle(theme.font.B(24))};
  `,
  Button: styled.div`
    display: inline-block;
    padding: 8px 12px;
    margin-top: 20px;
    border-radius: 8px;
    background: ${({theme}) => theme.color.point["300"]};
    cursor: pointer;
  `,
}