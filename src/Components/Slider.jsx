import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Mousewheel } from "swiper/modules"; // Correct way to import modules in Swiper v7+
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import React from "react";

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
        <img alt={`Slide ${index}`} src={imageSrc} />
      </SwiperSlide>
    ));
  };

  return (
    <>
      <div className="text-center">
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
      <Swiper
        className="mb-40 mt-20"
        spaceBetween={10}
        // slidesPerView={4.1}  // Default for larger screens
        freeMode={true}
        mousewheel={true}
        touchRatio={1.5}
        grabCursor={true}
        modules={[FreeMode, Autoplay, Mousewheel]}
        breakpoints={{
          300: {
            slidesPerView: 1.5, // On screens >= 768px, show 3 slides
          },
          1024: {
            slidesPerView: 4.1, // On screens >= 1024px, show 4.1 slides
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {renderSlides()}
      </Swiper>
    </>
  );
};

export default ImageSwiper;
