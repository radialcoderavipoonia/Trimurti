import React from "react";
import { TriputiLeftDesign, TriputiRightDesign } from "./common/Icons";
import heroTabletBg from "../assets/images/background/hero_tablet.png";
import heroTabletflowers from "../assets/images/background/flowers_tablet.png";
import left_piller from "../assets/images/background/side_pillers.png";
import right_piller from "../assets/images/background/side_pillers.png";

const Hero = () => {
  return (
    <>
      <div className="bg_papaya_orange">
        <div className="bg_hero">
          <div className="position-relative overflow-hidden">
            <img
              src={heroTabletBg}
              alt="hero bg"
              className="hero_tablet_bg d-lg-none d-sm-block d-none"
            />
            <img
              src={heroTabletflowers}
              alt="hero flowers"
              className="hero_tablet_flowers d-lg-none d-sm-block d-none"
            />
            <img
              src={left_piller}
              alt="hero left piller"
              className="left_pillers d-lg-none d-sm-block d-none"
            />
            <img
              src={right_piller}
              alt="hero right piller"
              className="right_pillers d-lg-none d-sm-block d-none"
            />
            <div className="container custom_container position-relative z-1">
              <div className="max_w_1069 mx-auto d-flex justify-content-end align-items-center hero_content_padding flex-column px-sm-0 px-3 ">
                <div className="d-flex align-items-center">
                  <span className="heading_design">
                    <TriputiLeftDesign />
                  </span>
                  <p className="trimurti_heading fs_lg fw-semibold px-2 mx-1 mb-0 text-white text-center">
                    TRIMURTI ASHRAMA
                  </p>
                  <span className="heading_design">
                    <TriputiRightDesign />
                  </span>
                </div>
                <p className="main_heading fs_xl fw-bold mb-0 text-white text-center">
                  The Finest Ashrama On The Ganga Presents The Finest{" "}
                  <span className="color_dark_yellow">Yoga Sadhana</span>
                </p>
                <p className="main_para fs_sm fw-medium mb-0 mx-auto text-white text-center pt-3">
                  Welcome to the beginning of the end of your search. Meditation
                  - taking the attention to the Source of attention is the
                  simplest and most direct way to increase consciousness. To do
                  just that, Trimurti Ashram in Rishikesh offers the finest
                  spiritual tool available anywhere on Earth.
                </p>
                <button className="register_button transition_03 fs_sm d-flex justify-content-center align-items-center border-0 bg-transparent fw-normal mb-0">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
