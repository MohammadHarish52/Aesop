import "/src/App.css";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="upper-container  ">
        <div className="subscribe grid-col-3">
          <h3 className="border-b-[1.1px] border-[#fffef2] pb-2 ">
            Subscribe to Aesop Communications
          </h3>
          <h2 className="text-[1.25rem] h-[37px] w-full border-[#fffef2] border-[1.1px] px-2  mt-2 mb-2 rounded-sm">
            Email address
          </h2>
          <div className="subsinput flex ">
            <input type="checkbox" className="mr-2 mt-2" />
            <p>
              Subscribe to recieve communication From Aesop.By subscribing ,You
              confirm you have read and understood our{" "}
              <span className="underline">Privacy policy</span>
            </p>
          </div>
        </div>
        <div className="order">
          <h3 className="border-b-[1.1px] border-[#fffef2] pb-2">
            Order And support{" "}
          </h3>
          <ul className="list-none leading-[1.7] mt-2">
            <li>Contact us</li>
            <li>FAqs</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Order history</li>
            <li>Check gift card balance</li>
            <li>Order history</li>
          </ul>
        </div>
        <div className="Services">
          <h3 className="border-b-[1.1px] border-[#fffef2] pb-2">Services</h3>
          <ul className="list-none leading-[1.7] mt-2">
            <li>Contact us</li>
            <li>FAqs</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Order history</li>
            <li>Check gift card balance</li>
            <li>Order history</li>
          </ul>
        </div>
        <div className="Services">
          <h3 className="border-b-[1.1px] border-[#fffef2] pb-2">
            Location Preferences
          </h3>
          <ul className="list-none leading-[1.7] mt-2">
            <li>Shipping:</li>
            <li className="underline">Hong kong ,SAR, China</li>
            <li className="font-[700] mt-2">Language</li>
            <li className="underline font-[100]">English</li>
            <li>繁體中文</li>

            <li></li>
          </ul>
        </div>
        <div className="Sustainiblity grid-col-3">
          <h1 className="border-b-[1.1px] border-[#fffef2] pb-2  ">
            Sustainilblity
          </h1>
          <p className="mt-2">
            All Aesop products are vegan, and we do not test our formulations or
            ingredients on animals. We are Leaping Bunny approved and a
            Certified B Corporation. Learn more
          </p>
        </div>
        <div className="about">
          <ul className="list-none leading-[1.7]  ">
            <h1 className="border-b-[1.1px] border-[#fffef2] pb-2 mt-2 ">
              About
            </h1>
            <li>
              <a href="#">Our story</a>
            </li>
            <li>
              <a href="#">Foundation</a>
            </li>
            <li>
              <a href="#">Carrers</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Accessiblity</a>
            </li>
            <li>
              <a href="#"> Cookie policy</a>
            </li>
          </ul>
        </div>
        <div className="socials ">
          <ul className="list-none leading-[1.7]">
            <h1 className="border-b-[1.1px] border-[#fffef2] pb-2 ">Socials</h1>
            <li>
              Instagram <GoArrowUpRight />
            </li>
            <li className="">
              Twitter <GoArrowUpRight />
            </li>
            <li>
              {" "}
              Linkedln <GoArrowUpRight />
            </li>
            <li>
              Wechat <GoArrowUpRight />
            </li>
            <li>
              Weibo <GoArrowUpRight />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
