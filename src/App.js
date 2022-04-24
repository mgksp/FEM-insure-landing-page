import { Features, Hero, Navbar } from "./components";

function App() {
  return (
    <div className="text-base font-karla tracking-[0.1px] leading-relaxed">
      <Navbar />
      <Hero />
      <Features />

      <div class="text-xs text-center w-full text-dk-violet">
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
    </div>
  );
}

export default App;
