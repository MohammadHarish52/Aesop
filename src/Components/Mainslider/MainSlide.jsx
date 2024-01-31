import { useState, useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import { FaChevronLeft, FaPause, FaPlay, FaChevronRight } from "react-icons/fa";
import "/src/App.css";
import FirstSlider from "../FirstSlider/FirstSlider";

const slidesData = [
  {
    id: 1,
    component: <FirstSlider />,
  },
  {
    id: 2,
    imageSrc: "/assets/images/top2.avif",
    title: "A festive gesture",
    subheading: "Joyous gift preparation",
    description:
      "To celebrate the festive season, all gift orders will be wrapped in a decorative sleeve—perfect for sending directly to recipients. Gift wrapping is available to add to your order at checkout.",
    btnText: "Browse Gift Guide",
  },
  {
    id: 3,
    imageSrc: "/assets/images/top3.avif",
    title: "A featherlight hydrating serum",
    subheading: "Joyous gift preparation",
    description:
      "Explore the skin-supportive benefits of this lightweight daily hydrator, replete with vitamins and botanicals",
    btnText: "Discover more",
  },
];

const MainSlide = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval;

    if (isPlaying) {
      interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
      }, 4500);
    }

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePrev = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const currentSlide = slidesData[index];

  return (
    <div className="parent w-full  bg-[#fffef2] overflow-hidden">
      <div className="  md:static relative overflow-hidden transition-transform duration-800">
        {currentSlide.component ? (
          <>{currentSlide.component}</>
        ) : (
          <>
            <div className="flex flex-col-reverse   md:static relative md:flex-row overflow-hidden transition-transform duration-800">
              <div className="details flex justify-around  md:left-[50%]  w-[100%] md:w-[50%] p-8 bg-[#f7f5e9]">
                <div className="text-2xl hidden  lg:block lg:text-4xl p-4 md:p-8 lg:p-12">
                  Aēsop
                </div>
                <div className="dit p-4 lg:p-12">
                  <header className="header">
                    <h2 className="text-[14px] mb-[15px]">
                      {currentSlide.title}
                    </h2>
                    <h1 className="text-[26px] mb-[15px]">
                      {currentSlide.subheading}
                    </h1>
                  </header>
                  <p className="text-[16px] mb-[30px] leading-[1.7]">
                    {currentSlide.description}
                  </p>
                  <a className="learn-more flex justify-between items-center">
                    <button className="btn btn-primary b-none outline-none flex ">
                      <p className="flex-1">{currentSlide.btnText}</p>
                    </button>
                    <GoArrowRight size={20} color="" />
                  </a>
                </div>
              </div>
              <div className="static-one-img  pr-0 w-[100%] md:w-[50%]">
                <img
                  src={currentSlide.imageSrc}
                  alt=""
                  className="w-full h-[634px] object-cover "
                />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="button  flex justify-center items-center">
        <FaChevronLeft onClick={handlePrev} className="text-[#666666] m-2" />
        {`${index + 1}/ ${slidesData.length}`}
        <FaChevronRight onClick={handleNext} className="text-[#666666] m-2" />
        {isPlaying ? (
          <FaPause onClick={handlePlayPause} className="text-[#666666] m-2" />
        ) : (
          <FaPlay onClick={handlePlayPause} className="text-[#666666] m-2" />
        )}
      </div>
    </div>
  );
};

export default MainSlide;
