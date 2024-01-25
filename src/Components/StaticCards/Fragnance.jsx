import { GoArrowRight } from "react-icons/go";

const Fragnance = () => {
  return (
    <section className="stats_Section">
      <div className="staticone pl-[80px] ">
        <div className="static-one pb-[36px] ">
          <header className="header">
            <h2 className="text-[14px]">Online Only</h2>
            <h1 className="text-[30px]">
              Familiar fragrances, doubled in volume
            </h1>
          </header>
          <p className="text-[16px]">
            For those who feel that 50 millilitres just fly by too quickly,
            three of our unorthodox Eaux de Parfum—Tacit, Hwyl and Marrakech
            Intense—are now available, exclusively online, in larger 100mL
            bottles.
          </p>
          <a className="learn-more flex justify-between items-center">
            <button className="btn btn-primary b-none outline-none ">
              Discover Now
            </button>
            <GoArrowRight size={20} color="" />
          </a>
        </div>
        <div className="static-one-img pr-0.5">
          <img src="/src/assets//images/fragnance.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Fragnance;
