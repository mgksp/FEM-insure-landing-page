import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import OutlinedButton from "./OutlinedButton";
import logo from "../images/logo.svg";
import bgPatternNav from "../images/bg-pattern-mobile-nav.svg";

function Navbar() {
  const [mobNavShow, setMobNavShow] = useState(false);
  return (
    <header className="flex items-center justify-between px-6 h-[12vh] relative">
      <img className="w-28" src={logo} alt="logo" />
      <button
        className="border-2 border-dkr-violet p-1"
        onClick={() => setMobNavShow(!mobNavShow)}
      >
        <AiOutlineMenu size={20} />
      </button>
      <nav
        className={
          mobNavShow
            ? "uppercase absolute top-[12vh] left-0 z-50 h-[88vh] scale-y-100 origin-top bg-dkr-violet text-white w-full transition-transform duration-200 ease-in-out"
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
            <OutlinedButton text={"view plans"} />
          </li>
        </ul>
        <img className="absolute bottom-0 right-0" src={bgPatternNav} alt="" />
      </nav>
    </header>
  );
}

export default Navbar;
