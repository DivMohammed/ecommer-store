"use client";

import React, { useEffect } from "react";
import { Billboard as BillboardType } from "@/types";
import Image from "next/image";
// import "./FashionSlider.css";

interface Props {
  data: BillboardType[];
}

const HomeSwiper: React.FC<Props> = ({ data }) => {
//   useEffect(() => {
//     // إضافة روابط CSS و JS الخارجية لمكون Fashion Slider
//     const cssLink = document.createElement("link");
//     cssLink.rel = "stylesheet";
//     cssLink.href = "https://fashion-slider.uiinitiative.com/assets/index.fca86069.css";
//     document.head.appendChild(cssLink);

//     const preloadLink = document.createElement("link");
//     preloadLink.rel = "modulepreload";
//     preloadLink.href = "https://fashion-slider.uiinitiative.com/assets/vendor.688a9bfa.js";
//     document.head.appendChild(preloadLink);

//     const script = document.createElement("script");
//     script.type = "module";
//     script.crossOrigin = "anonymous";
//     script.src = "https://fashion-slider.uiinitiative.com/assets/index.ff8f4572.js";
//     document.body.appendChild(script);

//     // التنظيف عند إلغاء التركيب
//     return () => {
//       document.head.removeChild(cssLink);
//       document.head.removeChild(preloadLink);
//       document.body.removeChild(script);
//     };
//   }, []);

  return (
    <div className="fashion-slider">
      <div className="swiper h-screen">
        <div className="swiper-wrapper h-screen">
          {data.map((item, index) => (
            <div
              key={index}
              className="swiper-slide"
              data-slide-bg-color={item.value || "#000"}
            >
              {/* Title */}
              <div
                className="fashion-slider-title h-screen"
                data-swiper-parallax="-130%"
              >
                <div className="fashion-slider-title-text">{item.label}</div>
              </div>

              {/* Image */}
              <div className="fashion-slider-scale">
                <Image fill src={item.imageUrl} alt={item.label} />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="fashion-slider-button-prev fashion-slider-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
            <g className="fashion-slider-svg-wrap">
              <g className="fashion-slider-svg-circle-wrap">
                <circle cx="42" cy="42" r="40" />
              </g>
              <path
                className="fashion-slider-svg-arrow"
                d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"
              />
              <path className="fashion-slider-svg-line" d="M80,0H0" />
            </g>
          </svg>
        </div>

        <div className="fashion-slider-button-next fashion-slider-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
            <g className="fashion-slider-svg-wrap">
              <g className="fashion-slider-svg-circle-wrap">
                <circle cx="42" cy="42" r="40" />
              </g>
              <path
                className="fashion-slider-svg-arrow"
                d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"
              />
              <path className="fashion-slider-svg-line" d="M80,0H0" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HomeSwiper;