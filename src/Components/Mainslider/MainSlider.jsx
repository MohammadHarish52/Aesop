// import { useState } from "react";
// import { GoArrowRight } from "react-icons/go";
// import { FaChevronLeft, FaPause } from "react-icons/fa6";
// import { FaAngleRight } from "react-icons/fa6";
// import { FaPlay } from "react-icons/fa";

// const MainSlider = () => {
//   const [index, setIndex] = useState(1);

//   const play = () => {
//     setTimeout(
//       setIndex((e) => {
//         if (e >= 1 && e < 3) {
//           e = e + 1;
//         } else if (e === 3) e = 1;
//       })
//     ),
//       2000;
//   };

//   const pause = () => {
//     clearTimeout(play);
//   };
//   const [plaay, setPlaay] = useState(play);
//   return (
//     <div className="parent w-auto h-auto absolute stats_Section">
//       <div>
//         <div className={`${index === 1 ? "visible" : "non-visible"}`}>
//           <div className="details">
//             <div className="logo"></div>
//             <div className="details">
//               <header className="header">
//                 <h2 className="text-base">Facial Appointments</h2>
//                 <h1 className="text-2xl">Composure for the skin and senses</h1>
//               </header>
//               <p></p>
//               <a className="learn-more flex justify-between items-center">
//                 <button className="btn btn-primary b-none outline-none ">
//                   Learn More
//                 </button>
//                 <GoArrowRight size={20} color="" />
//               </a>
//             </div>
//           </div>
//           <div className="static-one-img">
//             <img src="/src/assets/images/top1.avif" alt="" />
//           </div>
//         </div>
//         <div className={`${index === 2 ? "visible" : "invisible"}`}>
//           <div className="details">
//             <div className="logo"></div>
//             <div className="details">
//               <header className="header">
//                 <h2 className="text-base">Facial Appointments</h2>
//                 <h1 className="text-2xl">Composure for the skin and senses</h1>
//               </header>
//               <p></p>
//               <a className="learn-more flex justify-between items-center">
//                 <button className="btn btn-primary b-none outline-none ">
//                   Learn More
//                 </button>
//                 <GoArrowRight size={20} color="" />
//               </a>
//             </div>
//             <div className="static-one-img">
//               <img src="/src/assets/images/toptwo.avif" alt="" />
//             </div>
//           </div>
//         </div>
//         <div className={`${index === 3 ? "visible" : "invisible"}`}>
//           <div className="details">
//             <div className="logo"></div>
//             <div className="details">
//               <header className="header">
//                 <h2 className="text-base">Facial Appointments</h2>
//                 <h1 className="text-2xl">Composure for the skin and senses</h1>
//               </header>
//               <p></p>
//               <a className="learn-more flex justify-between items-center">
//                 <button className="btn btn-primary b-none outline-none ">
//                   Learn More
//                 </button>
//                 <GoArrowRight size={20} color="" />
//               </a>
//             </div>
//             <div className="static-one-img">
//               <img src="/src/assets/images/top3.avif" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="button">
//         <FaChevronLeft
//           onClick={(e) => {
//             if (e <= 3) {
//               setIndex((prevIndex) => prevIndex - 1);
//             } else if (e === 1) {
//               setIndex(3);
//             }
//           }}
//         />
//         <FaAngleRight
//           onClick={(e) => {
//             if (e >= 1 && e < 4) {
//               setIndex((prevIndex) => prevIndex + 1);
//             } else if (e > 3) {
//               setIndex(1);
//             }
//           }}
//         />
//         {`${
//           plaay ? (
//             <FaPause onClick={setPlaay(() => pause())} />
//           ) : (
//             <FaPlay onClick={setPlaay(() => play())} />
//           )
//         }`}
//       </div>
//     </div>
//   );
// };

// export default MainSlider;

import { useState, useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import { FaChevronLeft, FaPause, FaPlay, FaAngleRight } from "react-icons/fa";

const SliderItem = ({ index, isVisible, imageSrc }) => {
  return (
    <div
      className={`slider-item ${
        isVisible ? "visible" : "invisible"
      } flex bg-[#fffef2]`}
    >
      <div className="details">
        <div className="logo"></div>
        <div className="details">
          <header className="header">
            <h2 className="text-base">Facial Appointments</h2>
            <h1 className="text-2xl">Composure for the skin and senses</h1>
          </header>
          <p></p>
          <a className="learn-more flex justify-between items-center">
            <button className="btn btn-primary b-none outline-none ">
              Learn More
            </button>
            <GoArrowRight size={20} color="" />
          </a>
        </div>
        <div className="static-one-img">
          <img src={imageSrc} alt="" />
        </div>
      </div>
    </div>
  );
};

const MainSlider = () => {
  const [index, setIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const goToPreviousSlide = () => {
    setIndex((prevIndex) => (prevIndex > 1 ? prevIndex - 1 : 3));
  };

  const goToNextSlide = () => {
    setIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 1));
  };

  return (
    <div className="slider-container">
      {[1, 2, 3].map((slideIndex) => (
        <SliderItem
          key={slideIndex}
          index={slideIndex}
          isVisible={index === slideIndex}
          imageSrc={`/src/assets/images/top${slideIndex}.avif`}
        />
      ))}
      <div className="button">
        <FaChevronLeft onClick={goToPreviousSlide} />
        <FaAngleRight onClick={goToNextSlide} />
        {isPlaying ? (
          <FaPause onClick={togglePlayPause} />
        ) : (
          <FaPlay onClick={togglePlayPause} />
        )}
      </div>
    </div>
  );
};

export default MainSlider;
