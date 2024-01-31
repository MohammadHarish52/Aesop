import { GoArrowRight } from "react-icons/go";

const FirstSlider = () => {
  return (
    <div className="relative  z-10 box-border overflow-hidden h-[679px] flex">
      <img
        src="/assets/images/main.avif"
        className="w-full h-[679px] object-cover absolute"
        alt="A swirling red texture."
      />
      <img
        alt="Sample Aesop Product"
        src="/assets/images/mb.avif"
        className="w-[272px] h-[272px] z-1 absolute bottom-0 mb-[-0.5px] right-0"
      />
      <div className="hidden md:block md:visible invisible">
        {" "}
        <div className="left  flex flex-row  lg:flex-col">
          <div className="logo absolute top-[15%] left-[5%] text-[#fffef2] w-full h-full ">
            <h1 className="text-2xl lg:text-4xl">Aēsop</h1>
          </div>
          <div className="details absolute top-0 left-[25%] lg:left-[15%] w-[60%] lg:w-[30%] z-[20] leading-[1.6] font-[1.6rem] text-white px-0 pt-[110px] pb-[180px] flex flex-col justify-start bg-darkGray">
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
              complimentary 15mL bottle of Parsley Seed Anti-Oxidant Facial
              Toner with all orders over $800.
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
    </div>
  );
};

export default FirstSlider;
