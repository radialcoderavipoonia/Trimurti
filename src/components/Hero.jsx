import React from "react";
import { TriputiLeftDesign, TriputiRightDesign } from "./common/Icons";
import NavBar from "./NavBar";

const Hero = () => {
  return (
    <>
      <div className="bg_papaya_orange pt-4">
        <div className="bg_hero pt-4">
          <div className="container custom_container ">
            <div className="pt-1 mb-5">
              <NavBar />
            </div>
            <div className="max_w_1069 mx-auto d-flex justify-content-lg-center justify-content-md-end justify-content-sm-center justify-content-end align-items-center hero_content_height flex-column px-sm-0 px-3">
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
                Welcome to the beginning of the end of your search. Meditation -
                taking the attention to the Source of attention is the simplest
                and most direct way to increase consciousness. To do just that,
                Trimurti Ashram in Rishikesh offers the finest spiritual tool
                available anywhere on Earth.
              </p>
              <button className="register_button transition_03 fs_sm d-flex justify-content-center align-items-center border-0 bg-transparent fw-normal mb-0">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
