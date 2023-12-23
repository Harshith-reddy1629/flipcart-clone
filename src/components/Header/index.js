import F from "../../Assets/f.svg";
import sc from "../../Assets/super_coin.webp";
import fp from "../../Assets/fkplus.svg";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { PiPackage } from "react-icons/pi";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { BsCart3, BsShopWindow, BsThreeDotsVertical } from "react-icons/bs";

import "./index.css";

const Header = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <img src={F} alt="..." />
      <div className="search-container">
        <label className="search-label">
          {" "}
          <CiSearch size="20" />
        </label>
        <input
          type="search"
          placeholder="Search for products, brands and more"
          className="search-input"
        />
      </div>
      <div className="account-sector dashboard">
        <FaRegCircleUser size="18" />
        <p>Anonymous</p>
        <IoIosArrowDown className="arrow" size="16" />
        <ul className="dashboard-menu">
          <li className="dashboard-menu-listitem">
            {" "}
            <FaRegCircleUser size="14" />
            My Profile
          </li>
          <li className="dashboard-menu-listitem">
            <img src={sc} alt="." height="14" />
            SuperCoin Zone
          </li>
          <li className="dashboard-menu-listitem">
            {" "}
            <img src={fp} alt="." height="14" />
            Flipkart Plus Zone
          </li>
          <li className="dashboard-menu-listitem">
            {" "}
            <PiPackage size="14" />
            Orders
          </li>
          <li className="dashboard-menu-listitem">
            {" "}
            <FaRegHeart size="14" />
            Wishlist
          </li>
        </ul>
      </div>
      <div className="account-sector">
        <BsCart3 size="18" />
        <p>Cart</p>
      </div>
      <div className="account-sector">
        <BsShopWindow size="18" />
        <p>Become a Seller</p>
      </div>
      <div className="account-sector dot-menu">
        <BsThreeDotsVertical />
      </div>
    </div>
  </nav>
);

export default Header;
