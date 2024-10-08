import HeroInfo from "./HeroInfo";
import HeroLogo from "./HeroLogo";

export default function HeroContent() {
  return (
    <section className="pb-[114px] pt-20 md:mt-[100px]">
      <div className="container lg:px-20">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <HeroLogo />
          <HeroInfo />
        </div>
      </div>
    </section>
  );
}
