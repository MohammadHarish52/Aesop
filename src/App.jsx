import "./App.css";
import "./index.css";
import Footer from "./Components/Footer";
import First from "./Components/first-3-tag/First";
import Second from "./Components/first-3-tag/Second";
import Upfooter from "./Components/Upfooter";
import Upfootertwo from "./Upfootertwo";
import StaticCardtwo from "./Components/StaticCards/StaticCard2";
import Bottles from "./Components/StaticCards/Bottles";
import MainSlider from "./Components/Mainslider/MainSlider";
import Fragnance from "./Components/StaticCards/Fragnance";
import ProductSlider from "./Components/PoductSlider/ProductSlider";
import { data, datatwo } from "./Components/PoductSlider/constant";
import RightImage from "./Components/StaticCards/RightImage";
import Nav from "./Components/first-3-tag/Topbar";

function App() {
  return (
    <>
      <First />
      <Second />
      <Nav />
      <MainSlider />
      <ProductSlider data={data} />
      <RightImage
        image={"/assets/images/Ant.jpg"}
        title={"The Athenaeum"}
        subheading={"A guide to caring for dry skin"}
        description={
          " Exploring the causes behind parched skin and formulations to restore hydration."
        }
        btntext={" Read More"}
      />
      <Fragnance />
      <Bottles />
      <RightImage
        image={"/assets/images/lemonlelo.avif"}
        title={""}
        subheading={"Efficacious pairings"}
        description={
          "Our consultants have long combined complementary formulations to effect additional benefits for the skin. Incorporate this time-honoured practice into your regimen with our recommended bundles"
        }
        btntext={"Browse Skin Care Bundles"}
      />
      <ProductSlider data={datatwo} />
      <StaticCardtwo />
      <RightImage
        image={"/assets/images/static.avif"}
        title={"Facial Appointments"}
        subheading={"A guide to caring for dry skin"}
        description={
          "Exploring the causes behind parched skin and formulations to restore hydration."
        }
        btntext={"Learn More"}
      />
      <Upfootertwo />
      <Upfooter />
      <Footer />
    </>
  );
}

export default App;
