import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../images/logo.svg";
import bgPatternNav from "../images/bg-pattern-mobile-nav.svg";

function Navbar() {
  const [mobNavShow, setMobNavShow] = useState(false);
  return (
    <header className="relative z-50 bg-white">
      <div className="flex items-center justify-between px-6 max-w-6xl mx-auto h-[12vh] md:h-fit md:py-5">
        <img className="w-28" src={logo} alt="logo" />
        <button
          className="md:hidden border-2 border-dkr-violet p-1"
          onClick={() => setMobNavShow(!mobNavShow)}
        >
          <AiOutlineMenu size={20} />
        </button>
        <nav
          aria-label="mobile nav"
          className={
            mobNavShow
              ? "md:hidden uppercase absolute top-[12vh] left-0 z-50 h-[88vh] scale-y-100 origin-top bg-dkr-violet text-white w-full transition-transform duration-200 ease-in-out"
              : "absolute top-[12vh] left-0 scale-y-0 transition-transform origin-top duration-200 ease-in-out bg-dkr-violet w-full"
          }
        >
          <ul className="flex flex-col gap-8 mt-16 uppercase text-center text-2xl">
            <li>
              <a href="/">How we work</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Account</a>
            </li>
            <li>
              <button className="btn">view plans</button>
            </li>
          </ul>
          <img
            className="absolute bottom-0 right-0"
            src={bgPatternNav}
            alt=""
          />
        </nav>

        <nav
          aria-label="desktop nav"
          className="hidden md:block tracking-widest"
        >
          <ul className="flex items-center font-bold gap-7 uppercase text-gray-500 text-[0.8125rem]">
            <li>
              <a className="cursor-pointer hover:text-dkr-violet" href="/">
                How we work
              </a>
            </li>
            <li>
              <a className="cursor-pointer hover:text-dkr-violet" href="/">
                Blog
              </a>
            </li>
            <li>
              <a className="cursor-pointer hover:text-dkr-violet" href="/">
                Account
              </a>
            </li>
            <li>
              <button className="btn-nav">view plans</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
