import styled from "styled-components";
import {_Item} from "@/component/landing/_Item.tsx";
import {_CardContent} from "@/component/landing/_CardContent.tsx";
import {_HorizontalContent} from "@/component/landing/_HorizontalContent.tsx";
import {_LiContent} from "@/component/landing/_LiContent.tsx";

export const LandingItems = () => {
  return (
    <S.Wrapper>
      <_Item mainText={"치즈온미의 다양한 기능"}
             subText={"방송에 도움을 주는 여러 기능을 만나보세요!"}
             contents={[
               <_CardContent
                 mainText={"영상 도네이션 목록"}
                 subText={"어떤 영상 도네이션이 왔는지 한눈에 확인하세요\nYoutube 영상은 재생 가능합니다! (일부 영상에 한정)"}/>,
               <_CardContent
                 mainText={"도네이션 룰렛"}
                 subText={"이제 손으로 일일히 타이핑하지 마세요\n자동으로 작성된 룰렛판을 돌려돌려~"}/>,
               <_CardContent
                 mainText={"채팅 그래프"}
                 subText={"재미있는 순간 포착!\n오늘 방송 중 ‘ㅋㅋㅋ'는 언제 많이 올라왔을까요?"}/>,
             ]} />
      <_Item mainText={"멤버십만의 추가 혜택"} subText={"일반 기능보다 좋은 것은 멤버십 기능"}
             contents={[
               <_HorizontalContent propsList={[
                 {title: "Basic", content: "과거 영상 도네이션 목록 확인, 항상 연결하기 채널 1개"},
                 {title: "Pro", content: "Basic 기능 전체 + 채팅 그래프 기록, 항상 연결하기 채널 추가 1개"}
               ]} />
             ]} />
      <_Item mainText={"안내사항"} subText={"치즈온미는 아래와 같은 정책으로 운영됩니다."} gap={0}
             contents={[
               <_LiContent texts={[
                 "‘치지직’은 네이버(주)에서 운영하는 방송 플랫폼이며, 치즈온미는 ‘치지직’과 관련하여 어떠한 공식적인 제휴, 상표권, 또는 법적 이해관계를 가지고 있지 않습니다.",
                 "치즈온미는 ‘치지직’ 웹 애플리케이션에서 일반 사용자에게 공개된 범위 내의 데이터만을 수집 및 가공합니다.",
                 "데이터 수집 과정에서 일부 오류가 발생할 수 있습니다.",
                 "치즈온미는 ‘치지직’ 계정으로 간편 회원가입 기능을 제공하며, 이 과정에서 서비스 제공에 필수적인 최소한의 개인정보만을 수집·보관합니다.",
                 "영상 도네이션 기능에서는 일부 YouTube 영상만 조회가 가능하며, 영상 제목 중복 등의 이유로 의도한 영상과 다른 콘텐츠가 표시될 수 있습니다.",
                 "채팅 그래프는 본인 소유의 채널이거나, 채널 운영자로부터 명시적인 허가를 받은 경우에만 조회할 수 있습니다.",
               ]} />
             ]} />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 200px;
  `
}