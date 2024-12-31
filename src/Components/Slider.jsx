"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For tablets and smaller devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // For medium-sized screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Slider {...settings}>
     
        <div className="p-2">
          <Image
            src="/image1.jpg"
            alt="Image 1"
            width={400}
            height={400}
            className="rounded-lg w-full h-full"
          />
        </div>

        {/* Slide 2 */}
        <div className="p-2">
          <Image
            src="/image2.webp"
            alt="Image 2"
            width={400}
            height={400}
            className="rrounded-lg w-full h-full"
          />
        </div>

        {/* Slide 3 */}
        <div className="p-2">
          <Image
            src="/image1.jpg"
            alt="Image 3"
            width={400}
            height={400}
            className="rounded-lg w-full h-full"
          />
        </div>

        
        <div className="p-2">
          <Image
            src="/image2.webp"
            alt="Image 4"
            width={400}
            height={400}
            className="rounded-lg w-full h-full"
          />
        </div>
      </Slider>
      <div>

        
      </div>
    </div>
  );
};

export default Sliders;
