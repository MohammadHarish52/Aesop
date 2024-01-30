import { GoArrowRight } from "react-icons/go";

const RightImage = ({ image, title, subheading, description, btntext }) => {
  return (
    <section className="stats_Section">
      <div className="staticone">
        <div className="static-one-img">
          <img src={image} className="h-auto w-full" alt="" />
        </div>
        <div className="static-one">
          <header className="header">
            <h2 className="text-base">{title}</h2>
            <h1 className="text-2xl">{subheading}</h1>
          </header>
          <p>{description}</p>
          <a className="learn-more flex justify-between items-center ">
            <button className="btn btn-primary b-none outline-none flex  justify-between items-center md:w-[50%] w-[90%]">
              {" "}
              {btntext}
            </button>

            <GoArrowRight size={20} color="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RightImage;
