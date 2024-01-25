import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef, useState } from "react";

const data = [
  {
    imageSrc: "/src/assets/images/products/serum1.png",
    title: "Lucent Facial Concentrate",
    description: "A vitamin-C rich layering Serum",
  },
  {
    imageSrc: "/src/assets/images/products/serum5.avif",
    title: "B triple C Facial Balancing Gel",
    description: "Embracing, vitamin-rich hydration",
  },
  {
    imageSrc: "/src/assets/images/products/serum3.png",
    title: "Exalted Eye Serum",
    description: "Lightweight, vitamin-rich serum",
  },
  {
    imageSrc: "/src/assets/images/products/serum4.png",
    title: "Sublime Replenishing Night Masque",
    description: "Richly nourishing hydration for overnight use",
  },
  {
    imageSrc: "/src/assets/images/products/serum5.avif",
    title: "Damascan Rose Facial Treatment",
    description: "A blend of vitamin-rich botanical extracts",
  },
];

const CustomDot = ({ onClick, index, active }) => (
  <button
    className={`custom-dot ${active ? "active" : ""}`}
    onClick={() => onClick && onClick(index)}
  >
    {index + 1}
  </button>
);

const ProductSlider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div
      className="w-full h-auto pt-[150px] bg-[#fffef2] relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Slider {...settings} ref={(slider) => (sliderRef.current = slider)}>
        {data.map((product, idx) => (
          <a href="#" key={idx}>
            <div className="slider-item flex flex-col relative items-center justify-between h-full text-center p-4">
              <img
                src={product.imageSrc}
                alt={`Product ${idx + 1}`}
                className="w-full h-auto rounded-lg mb-4"
              />
              <div>
                <h3 className="text-[14px] my-2 font-[700]">{product.title}</h3>
                <p className="text-[14px] my-2 font-[400]">
                  {product.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
