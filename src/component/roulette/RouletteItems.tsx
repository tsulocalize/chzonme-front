import {_Table} from "@/component/roulette/_Table.tsx";
import styled from "styled-components";
import {_Roulette} from "@/component/roulette/_Roulette.tsx";
import {_Flag} from "@/component/roulette/_Flag.tsx";
import {useUserStore} from "@/store/useUserStore.ts";
import {useEffect} from "react";
import {onToastError} from "@/util/alert.ts";

export const RouletteItems = () => {
  const { userChannelId } = useUserStore();

  useEffect(() => {
    if (userChannelId === null) {
      onToastError("로그인된 회원만 사용할 수 있습니다.")
    }
  }, []);

  return (
    <S.Wrapper>
      <_Roulette/>
      <_Flag/>
      <_Table />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
  `
}