import heroImgMob from "../images/image-intro-mobile.jpg";
import heroImgPc from "../images/image-intro-desktop.jpg";
import bgIntroMobLeft from "../images/bg-pattern-intro-left-mobile.svg";
import bgIntroMobRight from "../images/bg-pattern-intro-right-mobile.svg";
import bgIntroPcLeft from "../images/bg-pattern-intro-left-desktop.svg";
import bgIntroPcRight from "../images/bg-pattern-intro-right-desktop.svg";

function Hero() {
  return (
    <main className="bg-dk-violet text-white z-0">
      <div className="md:grid grid-cols-2 gap-3 max-w-6xl mx-auto md:px-6">
        <img className="mx-auto md:hidden" src={heroImgMob} alt="" />
        <div className="w-full relative">
          <img
            className="hidden md:block col-start-2 mt-24 absolute right-0"
            src={heroImgPc}
            alt=""
          />
        </div>

        <div className="px-6 py-28 relative md:static z-20 row-start-1 text-center md:text-left md:px-0">
          <div className="hidden md:block w-36 border-t-[1px] border-[#B5A4B6] mb-16"></div>

          <h1 className="font-dm-display mb-7 text-5xl tracking-[-0.5px] font-normal max-w-[90%] md:tracking-[-1px] md:text-7xl md:leading-[64px]">
            Humanizing your insurance.
          </h1>
          <p className="mt-4 mb-8 md:leading-[26.5px] md:tracking-normal">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that&apos;s right
            for you. Ensure you and your loved ones are protected.
          </p>
          <button className="btn">view plans</button>

          <img
            className="absolute left-0 top-0 -z-50 md:hidden"
            src={bgIntroMobLeft}
            alt=""
          />
          <img
            className="absolute right-0 top-2/3 -z-50 md:hidden"
            src={bgIntroMobRight}
            alt=""
          />
        </div>
      </div>
      <img
        className="hidden md:block absolute left-0 bottom-0 z-20"
        src={bgIntroPcLeft}
        alt=""
      />
      <img
        className="hidden md:block absolute right-0 top-0 z-20"
        src={bgIntroPcRight}
        alt=""
      />
    </main>
  );
}

export default Hero;
