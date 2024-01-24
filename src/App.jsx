import "./App.css";
import "./index.css";
import "./lul.css";
import Footer from "./Components/Footer";
import First from "./Components/first-3-tag/First";
import Second from "./Components/first-3-tag/Second";
import Third from "./Components/first-3-tag/third";
import Upfooter from "./Components/Upfooter";
import Upfootertwo from "./Upfootertwo";
import StaticCard from "./Components/StaticCards/StaticCard";
import StaticCardtwo from "./Components/StaticCards/StaticCard2";

function App() {
  return (
    <>
      <First />
      <Second />
      <Third />
      <StaticCardtwo />
      <StaticCard />
      <Upfootertwo />
      <Upfooter />
      <Footer />
    </>
  );
}

export default App;
