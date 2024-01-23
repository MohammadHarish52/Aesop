import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { aesopCard } from "./constant";

// Define AesopCard and AesopCardList components as before...

export const aesopCar = [
  {
    title: " Potent and peerless",
    heading: " B Triple C Facial Balancing Gel",
    description:
      "Rich in Vitamins B and C, this lightly hydrating gel with a honey-like texture, replenishes, softens and balances the skin.",
    btndesc: " Discover Formulations",
    imageSrc: "/src/assests/images/Aesop1.avif",
  },
  {
    title: "A festive gesture",
    heading: "Joyous gift preparation",
    description:
      "To celebrate the festive season, all gift orders will be wrapped in a decorative sleeve—perfect for sending directly to recipients. Gift wrapping is available to add to your order at checkout.",
    btndesc: "Browse the Gift guide",
    imageSrc: "/src/assests/images/Aesop2.avif",
  },
  {
    title: "A featherlight hydrating serum",
    heading: "Lucent Facial Concentrate",
    description:
      "Explore the skin-supportive benefits of this lightweight daily hydrator, replete with vitamins and botanicals.",
    btndesc: "Discover More",
    imageSrc: "/src/assests/images/Aesop3.avif",
  },
];

const AesopCard = ({ title, heading, description, btndesc, imageSrc }) => (
  <div className="aesop-card">
    <img src={imageSrc} alt={heading} />
    <div className="card-content">
      <h2>{title}</h2>
      <h3>{heading}</h3>
      <p>{description}</p>
      <button>{btndesc}</button>
    </div>
  </div>
);

const AesopCardList = ({ cards }) => (
  <div className="aesop-card-list">
    {cards.map((card, index) => (
      <AesopCard key={index} {...card} />
    ))}
  </div>
);

const SlideCard = ({ cards }) => (
  <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log("slide change")}
  >
    {cards.map((card, index) => (
      <SwiperSlide key={index}>
        <AesopCard {...card} />
      </SwiperSlide>
    ))}
  </Swiper>
);

const YourComponent = () => {
  return (
    <>
      <AesopCardList cards={aesopCard} />
      <SlideCard cards={aesopCard} />
    </>
  );
};

export default YourComponent;
