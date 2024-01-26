import { useState, useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import { FaChevronLeft, FaPause, FaPlay, FaChevronRight } from "react-icons/fa";
import "/src/App.css";

const slidesData = [
  {
    id: 1,
    imageSrc: "/src/assets/images/top1.avif",
    title: "Potent And peerless",
    subheading: "B Triple C Facial Balancing Gel",
    description:
      "Rich in Vitamins B and C, this lightly hydrating gel with a honey-like texture, replenishes, softens and balances the skin.",
    btnText: "Discover Formulation",
  },
  {
    id: 2,
    imageSrc: "/src/assets/images/top2.avif",
    title: "A festive gesture",
    subheading: "Joyous gift preparation",
    description:
      "To celebrate the festive season, all gift orders will be wrapped in a decorative sleeve—perfect for sending directly to recipients. Gift wrapping is available to add to your order at checkout.",
    btnText: "Browse the Gift Guide",
  },
  {
    id: 3,
    imageSrc: "/src/assets/images/top3.avif",
    title: "A featherlight hydrating serum",
    subheading: "Joyous gift preparation",
    description:
      "Explore the skin-supportive benefits of this lightweight daily hydrator, replete with vitamins and botanicals",
    btnText: "Discover more",
  },
];

const MainSlider = () => {
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
    <div className="parent w-full relative  top-0 stats_Section pt-[0] md:pt-[80px] bg-[#fffef2] overflow-hidden">
      <div className="slide   flex flex-col-reverse md:flex-row w-full h-[400px] overflow-hidden transition-transform duration-2000">
        <div className="details absolute md:left-[50%]  w-[100%] md:w-[50%] p-8 bg-[#f7f5e9]">
          <header className="header">
            <h2 className="text-[14px] mb-[15px]">{currentSlide.title}</h2>
            <h1 className="text-[26px] mb-[15px]">{currentSlide.subheading}</h1>
          </header>
          <p className="text-[16px] mb-[30px] leading-[1.7]">
            {currentSlide.description}
          </p>
          <a className="learn-more flex justify-between items-center">
            <button className="btn btn-primary b-none outline-none">
              {currentSlide.btnText}
            </button>
            <GoArrowRight size={20} color="" />
          </a>
        </div>
        <div className="static-one-img absolute   pr-0 w-[100%] md:w-[50%] h-[100%]">
          <img
            src={currentSlide.imageSrc}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="button flex justify-center items-center">
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

export default MainSlider;
