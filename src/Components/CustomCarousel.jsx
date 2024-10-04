import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Components/Card";

const cardData = [
  {
    srcPath: "../../assets/sperm2.svg",
    paragraph: "Fertility",
    h1Intro: "InVitro Fertilization",
    paragraph2:
      "IVF treatment is used in those cases where the woman has tubal blockage, the man has a poor sperm quality, or the cause of infertility is unexplained.",
  },
  {
    srcPath: "../../assets/sperm1.svg",
    paragraph: "INSEMINATION",
    h1Intro: "Intrauterine-Insemination",
    paragraph2:
      "This is used if the man has a slightly reduced sperm quality, if the woman has irregular ovulation, and/or if the cause of infertility is unexplained.",
  },
  {
    srcPath: "../../assets/sperm3.svg",
    paragraph: "SPERM INJECTION",
    h1Intro: "Intracytoplasmic sperm injection",
    paragraph2:
      "This procedure addresses mainly male factor infertility, and has reduced considerably with the use of donor sperm in infertility treatment/management.",
  },
  {
    srcPath: "../../assets/selection.svg",
    paragraph: "SEX SELECTION",
    h1Intro: "Sex selection",
    paragraph2:
      "Fusion Nest Fertility Centre offers Sex Selection Services by assisting intending couples to make a choice of the kind of sex they want be it male or female.",
  },
  {
    srcPath: "../../assets/spermdonor.svg",
    paragraph: "SPERM",
    h1Intro: "Sperm Donation",
    paragraph2:
      "Sperm donors are men from a variety of backgrounds who share common excellence. Some are students, many of whom attend top-tier schools. .",
  },
  {
    srcPath: "../../assets/eggdnor.svg",
    paragraph: "Egg Donation",
    h1Intro: "Egg Donation",
    paragraph2:
      "This option is normally used to offer hope to a large number of women who previously would never become pregnant.",
  },
];

const CustomCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // At 768px or below (tablet and mobile screens)
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="text-center ">
        <h1 className="textcomph1 ">
          We Provide Assisted Reproductive Treatments
        </h1>
        <p className="textcompp lg:[155px] lg:p-0 p-3 text-justify lg:text-center mx-auto">
          We provide a wide range of assisted reproductive treatments. Our goal
          is to satisfy our customers. We do it as easy as possible for couples
          to have a baby, whether it’s through the use of couples’ gametes
          (egg/sperm), donor eggs or sperm or surrogacy.
        </p>
      </div>
      <div className="max-w-7xl overflow-hidden m-auto  lg:mb-20 relative">
        <Slider ref={sliderRef} {...settings}>
          {cardData.map((card, index) => (
            <div key={index}>
              <Card
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                srcPath={card.srcPath}
                paragraph={card.paragraph}
                h1Intro={card.h1Intro}
                paragraph2={card.paragraph2}
              />
            </div>
          ))}
        </Slider>
        <div className="flex justify-between absolute lg:-inset-6 -inset-3 items-center">
          <button
            className="custom-prev-button mx-4 bg-[#E9F4FA] text-[#08183026] p-2 h-12 w-12 flex justify-center items-center rounded-full"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <button
            className="custom-next-button mx-4 bg-[#E9F4FA] text-[#08183026] p-2 h-12 w-12 flex justify-center items-center rounded-full"
            onClick={() => sliderRef.current.slickNext()}
          >
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomCarousel;
