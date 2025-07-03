/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";
import {useSizeStore} from "@/store/useSizeStore.ts";
import {useVoteStore, type Vote} from "@/store/useVoteStore.ts";

const headers = ['No.', '투표 내용', '투표 수'];
const headersInData = ['id', 'name', 'cheese'];

interface Props {
  summary: { count: number }
}

export const _InnerTable = ({summary}: Props) => {
  const { ratio} = useSizeStore();
  const { votes, unitPrice } = useVoteStore();
  const filteredElements = votes.filter((vote) => Math.floor(vote.cheese / unitPrice) > 0);
  filteredElements.sort((a, b) => b.cheese - a.cheese);

  return (
    <S.Table>
      <S.Thead>
        <S.Tr>
          {headers
            .map((header) => (
              <S.Th key={header}> {header} </S.Th>
            ))}
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        {filteredElements.map((vote, index) => (
          <S.Tr key={index}>
            {headersInData.map((header) => {
              let tableData = vote[header as keyof Vote];
              if (header === 'id') tableData = index + 1;
              if (header === 'cheese') {
                const voteCount = Math.floor((tableData as number) / unitPrice);
                tableData = voteCount + ` (${(voteCount / summary.count * 100).toFixed(1)}%)`;
              }
              return (
                <S.Td key={header} colorIndex={index} ratio={ratio}> {tableData} </S.Td>
              )
            })}
          </S.Tr>
        ))
        }
      </S.Tbody>
    </S.Table>
  );
}

const S = {
  Table: styled.table`
      border-collapse: collapse;
  `,
  Thead: styled.thead`
      position: sticky;
      top: 0;
      background: white;
      z-index: 10;
  `,
  Tbody: styled.tbody``,
  Tr: styled.tr``,
  Th: styled.th`
      ${({theme}) => fontStyle(theme.font.B(18))};
      white-space: nowrap;

      &:nth-child(1) {
          width: 65px;
      }

      &:nth-child(2) {
          min-width: 300px;
          max-width: 500px;
      }
      &:nth-child(3) {
          width: 200px;
      }
  `,
  Td: styled.td.withConfig({shouldForwardProp: (prop) => !["colorIndex", "ratio"].includes(prop)})<{
    colorIndex: number,
    ratio: number
  }>`
      ${({theme, ratio}) => fontStyle(theme.font.R(16 + ratio))};
      background: ${({theme, colorIndex}) =>
              colorIndex % 2 == 0 ? theme.color.mono["50"] : ""};
      padding: 12px 5px 12px 5px;

      &:nth-child(1) {
          width: 65px;
          text-align: center;
      }

      &:nth-child(2) {
          max-width: 500px;
          text-align: center;
      }
      &:nth-child(3) {
          text-align: center;
      }
  `,
}
