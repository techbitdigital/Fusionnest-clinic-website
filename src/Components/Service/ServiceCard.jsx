import React, { useEffect } from "react";
import Card from "../Card";
import CardService from "./CardService";
import AOS from "aos";
import "aos/dist/aos.css";

const cardData = [
  {
    srcPath: "../../assets/sperm2.svg",
    paragraph: "Fertility",
    h1Intro: "InVitro Fertilization",
    button: "Read More",
    to: "/InvitroPage",
    paragraph2:
      "IVF treatment is used in those cases where the woman has tubal blockage, the man has a poor sperm quality, or the cause of infertility is unexplained.",
  },
  {
    srcPath: "../../assets/sperm1.svg",
    paragraph: "INSEMINATION",
    h1Intro: "Intrauterine-Insemination",
    button: "Read More",
    to: "/Intrauterine",
    paragraph2:
      "This is used if the man has a slightly reduced sperm quality, if the woman has irregular ovulation, and/or if the cause of infertility is unexplained.",
  },
  {
    srcPath: "../../assets/sexselection.svg",
    paragraph: "SPERM INJECTION",
    h1Intro: "Intracytoplasmic sperm injection",
    button: "Read More",
    to: "/Intracytoplasmic",
    paragraph2:
      "This procedure addresses mainly male factor infertility, and has reduced considerably with the use of donor sperm in infertility treatment/management.",
  },
  {
    srcPath: "../../assets/sperminjection.png",
    paragraph: "SEX SELECTION",
    h1Intro: "Sex selection",
    button: "Read More",
    to: "/SexSelection",
    paragraph2:
      "Fusion Nest Fertility Centre offers Sex Selection Services by assisting intending couples to make a choice of the kind of sex they want be it male or female.",
  },
  {
    srcPath: "../../assets/spermdonor.svg",
    paragraph: "SPERM",
    h1Intro: "Sperm Donation",
    button: "Read More",
    to: "/SpermDonation",
    paragraph2:
      "Sperm donors are men from a variety of backgrounds who share common excellence. Some are students, many of whom attend top-tier schools.",
  },
  {
    srcPath: "../../assets/eggDonate.svg",
    paragraph: "Egg Donation",
    h1Intro: "Egg Donation",
    to: "/EggDonation",
    button: "Read More",
    paragraph2:
      "This option is normally used to offer hope to a large number of women who previously would never become pregnant.",
  },
  {
    srcPath: "../../assets/surrogate.svg",
    paragraph: "Surrogacy treatment & cryopreservation of egg sperm& emprayos",
    h1Intro: "Surrogacy Treatment",
    to: "/Surrogate",
    button: "Read More",
    paragraph2:
      "Surrogacy offers a wonderful pathway to parenthood for those unable to carry a child to term.",
  },
];

export default function ServiceCard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 700 });
    AOS.refresh();
  }, []);
  return (
    <div>
      <h1 className="serviceh1 mb-10">Our Services</h1>
      <div className="max-w-7xl grid md:grid-cols-2  lg:grid-cols-3 m-auto lg:my-20 ">
        {cardData.map((card, index) => (
          <div key={index}>
            <CardService
              srcPath={card.srcPath}
              paragraph={card.paragraph}
              h1Intro={card.h1Intro}
              paragraph2={card.paragraph2}
              button={card.button}
              to={card.to}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
