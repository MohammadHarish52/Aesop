import { CiHeart, CiMenuBurger, CiSearch } from "react-icons/ci";
import "/src/App.css";
import { useEffect, useState } from "react";

const Nav = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrollingUp(currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    // Attach the event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Detach the event listeners when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  let navbar;

  if (screenWidth > 1028) {
    navbar = (
      <div className={`navbar flex sticky top-0`}>
        {/* Left content for larger screens */}
        <div className="left flex justify-center items-center">
          <ul className="flex">
            <li>Skin care</li>
            <li>Body Hand</li>
            <li>Hair</li>
            <li>Fragnance</li>
            <li>Home</li>
            <li>Kits & Travel</li>
            <li>Gifts</li>
            <li>Read</li>
            <li>Stores</li>
            <li>Facial Appointments</li>

            {/* ... other list items */}
            <li>
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
  } else if (screenWidth < 1024 && screenWidth > 728) {
    navbar = (
      <div className="navbar flex sticky top-0">
        {/* Left content for smaller screens */}
        <div className="left flex justify-center items-center">
          <ul className="flex">
            <li>Shop</li>
            <li>Read</li>
            <li>Stores</li>
            <li>
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
  } else {
    navbar = (
      <div className="navbar flex sticky top-0">
        <div className="logo flex justify-center items-center">
          <h1 className="text-2xl">Aēsop</h1>
        </div>
        <div className="right flex flex-2 flex-row justify-between items-center">
          <ul className="flex ">
            <li>
              <CiSearch
                size={25}
                className=" flex justify-center items-center leading-normal"
              />
            </li>
            <li>
              <CiHeart size={25} />
            </li>
            <li className="font-[400] hover:border-b-8 hovwer:border-black">
              Cart
            </li>
            <li>
              <CiMenuBurger size={25} />
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <section
      className={`bg-transparent md:bg-[#fffef2] ${
        isScrollingUp ? "sticky" : ""
      } top-0 z-10000 opacity-1 sm:opacity:1`}
    >
      <div className="opacity-1 sm:opacity:1">
        <div className="wrapper flex flex-col lg:flex-row  box-border">
          {/* Render the appropriate navbar based on the screen width */}
          {navbar}
        </div>
      </div>
    </section>
  );
};

export default Nav;
