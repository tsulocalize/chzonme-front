import {useEffect, useState} from "react"
import {_CriteriaSelector} from "@/component/videoRanking/_CriteriaSelector.tsx";
import Swal from "sweetalert2";
import {getRanking} from "@/api/server/video.ts";
import {_TopThree} from "@/component/videoRanking/_TopThree.tsx";
import {_RankingTable} from "@/component/videoRanking/_RankingTable.tsx";
import styled from "styled-components";
import {Title} from "@/component/_common/Title.tsx";
import {theme} from "@/common/styles.ts";

export interface Ranking {
  rank: number;
  element: {
    videoName: string;
    videoId: string;
    cheese: number;
    count: number;
  }
}

export const VideoRankingItems = () => {
  const [criteria, setCriteria] = useState("COMBINED");
  const [ranking, setRanking] = useState<Ranking[]>([]);
  const [now, setNow] = useState("");

  const criteriaChanger = async (newCriteria: string) => {
    try {
      setCriteria(newCriteria);
      const rankData = await getRanking(newCriteria);
      setRanking(rankData.ranking);
      setNow(formatDate(rankData.now));
    } catch (error) {
      await Swal.fire({title: "서버 에러가 발생했습니다.", icon: "error"});
      console.error(error);
    }
  }

  useEffect(() => {
    criteriaChanger("COMBINED"); // Run the function with the fixed value
  }, []);

  return (
    <S.Wrapper>
      <Title mainText={"영도 랭킹"} mainFont={theme.font.B(34)}
             subText={`측정 시각 : ${now}\n(일주일 간 기록된 데이터를 기반으로 합니다)`} subFont={theme.font.M(16)}
             gap={8}
      />
      <_CriteriaSelector
        criteria={criteria}
        setCriteria={criteriaChanger}
      />
      <_TopThree data={ranking} />
      <_RankingTable data={ranking}/>
    </S.Wrapper>
  )
}

// Function to format the date
function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are 0-based, so add 1
  const day = date.getDate();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `${year}년 ${month}월 ${day}일, ${hours}:${minutes}:${seconds}`;
}

const S = {
  Wrapper: styled.div`
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 2rem;  /* py-8 */
    padding-bottom: 2rem;
    padding-left: 1rem; /* px-4 */
    padding-right: 1rem;
  `,
  Heading: styled.div`
    font-size: 1.875rem; /* text-3xl */
    font-weight: bold;
    margin-bottom: 0.75rem; /* mb-3 */
  `
}

