import {useIsMobile} from "@/hook/useIsMobile.ts";
import {ChattingPage} from "@/page/chatting/ChattingPage.tsx";
import {Header} from "@/component/_common/Header.tsx";
import {Footer} from "@/component/_common/Footer.tsx";
import {HeaderMobile} from "@/component/_common/mobile/HeaderMobile.tsx";
import {FooterMobile} from "@/component/_common/mobile/FooterMobile.tsx";
import {MobileWrapper} from "@/component/_common/mobile/MobileWrapper.tsx";
import {ChattingMobilePage} from "@/page/chatting/ChattingMobilePage.tsx";

export const ChattingIndex = () => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <MobileWrapper>
      <HeaderMobile />
      <ChattingMobilePage />
      <FooterMobile />
    </MobileWrapper>
    ) :
    <>
      <Header/>
      <ChattingPage />
      <Footer />
    </>
}