import { Header } from "./components/header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div className="pt-[4rem] md:pt-[rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default App;
