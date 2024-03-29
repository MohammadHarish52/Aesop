import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { GoArrowRight } from "react-icons/go";

const CustomDot = ({ onClick, index, active }) => (
  <button
    className={`custom-dot ${active ? "active" : ""}`}
    onClick={() => onClick && onClick(index)}
  >
    {index + 1}
  </button>
);

const ProductSlider = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [paginationBarPosition, setPaginationBarPosition] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: false,
    afterChange: (currentSlide) => {
      const totalSlides = data.length;
      const percentagePosition = (currentSlide / (totalSlides - 1)) * 100;
      setPaginationBarPosition(percentagePosition);
    },
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 728,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className="w-full h-auto  pt-[0px] md:pt-[150px] bg-[#fffef2] relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Slider
          {...settings}
          ref={(slider) => (sliderRef.current = slider)}
          className="w-full"
        >
          <div className="hidden md:block md:visible invisible">
            <div className="detailing relative flex h-[auto] w-[100%] flex-col text-[0.9375rem] box border border-none px-16">
              <h2 className="text-[14px] mb-[5px] font-semibold ">
                Skin Care+
              </h2>
              <h1 className="text-[30px] mb-[10px] skin font-medium">
                Intensive formulations for complex skin
              </h1>
              <p className="text-[14px] mb-[30px]">
                Explore products formulated with mature skin and urban dwellers
                in mind, to provide daily hydration and the additional benefit
                of potent vitamins and anti-oxidants.
              </p>
              <a href="" className=" flex justify-start items-center">
                Browse Formulations <GoArrowRight className="ml-8" />
              </a>
            </div>
          </div>

          {data.map((product, idx) => (
            <a
              href="#"
              key={idx}
              className="flex h-[100%] w-[100%] justify-center items-center text-center box-border"
            >
              <div className="slider-item flex flex-col items-center justify-start h-[461px] w-[100%] text-center p-4">
                <img
                  src={product.imageSrc}
                  alt={`Product ${idx + 1}`}
                  className="relative max-w-[80%] rounded-lg mt-auto"
                />
                <div className="px-[20px] py-0 w-[84%]">
                  <h3 className="text-[14px] my-2 font-[700] hover:underline">
                    {product.title}
                  </h3>
                  <p className="text-[14px] my-2 font-[400]">
                    {product.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </Slider>
        {isHovered && (
          <div className="slider-nav absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between">
            <AiOutlineLeft
              size={40}
              className="bg-[#323233] text-sm p-6 h-[80px] w-[80px] font-thin text-[#fffef2] cursor-pointer"
              onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
            />
            <AiOutlineRight
              className="h-[80px] text-sm w-[80px] p-6 font-thin text-[#fffef2] bg-[#323233] cursor-pointer"
              size={40}
              onClick={() => sliderRef.current && sliderRef.current.slickNext()}
            />
          </div>
        )}
      </div>
      <div className="pagination_base mt-4 relative">
        <div className="pagination relative flex h-[2px] mx-[34px] mb-[20px] sm:mx-[20px] ">
          <div
            className={`pagination-bar w-[25%] absolute left-[${paginationBarPosition}%] transition`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
