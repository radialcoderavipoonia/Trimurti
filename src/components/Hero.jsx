import React from "react";
import { TriputiLeftDesign, TriputiRightDesign } from "./common/Icons";

const Hero = () => {
  return (
    <>
      <div className="bg_papaya_orange">
        <div className="bg_hero">
          <div className="container custom_container ">
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

