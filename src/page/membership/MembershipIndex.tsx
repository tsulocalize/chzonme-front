import {useIsMobile} from "@/hook/useIsMobile.ts";
import {Header} from "@/component/_common/Header.tsx";
import {Footer} from "@/component/_common/Footer.tsx";
import {HeaderMobile} from "@/component/_common/mobile/HeaderMobile.tsx";
import {MobileWrapper} from "@/component/_common/mobile/MobileWrapper.tsx";
import {FooterMobile} from "@/component/_common/mobile/FooterMobile.tsx";
import {MembershipPage} from "@/page/membership/MembershipPage.tsx";
import {MembershipMobilePage} from "@/page/membership/MembershipMobilePage.tsx";

export const MembershipIndex = () => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <MobileWrapper>
      <HeaderMobile />
      <MembershipMobilePage />
      <FooterMobile floor/>
    </MobileWrapper>
  ) : (
    <>
      <Header />
      <MembershipPage />
      <Footer floor/>
    </>
  )
}
