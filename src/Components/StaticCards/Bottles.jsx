import { GoArrowRight } from "react-icons/go";

const Bottles = () => {
  return (
    <section className="pt-[150px] bg-[#fffef2]">
      <div className="opacity-1">
        <div className="wrapper flex box-border ">
          <div className="imgbottles w-[33.333%] pl-[80px]">
            <img src="/src/assets/images/bottles.webp" alt="" />
          </div>
          <div className="details w-[66.66667%] pr-[16.6666667%] pl-[8.33333%]">
            <header className="relative flex flex-col mb-[30px]">
              <h1 className="text-[30px] mb-[30px]">Eminently suited to all</h1>
              <p className="text-[16px]">
                An Aesop Gift Card is the ideal gift for the fussy, the faraway
                and anyone in between—conveniently delivered with the click of a
                mouse to conceal last-minute selections.{" "}
              </p>
            </header>
            <button className="learn-more pl-[23px] w-[50%] flex justify-between">
              Purchase now <GoArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bottles;
