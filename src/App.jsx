import { Header } from "./components/header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div className="pt-[7.5rem] md:pt-[9rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default App;
