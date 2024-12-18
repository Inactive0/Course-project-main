// src/components/Slider.js
import React from "react";
import Slider from "react-slick";

// Суреттерді импорттау
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slidesData = [
    { id: 1, imageUrl: image1 },
    { id: 2, imageUrl: image2 },
    { id: 3, imageUrl: image3 },
  ];

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <Slider {...settings}>
        {slidesData.map((slide) => (
          <div key={slide.id} className="p-4">
            <img
              src={slide.imageUrl}
              alt={`Slide ${slide.id}`}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
