/* eslint-disable react-hooks/rules-of-hooks */

import {
  Area,
  AreaChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import {useChattingStore} from "@/store/useChattingStore.ts";
import moment from "moment";
import styled from "styled-components";

interface Props {
  maxWidth?: number;
}

export const _Chart = ({maxWidth}: Props) => {
  const { chatting } = useChattingStore();
  const tickWidth = 2;
  const chartWidth = maxWidth ?
    Math.max(maxWidth, (chatting.length - 1) * tickWidth)
    : (chatting.length - 1) * tickWidth;

  return (
    <S.Wrapper>
      <div style={{minWidth: chartWidth}}>
        <AreaChart
          width={chartWidth}
          height={300}
          data={chatting}
          margin={{top: 20, right: 30, left: 0, bottom: 5}}
        >
          <XAxis
            dataKey="time"
            type="number"
            domain={['dataMin', 'dataMax']}
            tickFormatter={(t) => moment.unix(t).format("HH:mm")}
          />
          <YAxis />
          <Tooltip labelFormatter={(label) => {
            return moment.unix(label).format('HH:mm');
          }} formatter={(value: number, name: string) => {
            if (name == "zzzCount") {
              return [value, "ㅋㅋㅋ"]
          } if (name == "totalCount") {
              return [value, "채팅 수"]
            } return [value, name]
          }}/>
          <Area type="basis" dataKey="totalCount" stroke="#8884d8" fill="#8884d8"/>
          <Area type="basis" dataKey="zzzCount" stroke="#82ca9d" fill="#82ca9d"/>
        </AreaChart>
      </div>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
  `,
}
