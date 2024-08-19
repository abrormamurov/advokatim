import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import { IoSearchOutline, IoPersonCircleOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import "./Navbar.css";
import { IoIosArrowForward } from "react-icons/io";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <div className="container nav-container">
        <div className="navbar-head">
          <div className="links hidden md:flex">
            <div className="img flex items-center gap-4">
              <h4>Ijtimoij tarmoqlarimiz</h4>
              <FaTelegramPlane size={23} />
              <FaInstagram size={23} />
              <FaYoutube size={23} />
              <FaFacebookF size={23} />
            </div>
            <div className="users flex gap-4 items-center">
              <span className="flex items-center gap-2">
                <h4>Qirdiruv</h4>
                <IoSearchOutline size={33} />
              </span>
              <span className="flex items-center gap-2">
                <h4>Kirish</h4>
                <IoPersonCircleOutline size={33} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={`container container-2 ${isMenuOpen ? "show-menu" : ""}`}>
        <div className="navbar-end">
          <div className="ad-btn">
            {" "}
            <span>
              <img
                src={process.env.PUBLIC_URL + "/img/advokatim.png"}
                width={200} // Adjusted size for mobile view
                height={22}
                alt="Advokatim Logo"
              />
            </span>
            <button className="menu-icon" onClick={toggleMenu}>
              <IoMenuOutline size={25} />
            </button>
          </div>
          <div className={`navlinks ${isMenuOpen ? "show-links" : ""}`}>
            <span className=" w-full span-links">
              {" "}
              <NavLink to="/bosh_sahifa">Bosh sahifa</NavLink>
              <IoIosArrowForward className="text-white icon" />
            </span>
            <span className="border-b-2 border-white flex justify-between w-full ">
              {" "}
              <NavLink to="/bosh_sahifa">Top advokatlar</NavLink>
              <IoIosArrowForward className="text-white" />
            </span>{" "}
            <span className="border-b-2 border-white flex justify-between w-full ">
              {" "}
              <NavLink to="/bosh_sahifa">advokat Minbari</NavLink>
              <IoIosArrowForward className="text-white" />
            </span>{" "}
            <span className="border-b-2 border-white flex justify-between w-full ">
              {" "}
              <NavLink to="/bosh_sahifa">advokatlar</NavLink>
              <IoIosArrowForward className="text-white" />
            </span>{" "}
            <span className="border-b-2 border-white flex justify-between w-full ">
              {" "}
              <NavLink to="/bosh_sahifa">YURISTLAR</NavLink>
              <IoIosArrowForward className="text-white" />
            </span>{" "}
            <span className="border-b-2 border-white flex justify-between w-full ">
              {" "}
              <NavLink to="/bosh_sahifa">Xizmatlar</NavLink>
              <IoIosArrowForward className="text-white" />
            </span>{" "}
            <span className="border-b-2 border-white flex justify-between w-full ">
              {" "}
              <NavLink to="/bosh_sahifa">fikrlar</NavLink>
              <IoIosArrowForward className="text-white" />
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
