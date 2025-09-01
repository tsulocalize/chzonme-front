/* eslint-disable react-hooks/rules-of-hooks */

import type {VideoInfo} from "@/component/video/_Table.tsx";
import {useEffect, useMemo, useState} from "react";
import {useVideoStore} from "@/store/useVideoStore.ts";
import {formatDate, formatShortTime} from "@/util/date.ts";
import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";
import {useSizeStore} from "@/store/useSizeStore.ts";
import {useIsMobile} from "@/hook/useIsMobile.ts";

const headers = ['No.', '영상 제목', '치즈', '생성 시간', '앞으로'];
const headersInData = ['id', 'videoName', 'cheese', 'createdAt', 'timeTo'];

interface Props {
  infos: VideoInfo[]
  unitPrice: number
}

export const _InnerTable = ({infos, unitPrice}: Props) => {
  const isMobile = useIsMobile();
  const { setVideoId } = useVideoStore();
  const { ratio } = useSizeStore();
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [infosLength, setInfosLength] = useState(0);
  const accumulate = useMemo(() => {
    return calculateAccumulate(infos)
  }, [infos]);

  useEffect(() => {
    if (infos.length === 0) return;
    setSelectedIndex(selectedIndex + infos.length - infosLength);
    setInfosLength(infos.length);
  }, [selectedIndex, infos]); // 현재 선택된 row 유지

  const handleRowClick = (index: number) => {
    setSelectedIndex(index);
    setVideoId(infos[index].videoId);
  };

  return (
    <S.Table>
      <S.Thead>
        <S.Tr>
          {headers
             .map((header) => (
               <S.Th key={header} isMobile={isMobile}> {header} </S.Th>
             ))}
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        {infos.map((info, index) => (
          <S.Tr key={index} onClick={() => handleRowClick(index)}>
            {headersInData.map((header) => {
              let tableData = info[header as keyof VideoInfo];
              if (header === 'id') tableData = infos.length - index;
              if (header === 'createdAt') tableData = formatDate(String(tableData));
              if (header === 'timeTo') tableData = formatShortTime((accumulate[index] - accumulate[selectedIndex]) / unitPrice);
              if (header === 'cheese') tableData = tableData.toLocaleString()
              return (
                <S.Td key={header} colorIndex={index} selected={index == selectedIndex} ratio={ratio} isMobile={isMobile}>
                  {tableData}
                </S.Td>
            )})}
          </S.Tr>
          ))
        }
      </S.Tbody>
    </S.Table>
  );
}

function calculateAccumulate(infos: VideoInfo[]) {
  const result = infos.reduceRight(
    (acc: number[], item, index) => {
      const before = acc[index + 1] | 0;
      acc[index] = before + item.cheese;
      return acc;
    }, []
  );

  result.shift(); // remove first
  result.push(0); // append 0

  return result;
}

const S = {
  Table: styled.table`
    border-collapse: collapse;
    width: 100%;
  `,
  Thead: styled.thead`
    position: sticky;
    top: 0;
    background: white;
    z-index: 10;
  `,
  Tbody: styled.tbody``,
  Tr: styled.tr``,
  Th: styled.th.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    ${({theme, isMobile}) => fontStyle(theme.font.B(isMobile ? 14 : 18))};
    white-space: nowrap;
    
    &:nth-child(1) {
      width: 65px;
    }
    &:nth-child(2) {
      max-width: 500px;
    }
    &:nth-child(3) {
      width: 120px;
    }
    &:nth-child(4) {
      width: 130px;
    }
    &:nth-child(5) {
      width: 100px;
    }
  `,
  Td: styled.td.withConfig({shouldForwardProp: (prop) => !["colorIndex", "selected", "ratio", "isMobile"]
      .includes(prop)})<{colorIndex: number, selected: boolean, ratio: number, isMobile: boolean}>`
    ${({theme, ratio, isMobile}) => fontStyle(theme.font.R(isMobile ? 13 : 16 + ratio))};
    background: ${({theme, colorIndex, selected}) => 
            selected ? theme.color.point["300"] : colorIndex % 2 == 0 ? theme.color.mono["50"] : ""};
    padding: ${({isMobile}) => isMobile ? `6px 2px 6px 2px` : `12px 5px 12px 5px`};
      
    &:nth-child(1) {
      width: 65px;
      text-align: center;
    }
    &:nth-child(2) {
      max-width: 500px;
      min-width: ${({ratio}) => 170 * ratio + 'px'};
      word-break: break-all;
    }
    &:nth-child(3) {
      width: ${({ratio}) => 80 + 20 * ratio + 'px'};
      text-align: center;
    }
    &:nth-child(4) {
      width: ${({ratio}) => 100 + 20 * ratio + 'px'};
      text-align: center;
    }
    &:nth-child(5) {
      width: ${({ratio}) => 80 + 10 * ratio + 'px'};
      text-align: center;
    }
  `,
}
