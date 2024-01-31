import { GoArrowRight } from "react-icons/go";

const ProductDetails = () => {
  return (
    <div className="block md:hidden">
      <div className="detailing pt-[150px] relative flex h-[auto] w-[100%] md:flex-row justify-between text-[0.9375rem] box border border-none px-4 md:px-16 bg-[#fffef2] flex-col  ">
        <div className="heading flex flex-col w-full md:w-1/2">
          <h2 className="text-[14px] mb-[5px] font-semibold ">Skin Care+</h2>
          <h1 className="text-[30px] mb-[10px] skin font-medium">
            Intensive formulations for complex skin
          </h1>
        </div>
        <div className="description w-full md:w-1/2">
          <p className="text-[14px] mb-[30px]">
            Explore products formulated with mature skin and urban dwellers in
            mind, to provide daily hydration and the additional benefit of
            potent vitamins and anti-oxidants.
          </p>
          <a href="" className="flex justify-start items-center">
            Browse Formulations <GoArrowRight className="ml-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
