import { GoArrowRight } from "react-icons/go";

const Lemon = ({ image, title, description, btntext }) => {
  return (
    <section className="stats_Section">
      <div className="staticone">
        <div className="static-one-img">
          <img src={image} className="h-auto w-full" alt="" />
        </div>
        <div className="static-one">
          <header className="header">
            <h1 className="text-2xl">{title}</h1>
          </header>
          <p>{description}</p>
          <a className="learn-more flex justify-between items-center ">
            <button className="btn btn-primary b-none outline-none flex flex-1  justify-between items-center md:w-[50%] w-[100%]">
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

export default Lemon;
