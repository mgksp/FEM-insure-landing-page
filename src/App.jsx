import { Features, Footer, Hero, Navbar } from "./components";

function App() {
  return (
    <div className="text-base font-karla tracking-[0.1px] leading-relaxed">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
