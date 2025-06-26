import type {Ranking} from "@/component/videoRanking/VideoRankingItems.tsx";
import YoutubeLogoSVG from "@/assets/image/youtube-logo.svg?react"
import styled from "styled-components";

interface Props {
  data: Ranking[];
}

export const _RankingTable = ({ data }: Props) => {
  return (
    <S.Wrapper>
      <S.Table>
        <thead>
        <tr className="bg-gray-100">
          <S.Th>랭킹</S.Th>
          <S.Th>제목</S.Th>
          <S.Th>치즈</S.Th>
          <S.Th>횟수</S.Th>
        </tr>
        </thead>
        <tbody>
        {data.slice(3).map((item, index) => (
          <S.Tr key={index} index={index}>
            <S.Td>#{item.rank}</S.Td>
            <S.TdLeft>{item.element.videoName}
              {item.element.videoId && (
                <YoutubeLogoSVG
                  height={"18px"}
                  width={"24px"}
                  style={{
                    cursor: 'pointer',
                    verticalAlign: 'text-bottom',
                    marginLeft: '4px'
                  }}
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${item.element.videoId}`)}/>
              )}
            </S.TdLeft>
            <S.Td>{item.element.cheese}</S.Td>
            <S.Td>{item.element.count}</S.Td>
          </S.Tr>
        ))}
        </tbody>
      </S.Table>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    border-radius: 0.5rem;     /* rounded-lg */
    overflow: hidden;
  `,
  Table: styled.table`
    width: 100%;
    background: ${({theme}) => theme.color.white};
    padding: 2px 10px 2px 10px;
    border-collapse: collapse;
  `,
  Th: styled.th`
    text-align: center;
    padding: 6px;
    white-space: nowrap;
  `,
  Tr: styled.tr.withConfig({shouldForwardProp: (prop) => !["index"].includes(prop)})<{ index: number }>`
    background: ${({theme, index}) => index % 2 == 0 ? theme.color.mono["50"] : ''};
  `,
  Td: styled.td`
    text-align: center;
    padding: 6px;
  `,
  TdLeft: styled.td`
    display: inline-block;
    padding: 6px;
  `,
}

