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
            <NavLink to="/bosh_sahifa">Bosh sahifa</NavLink>
            <NavLink to="/bosh_sahifa">Top advokatlar</NavLink>
            <NavLink to="/bosh_sahifa">Advokat Minbari</NavLink>
            <NavLink to="/bosh_sahifa">Advokatlar</NavLink>
            <NavLink to="/bosh_sahifa">YURISTLAR</NavLink>
            <NavLink to="/bosh_sahifa">Xizmatlar</NavLink>
            <NavLink to="/bosh_sahifa">Fikrlar</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
