import "/src/App.css";

const Upfooter = () => {
  return (
    <div className=" upfooter ">
      <div className=" upfooter-main md:text-center text-left p-[20px] md:py-[50px] md:px-[80px] ">
        <div className="uppfooter_card">
          <h1 className="font-medium">Certified B Corp</h1>
          <p>
            We meet the highest verified standards of social and environmental
            performance, transparency and accountability.
          </p>
        </div>

        <div className="uppfooter_card">
          <h1>Leaping Bunny approved</h1>
          <p>
            Our formulations are approved as cruelty free under the Cruelty Free
            International Leaping Bunny programme.
          </p>
        </div>
        <div className="uppfooter_card">
          <h1>PETA recognition</h1>
          <p>
            We appear on PETA's internationally recognised vegan and
            cruelty-free lists.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Upfooter;
