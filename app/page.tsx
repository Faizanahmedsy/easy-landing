import HeroCentered from "@/components/modules/hero/hero-centered";
import HeroSide from "@/components/modules/hero/hero-side";
import { HERO } from "@/constants/data";

export default function Home() {
  return (
    <>
      {/* ----------------- HERO SECTIONS -------------------------------------------- */}
      {/* <HeroCentered mainTxt={HERO.mainTxt} subTxt={HERO.subTxt} /> */}

      {/* fooo */}

      <HeroSide
        mainTxt={HERO.mainTxt}
        subTxt={HERO.subTxt}
        image="https://via.placeholder.com/500"
      />
    </>
  );
}
