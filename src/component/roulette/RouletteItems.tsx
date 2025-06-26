import {_Table} from "@/component/roulette/_Table.tsx";
import styled from "styled-components";
import {useEffect} from "react";
import {useVoteStore} from "@/store/useVoteStore.ts";
import {useChannelStore} from "@/store/useChannelStore.ts";
import {getRouletteTable} from "@/api/server/roulette.ts";
import {_Roulette} from "@/component/roulette/_Roulette.tsx";

export const RouletteItems = () => {
  const { setVotes } = useVoteStore();
  const { channelName } = useChannelStore();

  useEffect(() => {
    const fetchRouletteTable = async () => {
      const rouletteTable = await getRouletteTable();
      setVotes(rouletteTable);
    }
    const intervalId = setInterval(fetchRouletteTable, 5000);
    fetchRouletteTable();

    return () => clearInterval(intervalId);
  }, [channelName]);

  return (
    <S.Wrapper>
      <_Roulette />
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