// import React, { useRef } from "react"; // Import useRef from React
// import Slider from "react-slick"; // Import Slider from react-slick
// import "slick-carousel/slick/slick.css"; // Import slick CSS
// import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSS
// import Card from "../Components/Card"; // Import Card component

// const cardData = [
//   {
//     srcPath: "../../assets/sperm2.svg",
//     paragraph: "Fertility",
//     h1Intro: "InVitro Fertilization",
//     paragraph2:
//       "IVF treatment is used in those cases where the woman has tubal blockage, the man has a poor sperm quality, or the cause of infertility is unexplained.",
//   },
//   {
//     srcPath: "../../assets/sperm1.svg",
//     paragraph: "INSEMINATION",
//     h1Intro: "Intrauterine-Insemination",
//     paragraph2:
//       "This is used if the man has a slightly reduced sperm quality, if the woman has irregular ovulation, and/or if the cause of infertility is unexplained.",
//   },
//   {
//     srcPath: "../../assets/sperm3.svg",
//     paragraph: "SPERM INJECTION",
//     h1Intro: "Intracytoplasmic sperm injection",
//     paragraph2:
//       "This procedure addresses mainly male factor infertility, and has reduced considerably with the use of donor sperm in infertility treatment/management.",
//   },
//   {
//     srcPath: "../../assets/selection.svg",
//     paragraph: "SEX SELECTION",
//     h1Intro: "Sex selection",
//     paragraph2:
//       "Fusion Nest Fertility Centre offers Sex Selection Services by assisting intending couples to make a choice of the kind of sex they want be it male or female.",
//   },
//   {
//     srcPath: "../../assets/spermdonor.svg",
//     paragraph: "SPERM",
//     h1Intro: "Sperm Donation",
//     paragraph2:
//       "Sperm donors are men from a variety of backgrounds who share common excellence. Some are students, many of whom attend top-tier schools. .",
//   },
//   {
//     srcPath: "../../assets/eggdnor.svg",
//     paragraph: "Egg Donation",
//     h1Intro: "Egg Donation",
//     paragraph2:
//       "This option is normally used to offer hope to a large number of women who previously would never become pregnant.",
//   },
// ];

// const CustomCarousel = () => {
//   const sliderRef = useRef(null); // Create a reference for the slider
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 700,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplaySpeed: 3000,
//     draggable: true,
//     pauseOnHover: true,
//     pauseOnFocus: true,
//     arrows: false, 
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: true,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="max-w-7xl m-auto my-20 relative">
//       {/* Make parent relative for positioning */}
//       <Slider ref={sliderRef} {...settings}>
//         {cardData.map((card, index) => (
//           <div key={index}>
//             <Card
//               srcPath={card.srcPath}
//               paragraph={card.paragraph}
//               h1Intro={card.h1Intro}
//               paragraph2={card.paragraph2}
//             />
//           </div>
//         ))}
//       </Slider>
//       <div className="flex justify-between absolute lg:-inset-6 -inset-3 items-center">
//         <button
//           className="custom-prev-button mx-4 bg-[#E9F4FA] text-[#08183026] p-2 h-12 w-12 flex justify-center items-center rounded-full"
//           onClick={() => sliderRef.current.slickPrev()}
//         >
//           <i className="fa-solid fa-arrow-left"></i>
//         </button>
//         <button
//           className="custom-next-button mx-4 bg-[#E9F4FA] text-[#08183026] p-2 h-12 w-12 flex justify-center items-center rounded-full"
//           onClick={() => sliderRef.current.slickNext()}
//         >
//           <i className="fa-solid fa-arrow-right"></i>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustomCarousel;
