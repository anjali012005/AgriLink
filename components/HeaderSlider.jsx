import React, { useState, useEffect } from "react";
import { assets } from "@/public/assets/assets";


const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Tools for Today, Growth for Tomorrow!",
      offer: "Limited Time Offer 30% Off",
      buttonText1: "Buy now",
      buttonText2: "Find more",
      imgSrc: assets.header_headphone_image,
    },
    {
      id: 2,
      title: "Share. Rent. Grow.",
      offer: "Hurry up only few lefts!",
      buttonText1: "Shop Now",
      buttonText2: "Explore Deals",
      imgSrc: assets.header_playstation_image,
    },
    {
      id: 3,
      title: "Farm Smarter, Not Harder!",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Order Now",
      buttonText2: "Learn More",
      imgSrc: assets.header_macbook_image,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full flex justify-center">
      <video
        src='./Agri.mp4'
        className="w-full max-h-96 rounded-xl object-cover p-3"
        // controls
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default HeaderSlider;
