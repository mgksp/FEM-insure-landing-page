import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import bgPatternFooterMob from "../images/bg-pattern-footer-mobile.svg";
import bgPatternFooterPc from "../images/bg-pattern-footer-desktop.svg";
import logo from "../images/logo.svg";

export default function Footer() {
  const footerLinks = [
    {
      title: "Our Company",
      links: ["how we work", "why insure?", "check price", "reviews"],
    },
    {
      title: "Help Me",
      links: ["FAQ", "terms of use", "privacy policy", "cookies"],
    },
    {
      title: "Contact",
      links: ["sales", "support", "live chat"],
    },
    {
      title: "Others",
      links: ["career", "press", "licenses"],
    },
  ];

  return (
    <footer className="bg-ltr-gray py-20 px-6 relative z-0 md:py-16">
      <img
        className="absolute top-0 left-0 -z-10 md:hidden"
        src={bgPatternFooterMob}
        alt=""
      />
      <img
        className="hidden md:block absolute top-0 left-0 -z-10"
        src={bgPatternFooterPc}
        alt=""
      />

      <div className="flex flex-col gap-8 items-center pb-10 border-b-[1px] border-gray-400 mb-10 max-w-6xl mx-auto md:flex-row md:justify-between">
        <img src={logo} alt="logo" />
        <div className="flex gap-4 text-gray-500">
          <FaFacebookSquare
            size={24}
            className="hover:text-dk-violet transition-colors duration-200 cursor-pointer ease-in-out"
          />
          <FaTwitter
            size={24}
            className="hover:text-dk-violet transition-colors duration-200 cursor-pointer ease-in-out"
          />
          <FaPinterest
            size={24}
            className="hover:text-dk-violet transition-colors duration-200 cursor-pointer ease-in-out"
          />
          <FaInstagram
            size={24}
            className="hover:text-dk-violet transition-colors duration-200 cursor-pointer ease-in-out"
          />
        </div>
      </div>
      <div className="grid gap-10 md:grid-cols-4 max-w-6xl mx-auto">
        {footerLinks.map((item) => (
          <Links key={item.title} title={item.title} links={item.links} />
        ))}
      </div>
      <Attribution />
    </footer>
  );
}

const Links = ({ title, links }) => {
  return (
    <div className="text-center uppercase font-bold tracking-widest text-[0.8125rem] md:text-left">
      <h3 className="text-gray-500 mb-10">{title}</h3>
      <ul className="text-dk-violet font-bold">
        {links.map((link) => (
          <li key={link} className="mb-5">
            <a className="hover:underline" href="/">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Attribution = () => {
  return (
    <div className="text-xs text-center w-full text-dk-violet py-1 absolute -bottom-7 left-0">
      Challenge by&nbsp;
      <a
        className="text-grayish-blue text-sm font-bold"
        href="https://www.frontendmentor.io?ref=challenge"
        rel="noreferrer"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by&nbsp;
      <a
        className="text-grayish-blue text-sm font-bold"
        href="https://www.github.com/mgksp"
        rel="noreferrer"
        target="_blank"
      >
        Prabu
      </a>
      .
    </div>
  );
};
