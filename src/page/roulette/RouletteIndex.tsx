import {useIsMobile} from "@/hook/useIsMobile.ts";
import {Header} from "@/component/_common/Header.tsx";
import {Footer} from "@/component/_common/Footer.tsx";
import {HeaderMobile} from "@/component/_common/mobile/HeaderMobile.tsx";
import {MobileWrapper} from "@/component/_common/mobile/MobileWrapper.tsx";
import {FooterMobile} from "@/component/_common/mobile/FooterMobile.tsx";
import {SubHeader} from "@/component/_common/SubHeader.tsx";
import {RoulettePage} from "@/page/roulette/RoulettePage.tsx";
import {RouletteMobilePage} from "@/page/roulette/RouletteMobilePage.tsx";

export const RouletteIndex = () => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <MobileWrapper>
      <HeaderMobile />
      <SubHeader withSearch={false} />
      <RouletteMobilePage />
      <FooterMobile />
    </MobileWrapper>
  ) : (
    <>
      <Header />
      <SubHeader withSearch={false} />
      <RoulettePage />
      <Footer/>
    </>
  )
}
