import F from "../../Assets/f.svg";
import sc from "../../Assets/super_coin.webp";
import fp from "../../Assets/fkplus.svg";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { PiPackage } from "react-icons/pi";
import { FaRegCircleUser, FaArrowTrendUp } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineLocalOffer, MdOutlineFileDownload } from "react-icons/md";
import { GoGift } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineLogout } from "react-icons/md";
import { BsCart3, BsShopWindow, BsThreeDotsVertical } from "react-icons/bs";

import "./index.css";

const Header = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <img className="logo" src={F} alt="..." />
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
        <p className="mobile-disable">Anonymous</p>
        <IoIosArrowDown className="arrow" size="13" />
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
          <li className="dashboard-menu-listitem">
            {" "}
            <MdOutlineLocalOffer size="14" />
            Offers
          </li>
          <li className="dashboard-menu-listitem">
            {" "}
            <GoGift size="14" />
            Gift Cards
          </li>
          <li className="dashboard-menu-listitem">
            {" "}
            <IoNotificationsOutline size="14" />
            Notifications
          </li>
          <li className="dashboard-menu-listitem">
            {" "}
            <MdOutlineLogout size="14" />
            Logout
          </li>
        </ul>
      </div>
      <div className="account-sector">
        <BsCart3 size="18" />
        <p className="mobile-disable">Cart</p>
      </div>
      <div className="account-sector">
        <BsShopWindow size="18" />
        <p className="seller-para mobile-disable">Become a Seller</p>
      </div>
      <div className="account-sector dot-menu">
        <BsThreeDotsVertical />
        <ul className="help-menu">
          <li className="dashboard-menu-listitem">
            {" "}
            <IoNotificationsOutline size="18" />
            Notifications Preferences
          </li>
          <li className="dashboard-menu-listitem">
            {" "}
            <TfiHeadphoneAlt size="18" />
            24x7 Customer Service
          </li>
          <li className="dashboard-menu-listitem">
            {" "}
            <FaArrowTrendUp size="18" />
            Advertise
          </li>
          <li className="dashboard-menu-listitem">
            {" "}
            <MdOutlineFileDownload size="18" />
            Download App
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
