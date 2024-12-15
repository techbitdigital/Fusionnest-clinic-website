import React, { useEffect } from "react";
import Slider from "react-slick";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";

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
      "Sperm donors are men from a variety of backgrounds who share common excellence. Some are students, many of whom attend top-tier schools.",
  },
  {
    srcPath: "../../assets/eggDonate.svg",
    paragraph: "Egg Donation",
    h1Intro: "Egg Donation",
    paragraph2:
      "This option is normally used to offer hope to a large number of women who previously would never become pregnant.",
  },
  {
    srcPath: "../../assets/surrogate.svg",
    paragraph: "Surrogacy treatment & cryopreservation of egg sperm& emprayos",
    h1Intro: "Surrogacy Treatment",
    paragraph2:
      "Surrogacy offers a wonderful pathway to parenthood for those unable to carry a child to term.",
  },
];

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="custom-next-button absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#E9F4FA] text-[#08183026] p-2 h-12 w-12 flex justify-center items-center rounded-full"
      onClick={onClick}
    >
      <i className="fa-solid fa-arrow-right"></i>
    </button>
  );
}

// Custom Previous Arrow
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="custom-prev-button absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#E9F4FA] text-[#08183026] p-2 h-12 w-12 flex justify-center items-center rounded-full"
      onClick={onClick}
    >
      <i className="fa-solid fa-arrow-left"></i>
    </button>
  );
}

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    pauseOnHover: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          fade: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="max-w-7xl m-auto lg:my-20 relative">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index}>
            <Card
              srcPath={card.srcPath}
              paragraph={card.paragraph}
              h1Intro={card.h1Intro}
              paragraph2={card.paragraph2}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
