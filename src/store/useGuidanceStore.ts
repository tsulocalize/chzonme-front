import {create} from "zustand/react";
import type {Step} from "react-joyride";
import {GuideContent} from "@/guidance/GuideContent.tsx";

export interface GuidanceState {
  currentPath: string;
  setPath: (path: string) => void;
  steps: Step[];
  setSteps: (steps: Step[]) => void;
  watched: boolean;
  setWatched: (watched: boolean) => void;
  initialize: (path: string) => void;
}

export const useGuidanceStore = create<GuidanceState>((set, get) => ({
  currentPath: "/",
  setPath: (path: string) => set({currentPath: path}),
  steps: [],
  setSteps: (steps: Step[]) => set({steps: steps}),
  watched: false,
  setWatched: (watched: boolean) => {
    localStorage.setItem("guide" + get().currentPath, String(watched));
    set({watched: watched});
  },
  initialize: (path: string) => {
    set({currentPath: path,
      steps: routeDataMap[path] ?? [],
      watched: localStorage.getItem("guide" + path) === "true"});
  }
}));

const routeDataMap: Record<string, Step[]> = {
  "/": [],
  "/video": [
    {target: '#step-channelSearch', content: GuideContent({content: '영상 도네이션 목록을 보고 싶은 스트리머를 검색하세요!'})},
    {target: '#step-1', content: GuideContent({content: '어떤 영상인지 다시보고 싶다면 여기서 재생할 수 있어요\n(*일부 유튜브 영상 한정)'})},
    {target: '#step-2', content: GuideContent({content: '일반 / 형광팬 영도 목록은 별도로 분리됩니다'})},
    {target: '#step-3', content: GuideContent({content: '이전 도네이션 기록도 찾아 볼 수 있어요\n(*일주일 이내, 멤버 한정)'})},
  ],
  "/roulette": [
    {target: '#step-1', content: GuideContent({content: '<> 안에 내용을 적어 도네이션 해주세요!\n(예시: <짜장면> 1000치즈 = 짜장면 1표 추가)'})},
    {target: '#step-2', content: GuideContent({content: '1표당 금액을 수정할 수 있습니다'})},
    {target: '#step-3', content: GuideContent({content: '이전 기록을 지우고 새 룰렛을 만들 수 있습니다'})},
    {target: '#step-4', content: GuideContent({content: '투표를 시작해야 집계가 시작됩니다.\n반대로 중단하면 더이상 집계되지 않습니다'})},
    {target: '#step-5', content: GuideContent({content: '이제 마구마구 돌려볼까요?'})},
  ],
  "/chatting": [
    {target: '#step-1', content: GuideContent({content: '채팅 그래프는 2티어 이상 구독자만 사용할 수 있습니다'})},
    {target: '#step-1', content: GuideContent({content: '하루동안 분당 총 채팅수와 ㅋㅋㅋ 채팅수를 그래프로 확인할 수 있습니다'})},
    {target: '#step-3', content: GuideContent({content: '날짜도 변경할 수 있답니다'})},
  ],
}
