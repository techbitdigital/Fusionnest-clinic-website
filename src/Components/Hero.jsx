import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroCard from "./HeroCard";
import AOS from "aos";
import "aos/dist/aos.css";

// Array of image URLs
const images = [
  "../../assets/hero1.svg",
  "../../assets/hero2.svg",
  "../../assets/hero3.svg",
];

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    fade: true,
  };

  useEffect(() => {
    AOS.init({ duration: 700 });
    AOS.refresh();
  }, []);

  return (
    <div className="relative mt-5 w-full">
      {/* Hero Section */}
      <div data-aos="zoom-in"  className="hero-carousel w-full h-[600px] relative z-10">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full  relative lg:mt-0 mt-20 h-[400px] lg:h-[600px]"
            >
              <img
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute overlay-container z-20 bottom-0 left-0 w-full h-full "></div>
              <div className="lg:pl-32 pl-3 text-white absolute top-10 lg:top-[30%] z-30">
                <h3 className="heroh3">
                  Welcome to <span className="h3span mx-1 sm:text-[30px] ">FusionNest</span>
                  Fertility Clinic
                </h3>
                <h1 className="h1hero lg:text-7xl xs:text-3xl sm:text-[40px] sm:leading-[50px] leading-[60px] lg:leading-[78px]">
                  Building Families, <br /> One Step at a Time
                </h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="relative z-40 -mt-48 lg:-mt-20 flex justify-center">
        <HeroCard />
      </div>
    </div>
  );
};

export default Hero;
