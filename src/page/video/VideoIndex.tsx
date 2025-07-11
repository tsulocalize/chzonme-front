import {useIsMobile} from "@/hook/useIsMobile.ts";
import {Header} from "@/component/_common/Header.tsx";
import {Footer} from "@/component/_common/Footer.tsx";
import {HeaderMobile} from "@/component/_common/mobile/HeaderMobile.tsx";
import {MobileWrapper} from "@/component/_common/mobile/MobileWrapper.tsx";
import {FooterMobile} from "@/component/_common/mobile/FooterMobile.tsx";
import {SubHeader} from "@/component/_common/SubHeader.tsx";
import {VideoPage} from "@/page/video/VideoPage.tsx";
import {VideoMobilePage} from "@/page/video/VideoMobilePage.tsx";

export const VideoIndex = () => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <MobileWrapper>
      <HeaderMobile />
      <SubHeader />
      <VideoMobilePage />
      <FooterMobile/>
    </MobileWrapper>
  ) : (
    <>
      <Header />
      <SubHeader />
      <VideoPage />
      <Footer />
    </>
  )
}
