import type {Ranking} from "@/component/videoRanking/VideoRankingItems.tsx";
import YoutubeLogoSVG from "@/assets/image/youtube-logo.svg?react"
import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";

interface Props {
  data: Ranking[];
}

export function _TopThree({ data }: Props) {
  const topThree = data.slice(0, 3);

  return (
    <S.Wrapper>
      {topThree.map((item, index) => (
        <S.Card key={index}>
          <S.Trophy>{`🏆 #${item.rank}`}</S.Trophy>
          <S.CardTitle>{item.element.videoName}
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
          </S.CardTitle>
          <S.CardContent>치즈: {item.element.cheese}</S.CardContent>
          <S.CardContent>도네 횟수: {item.element.count}</S.CardContent>
        </S.Card>
      ))}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* grid-cols-3 */
    gap: 1rem; /* gap-4 */
    margin-bottom: 3rem; /* mb-12 */
  `,
  Card: styled.div`
    min-width: 7rem;  /* min-w-[7rem] */
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 16px 20px 16px 20px;
    border-radius: 0.5rem; /* rounded-lg */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
    text-align: center;
  `,
  Trophy: styled.div`
    display: flex;
    flex-direction: row;
    ${({theme}) => fontStyle(theme.font.M(18))};
    padding: 6px 0 6px 0;
  `,
  CardTitle: styled.div`
    display: inline;
    ${({theme}) => fontStyle(theme.font.M(16))};
    padding: 6px 0 6px 0;
  `,
  CardContent: styled.div`
    ${({theme}) => fontStyle(theme.font.M(14))};
    color: ${({theme}) => theme.color.mono["600"]};
  `,
}
