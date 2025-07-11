import {_Table} from "@/component/roulette/_Table.tsx";
import styled from "styled-components";
import {_Roulette} from "@/component/roulette/_Roulette.tsx";
import {_Flag} from "@/component/roulette/_Flag.tsx";
import {useUserStore} from "@/store/useUserStore.ts";
import {useEffect} from "react";
import {onToastError} from "@/util/alert.ts";
import {useIsMobile} from "@/hook/useIsMobile.ts";

export const RouletteItems = () => {
  const isMobile = useIsMobile();
  const { userChannelId } = useUserStore();

  useEffect(() => {
    if (userChannelId === null) {
      onToastError("로그인된 회원만 사용할 수 있습니다.")
    }
  }, []);

  return (
    <S.Wrapper isMobile={isMobile}>
      <_Roulette/>
      <_Flag/>
      <_Table />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{isMobile: boolean}>`
    display: flex;
    ${({isMobile}) => isMobile ? `flex-direction: column` : ''};
    gap: 20px;
    justify-content: space-between;
  `
}