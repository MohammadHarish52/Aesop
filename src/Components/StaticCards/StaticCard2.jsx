import { useState } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (previous, next) => {
    setCurrentIndex(next);
  };
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
          <a className="learn-more w-[100%] flex justify-between items-center">
            <button className="btn btn-primary b-none outline-none font-[600]">
              Find a nearby store
            </button>
            <GoArrowRight size={20} color="" />
          </a>
        </div>
        <div className="static-one-img pr-0.5">
          <Slide onChange={handleSlideChange} arrows={true}>
            {slideImages.map((image, index) => (
              <>
                <img
                  src={image.src}
                  key={image.src}
                  className="h-auto w-full mb-8"
                  alt=""
                />
                <div className="pagination_base relative mb-4">
                  <div className="pagination relative flex h-[2px] mx-[34px] mb-[20px] sm:mx-[20px] ">
                    {slideImages.map((_, index) => (
                      <div
                        key={index}
                        className={`pagination-bar w-[25%] ${
                          currentIndex === index ? "active" : ""
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default StaticCardtwo;
