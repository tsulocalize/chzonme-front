import {useIsMobile} from "@/hook/useIsMobile.ts";
import {ChattingPage} from "@/page/chatting/ChattingPage.tsx";
import {Header} from "@/component/_common/Header.tsx";
import {SubHeader} from "@/component/_common/SubHeader.tsx";
import {Footer} from "@/component/_common/Footer.tsx";

export const ChattingIndex = () => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <>
      <title>치즈온미 - 채팅 그래프</title>
      <Header/>
      <SubHeader withSearch={false}/>
      <ChattingPage/>
      <Footer/>
    </>
    ) :
    <>
      <title>치즈온미 - 채팅 그래프</title>
      <Header/>
      <SubHeader withSearch={false}/>
      <ChattingPage/>
      <Footer/>
    </>
}