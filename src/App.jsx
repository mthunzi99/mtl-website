import { Header } from "./components/header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div className="pt-[4.5rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default App;
