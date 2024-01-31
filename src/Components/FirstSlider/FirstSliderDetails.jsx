import { GoArrowRight } from "react-icons/go";

const FirstSliderDetails = () => {
  return (
    <div className="md:hidden block">
      <div className="flex justify-center items-center ">
        <div className="details  w-[100%] h-[100%] z-[20] leading-[1.6] font-[1.6rem] bg-[#323233]  text-white px-[80px] md:px[200px] pt-[110px] pb-[110px] flex flex-col justify-start bg-darkGray">
          <header className="relative flex flex-col">
            <h2 className="sm-[5px] mb-15px text-[14px] mb-[15px] ">
              Online only for a limited time
            </h2>
            <h1 className="text-[30px] mb-[15px] order-2">
              A gift for the lunar year
            </h1>
          </header>
          <p className="text-[1rem] leading-[1.7] mb-[30px]">
            To celebrate the Year of the Dragon, we are delighted to include a
            complimentary 15mL bottle of Parsley Seed Anti-Oxidant Facial Toner
            with all orders over $800.
          </p>
          <a className="learn-more flex justify-between items-center border-white b-2 hover:bg-[#fffef2] hover:text-[#333]">
            <button className="btn btn-primary outline-none ">
              <p className="flex-1"> Browse new year gifts</p>
            </button>
            <GoArrowRight size={20} className="ml-2" color="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirstSliderDetails;
