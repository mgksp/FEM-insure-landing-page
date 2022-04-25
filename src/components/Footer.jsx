import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import bgPatternFooterMob from "../images/bg-pattern-footer-mobile.svg";
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
    <footer className="bg-ltr-gray py-20 px-6 relative z-0">
      <img
        className="absolute top-0 left-0 -z-10"
        src={bgPatternFooterMob}
        alt=""
      />
      <div className="flex flex-col gap-8 items-center pb-10 border-b-[1px] border-gray-400 mb-10">
        <img src={logo} alt="logo" />
        <div className="flex gap-4 text-gray-500">
          <FaFacebookSquare size={24} />
          <FaTwitter size={24} />
          <FaPinterest size={24} />
          <FaInstagram size={24} />
        </div>
      </div>
      <div className="grid gap-10">
        {footerLinks.map((item) => (
          <Links title={item.title} links={item.links} />
        ))}
      </div>
      <Attribution />
    </footer>
  );
}

const Links = ({ title, links }) => {
  return (
    <div className="text-center uppercase font-bold tracking-widest text-xs">
      <h4 className="text-gray-500 mb-10">{title}</h4>
      <ul className="text-dkr-violet">
        {links.map((link) => (
          <li className="mb-5">
            <a href="/">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Attribution = () => {
  return (
    <div class="text-xs text-center w-full text-dk-violet py-1 absolute -bottom-7 left-0">
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
