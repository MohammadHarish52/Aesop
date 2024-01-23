import { CiSearch } from "react-icons/ci";
import "/src/App.css";

const Third = () => {
  return (
    <div className=" navbar flex  ">
      <div className="left flex justify-center items-center ">
        <ul className="flex">
          <li>Skin care</li>
          <li>Body Hand</li>
          <li>Hair</li>
          <li> fragnanace</li>
          <li>Home</li>
          <li>Kits and Travel</li>
          <li> Gifts</li>
          <li>Read</li>
          <li> Stores</li>
          <li> Facial Appointments</li>
          <li>
            {" "}
            <CiSearch className="text-2xl flex justify-center items-center leading-normal" />
          </li>
        </ul>
      </div>
      <div className="right flex  flex-row justify-center items-center">
        <ul className="flex ">
          <li>Log in</li>
          <li>Cabinet</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Third;
