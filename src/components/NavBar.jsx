import React from "react";
import { Facebook, MenuIcon, Telegram, Youtube } from "./common/Icons";

const NavBar = () => {
  return (
    <div className="bg_nav px-4">
      <div className="d-flex justify-content-between align-items-center py_custom">
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
        <span className="d-lg-none d-block">
          <MenuIcon />
        </span>
        <div className="d-flex gap-2 align-items-center">
          <span className="social_icons transition_03">
            <Facebook />
          </span>
          <span className="social_icons transition_03">
            <Youtube />
          </span>
          <span className="social_icons transition_03">
            <Telegram />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
