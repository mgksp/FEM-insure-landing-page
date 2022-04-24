import heroImg from "../images/image-intro-mobile.jpg";
import bgIntroMobLeft from "../images/bg-pattern-intro-left-mobile.svg";
import bgIntroMobRight from "../images/bg-pattern-intro-right-mobile.svg";
import OutlinedButton from "./OutlinedButton";

function Hero() {
  return (
    <main className="bg-dk-violet text-white">
      <img src={heroImg} alt="" />
      <div className="px-6 py-24 relative z-10">
        <h1 className="font-dm-display text-center text-5xl tracking-[-0.5px] font-normal">
          Humanizing your insurance.
        </h1>
        <p className="mt-4 text-center mb-8">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that&apos;s right
          for you. Ensure you and your loved ones are protected.
        </p>
        <OutlinedButton text={"View plans"} />
        <img
          className="absolute left-0 top-0 -z-50"
          src={bgIntroMobLeft}
          alt=""
        />
        <img
          className="absolute right-0 top-2/3 -z-50"
          src={bgIntroMobRight}
          alt=""
        />
      </div>
    </main>
  );
}

export default Hero;
