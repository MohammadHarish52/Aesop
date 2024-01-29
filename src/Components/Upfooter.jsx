import "/src/App.css";

const details = [
  {
    title: "Certified B Corp",
    description:
      "We meet the highest verified standards of social and environmental performance, transparency and accountability",
  },
  {
    title: "Leaping Bunny approved",
    description:
      "  Our formulations are approved as cruelty free under the Cruelty Free International Leaping Bunny programme.",
  },
  {
    title: "PETA recognition",
    description:
      "We appear on PETA's internationally recognised vegan and cruelty-free lists.",
  },
];

const Upfooter = () => {
  return (
    <div className="upfooter">
      <div className="upfooter-main lg:text-center text-left p-[20px] md:py-[50px] md:px-[80px] flex justify-around">
        {details.map((detail, index) => (
          <div className="uppfooter_card flex-1" key={index}>
            <h1 className={index === 0 ? "font-medium" : ""}>{detail.title}</h1>
            <p>{detail.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upfooter;
