import { GoArrowRight } from "react-icons/go";

const StaticCard = () => {
  return (
    <section className="stats_Section pt-[80px] md:pt-[150px]">
      <div className="staticone">
        <div className="static-one-img">
          <img
            src="/assets/images/static.avif"
            className="h-auto w-full"
            alt=""
          />
        </div>
        <div className="static-one">
          <header className="header">
            <h2 className="text-base">Facial Appointments</h2>
            <h1 className="text-2xl">Composure for the skin and senses</h1>
          </header>
          <p>
            For a well-rounded skin care regimen, Aesop Facial Appointments
            offer a series of treatments tailored to balance, stimulate and
            intensely nourish the skin.
          </p>
          <a className="learn-more flex justify-between items-center">
            <button className="btn btn-primary flex-1 b-none outline-none ">
              Learn More
            </button>
            <GoArrowRight size={20} color="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StaticCard;
