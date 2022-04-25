import snappyImg from "../images/icon-snappy-process.svg";
import peopleImg from "../images/icon-people-first.svg";
import priceImg from "../images/icon-affordable-prices.svg";
import findOutImg from "../images/bg-pattern-how-we-work-mobile.svg";
import findOutImgPc from "../images/bg-pattern-how-we-work-desktop.svg";

export default function Features() {
  const features = [
    {
      img: snappyImg,
      title: "Snappy Process",
      desc: "Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.",
    },
    {
      img: priceImg,
      title: "Affordable Prices",
      desc: "We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    },
    {
      img: peopleImg,
      title: "People First",
      desc: "Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.",
    },
  ];

  return (
    <section
      aria-labelledby="features-title"
      className="text-center py-36 px-6 max-w-6xl mx-auto md:text-left md:pt-80"
    >
      <div className="w-36 border-t-[1px] border-[#B5A4B6] mb-10 mx-auto md:mx-0 md:mb-16"></div>
      <h2
        id="features-title"
        className="text-5xl font-dm-display text-dkr-violet mb-20 md:text-7xl md:mb-24"
      >
        We're different
      </h2>

      <div className="grid gap-7 mb-36 md:grid-cols-3">
        {features.map((feature) => (
          <Feature
            key={feature.title}
            img={feature.img}
            title={feature.title}
            desc={feature.desc}
          />
        ))}
      </div>

      <FindOutMore />
    </section>
  );
}

const Feature = ({ img, title, desc }) => {
  return (
    <div className="grid place-items-center tracking-[0px] md:place-items-start">
      <img className="mb-8 md:mb-10" src={img} alt="" />
      <h3 className="mb-7 text-[1.75rem] font-dm-display md:mb-5">{title}</h3>
      <p className="text-gray-500">{desc}</p>
    </div>
  );
};

const FindOutMore = () => {
  return (
    <div className="bg-dk-violet text-white px-6 py-16 flex flex-col gap-10 relative z-10 md:px-20 md:py-20 md:flex-row md:overflow-hidden justify-between items-center">
      <h2 className="font-dm-display text-[2.5rem] leading-10 max-w-[18ch]">
        Find out more about how we work
      </h2>
      <button className="btn">how we work</button>
      <img
        className="absolute top-0 right-0 -z-10 md:hidden"
        src={findOutImg}
        alt=""
      />
      <img
        className="hidden md:block absolute top-0 right-0 -z-10"
        src={findOutImgPc}
        alt=""
      />
    </div>
  );
};
