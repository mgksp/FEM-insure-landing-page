import OutlinedButton from "./OutlinedButton";
import snappyImg from "../images/icon-snappy-process.svg";
import peopleImg from "../images/icon-people-first.svg";
import priceImg from "../images/icon-affordable-prices.svg";
import findOutImg from "../images/bg-pattern-how-we-work-mobile.svg";

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
      desc: "We don&apos;t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    },
    {
      img: peopleImg,
      title: "People First",
      desc: "Our plans aren&apos;t full of conditions and clauses to prevent payouts. We make sure you&apos;re covered when you need it.",
    },
  ];

  return (
    <section
      aria-labelledby="features-title"
      className="text-center py-36 px-6"
    >
      <div className="w-1/3 border-t-[1px] border-[#B5A4B6] mb-10 mx-auto"></div>
      <h2
        id="features-title"
        className="text-5xl font-dm-display text-dkr-violet mb-20"
      >
        We're different
      </h2>

      <div className="grid gap-16 mb-36">
        {features.map((feature) => (
          <Feature
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
    <div className="grid place-items-center tracking-[0px]">
      <img className="mb-8" src={img} alt="" />
      <h3 className="mb-7 text-[1.75rem] font-dm-display">{title}</h3>
      <p className="">{desc}</p>
    </div>
  );
};

const FindOutMore = () => {
  return (
    <div className="bg-dk-violet text-white px-6 py-16 grid gap-10 relative z-10">
      <h2 className="font-dm-display text-[2.5rem] leading-10">
        Find out more about how we work
      </h2>
      <OutlinedButton text="How we work" />
      <img className="absolute top-0 right-0 -z-10" src={findOutImg} alt="" />
    </div>
  );
};
