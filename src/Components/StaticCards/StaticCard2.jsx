import { GoArrowRight } from "react-icons/go";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};

const slideImages = [
  {
    src: "/assets/images/beautyone.jpg",
  },
  {
    src: "/assets/images/beautytwo.webp",
  },
  {
    src: "/assets/images/beautythree.avif",
  },
];

const StaticCardtwo = () => {
  return (
    <section className="stats_Section">
      <div className="staticone pl-[80px] ">
        <div className="static-one pb-[36px] ">
          <header className="header">
            <h1 className="text-[30px]">Store Locator</h1>
          </header>
          <p className="text-[16px]">
            Our consultants are available to host you in-store and provide
            tailored guidance on gift purchases.
          </p>
          <a className="learn-more flex justify-between items-center">
            <button className="btn btn-primary b-none outline-none ">
              Find a nearby store
            </button>
            <GoArrowRight size={20} color="" />
          </a>
        </div>
        <div className="static-one-img pr-0.5">
          <Slide>
            {slideImages.map((image) => (
              <img
                src={image.src}
                key={image.src}
                className="h-auto w-full"
                alt=""
              />
            ))}
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default StaticCardtwo;
