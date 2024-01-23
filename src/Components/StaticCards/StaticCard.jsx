import "/src/App.css";

const StaticCard = () => {
  return (
    <section className="stats_Section">
      <div className="staticone ">
        <div className="static-one-img">
          <img
            src="/src/assets/images/static.avif"
            className="h-auto w-full"
            alt=""
          />
        </div>
        <div className="static-one">
          <header className="header">
            <h2 className="text-base">Facial Appointments</h2>
            <h1 className="text-2xl"> Composure for the skin and senses</h1>
          </header>
          <p>
            For a well-rounded skin care regimen, Aesop Facial Appointments
            offer a series of treatments tailored to balance, stimulate and
            intensely nourish the skin.
          </p>
          <button>Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default StaticCard;
