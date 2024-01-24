import "/src/App.css";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="upper-container flex  ">
        <div className="subscribe grid-col-3">
          <h3 className="border-b-2 ">Subscribe to Aesop Communications</h3>
          <h2>Email address</h2>
          <div className="subsinput">
            <input type="checkbox" name="" id="" />
            <p>
              Subscribe to recieve communication From Aesop.By subscribing ,You
              confirm you have read and understood our{" "}
              <span className="underline">Privacy policy</span>
            </p>
          </div>
        </div>
        <div className="order">
          <h3 className="border-b-2">Order And support </h3>
          <ul className="list-none">
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
          <h3 className="border-b-2">Services</h3>
          <ul className="list-none">
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
          <h3 className="border-b-2">Location Preferences</h3>
          <ul className="list-none">
            <li>Shipping:</li>
            <li className="">Hong kong ,SAR, China</li>
            <li> Language</li>
            <li>English</li>
            <li>chinnese</li>

            <li></li>
          </ul>
        </div>
        <div className="Sustainiblity">
          <h1>Sustainilblity</h1>
          <p>
            All Aesop products are vegan, and we do not test our formulations or
            ingredients on animals. We are Leaping Bunny approved and a
            Certified B Corporation. Learn more
          </p>
        </div>
        <div className="about">
          <ul className="list-none">
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
        <div className="socials">
          <ul className="list-none">
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
