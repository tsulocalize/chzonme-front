import {useIsMobile} from "@/hook/useIsMobile.ts";
import {Header} from "@/component/_common/Header.tsx";
import {Footer} from "@/component/_common/Footer.tsx";
import {HeaderMobile} from "@/component/_common/mobile/HeaderMobile.tsx";
import {MobileWrapper} from "@/component/_common/mobile/MobileWrapper.tsx";
import {FooterMobile} from "@/component/_common/mobile/FooterMobile.tsx";
import {MyPage} from "@/page/my/MyPage.tsx";
import {MyMobilePage} from "@/page/my/MyMobilePage.tsx";

export const MyIndex = () => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <MobileWrapper>
      <HeaderMobile />
      <MyMobilePage />
      <FooterMobile />
    </MobileWrapper>
  ) : (
    <>
      <Header />
      <MyPage />
      <Footer />
    </>
  )
}
