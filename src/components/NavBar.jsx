import React, { useState, useEffect, useRef } from "react";
import { Facebook, MenuIcon, Telegram, Youtube } from "./common/Icons";
import logo from "../assets/images/navbar/logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="container custom_container pt-sm-5 pt-4  pb-4">
      <div className="bg_nav px-4 mt-sm-1 mt-3 position-relative">
        <div className="d-flex justify-content-between align-items-center py_custom  position-relative">
          <ul className="d-lg-flex align-items-center li_gap mb-0 ps-3 d-none">
            <li>
              <a
                href="#"
                className="color_dark_gray fs_sm fw-medium leading_normal opacity_70 nav_links transition_03"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="color_dark_gray fs_sm fw-medium leading_normal opacity_70 nav_links transition_03"
              >
                Yoga Program
              </a>
            </li>
            <li>
              <a
                href="#"
                className="color_dark_gray fs_sm fw-medium leading_normal opacity_70 nav_links transition_03"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <ul
            ref={menuRef}
            className={`d-lg-none position-absolute bg-white links_position mb-0 ps-3 transition_03 ${
              isMenuOpen ? "opacity-1" : "opacity-0 top-0 "
            }`}
          >
            <li onClick={toggleMenu}>
              <a
                href="#"
                className="color_dark_gray fs_sm fw-medium leading_normal opacity_70 nav_links transition_03"
              >
                Home
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a
                href="#"
                className="color_dark_gray fs_sm fw-medium leading_normal opacity_70 nav_links transition_03"
              >
                Yoga Program
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a
                href="#"
                className="color_dark_gray fs_sm fw-medium leading_normal opacity_70 nav_links transition_03"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <span className="d-lg-none d-block" onClick={toggleMenu}>
            <MenuIcon />
          </span>
          <div className="d-flex gap-2 align-items-center">
            <a
              href="https://www.facebook.com/"
              target="blank"
              className="social_icons transition_03"
            >
              <Facebook />
            </a>
            <a
              href="https://www.youtube.com/"
              target="blank"
              className="social_icons transition_03"
            >
              <Youtube />
            </a>
            <a
              href="https://twitter.com/"
              target="blank"
              className="social_icons transition_03"
            >
              <Telegram />
            </a>
          </div>
        </div>
        <div className="position-absolute logo_position">
          <a href="#">
            <img src={logo} alt="page logo" className="logo_image" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
