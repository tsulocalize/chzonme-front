import {useIsMobile} from "@/hook/useIsMobile.ts";
import {Header} from "@/component/_common/Header.tsx";
import {LandingPage} from "@/page/landing/LandingPage.tsx";
import {Footer} from "@/component/_common/Footer.tsx";
import {LandingMobilePage} from "@/page/landing/LandingMobilePage.tsx";
import {HeaderMobile} from "@/component/_common/mobile/HeaderMobile.tsx";
import {MobileWrapper} from "@/component/_common/mobile/MobileWrapper.tsx";
import {FooterMobile} from "@/component/_common/mobile/FooterMobile.tsx";

export const LandingIndex = () => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <MobileWrapper>
      <HeaderMobile />
      <LandingMobilePage />
      <FooterMobile floor/>
    </MobileWrapper>
  ) : (
    <>
      <Header />
      <LandingPage />
      <Footer floor/>
    </>
  )
}
