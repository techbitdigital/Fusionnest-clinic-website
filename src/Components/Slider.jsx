import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Mousewheel } from "swiper/modules"; // Correct way to import modules in Swiper v7+
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import AOS from "aos";
import "aos/dist/aos.css";

const ImageSwiper = () => {
  const localImages = [
    "/assets/image 27.svg",
    "/assets/image 18.svg",
    "/assets/image 20.svg",
    "/assets/image-4.svg",
    "/assets/image 23.svg",
    "/assets/image-1.svg",
    "/assets/image 21.svg",
    "/assets/image 26.svg",
  ];

  const renderSlides = () => {
    return localImages.map((imageSrc, index) => (
      <SwiperSlide key={index}>
        <img
          className="swiper-custom-bg "
          alt={`Slide ${index}`}
          src={imageSrc}
        />
      </SwiperSlide>
    ));
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div data-aos="fade-down" className="text-center">
        <h1 className="textcomph1 ">
          Comprehensive Analysis & Medical Consultation
        </h1>
        <p className="textcompp lg:w-[755px] lg:p-0 p-3 text-justify lg:text-center mx-auto">
          At Fusion Nest Fertility Clinic, we understand the importance of
          personalized, compassionate care. Our team of fertility specialists
          offers a range of advanced fertility treatments tailored to your
          unique journey. Whether you’re starting your family or looking for
          reproductive guidance, we’re dedicated to helping you achieve your
          dreams.
        </p>
      </div>
      <div data-aos="fade-up">
        <Swiper
          className="lg:mb-40  mb-20 mt-40 swiper-custom-bg"
          spaceBetween={10}
          freeMode={true}
          mousewheel={true}
          touchRatio={1.5}
          grabCursor={true}
          modules={[FreeMode, Autoplay, Mousewheel]}
          breakpoints={{
            300: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 4.1,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {renderSlides()}
        </Swiper>
      </div>
    </>
  );
};

export default ImageSwiper;
