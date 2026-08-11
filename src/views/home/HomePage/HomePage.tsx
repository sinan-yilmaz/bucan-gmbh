import AblaufSection from "./AblaufSection";
import FeinkostSection from "./FeinkostSection";
import FuerWenSection from "./FuerWenSection";
import GalerieSection from "./GalerieSection";
import HeroSection from "./HeroSection";
import KontaktSection from "./KontaktSection";
import LeistungenSection from "./LeistungenSection";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import UeberUnsSection from "./UeberUnsSection";
import WaveDivider from "./WaveDivider";
import WerteSection from "./WerteSection";
import ZitatSection from "./ZitatSection";

function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="inhalt" tabIndex={-1}>
        <HeroSection />
        <WerteSection />
        <LeistungenSection />
        <UeberUnsSection />
        <FuerWenSection />
        <GalerieSection />
        <ZitatSection />
        <FeinkostSection />
        <WaveDivider
          bg="#ECEEE0"
          height={56}
          d="M0,56 L0,30 C240,8 500,10 770,24 C1030,38 1250,36 1440,22 L1440,56 Z"
          line="M0,30 C240,8 500,10 770,24 C1030,38 1250,36 1440,22"
          fill="#F7F3EA"
        />
        <AblaufSection />
        <KontaktSection />
      </main>
      <WaveDivider
        bg="#F7F3EA"
        d="M0,64 L0,34 C260,10 520,12 780,28 C1040,44 1240,42 1440,26 L1440,64 Z"
        line="M0,34 C260,10 520,12 780,28 C1040,44 1240,42 1440,26"
        fill="#0E2318"
      />
      <SiteFooter />
    </>
  );
}

export default HomePage;
