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
    <div style={{width: '100%', overflowX: 'auto',  overflowY: 'hidden' }}>
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
    </div>
    // <>
    // <AreaChart
    //   data={chatting}
    //   width={(chatting.length - 1) * tickWidth}
    //   margin={{
    //     top: 20, right: 20, bottom: 20, left: 20
    //   }}>
    //   <CartesianGrid strokeDasharray="3 3" />
    //   <XAxis
    //     dataKey="time"
    //     type="number"
    //     // interval={0}
    //     scale="time"
    //     domain={['dataMin', 'dataMax']}
    //     tickFormatter={(timeNum) =>
    //       moment.unix(timeNum).format("HH:mm")
    //     }/>
    //   <YAxis />
    //   {/*<Tooltip labelFormatter={(value) =>*/}
    //   {/*  new Date(value).toLocaleString()*/}
    //   {/*} />*/}
    //   <Legend />
    //
    //   {/*<Area*/}
    //   {/*  type="monotone"*/}
    //   {/*  dataKey="total_count"*/}
    //   {/*  stroke="#8884d8"*/}
    //   {/*  fill="#8884d8"*/}
    //   {/*  fillOpacity={0.5}*/}
    //   {/*  name="전체 수"*/}
    //   {/*/>*/}
    //   {/*<Area*/}
    //   {/*  type="monotone"*/}
    //   {/*  dataKey="zzz_count"*/}
    //   {/*  stroke="#82ca9d"*/}
    //   {/*  fill="#82ca9d"*/}
    //   {/*  fillOpacity={0.5}*/}
    //   {/*  name="zzz 수"*/}
    //   {/*/>*/}
    // </AreaChart>
    // </>
  )
}


