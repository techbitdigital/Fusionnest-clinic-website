import React, { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Surrogacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className="lg:mb-40 lg:mt-0 mt-28">
      <div data-aos="zoom-out" className="lg:mt-5 relative">
        <img
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
          className=""
          src="../../assets/surrugacybanner.svg "
          alt="Nurse image"
        />
        <div className="w-full overlay-container2 h-full inset-0 absolute"></div>
        <div className="absolute text-center prop text-white inset-0 flex flex-col justify-center items-center">
          <h1 className=" text-[#fff] text-[40px] font-extrabold">
            Surrogacy Treatment
          </h1>
        </div>
      </div>

      <div
        data-aos="fade-right"
        className="hidden lg:block lg:mt-20 rounded-lg  max-w-5xl m-auto"
      >
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            {/* <NavLink to="/blog"></NavLink> */}
            <BreadcrumbLink className="text-2xl font-bold" href="/services">
              Services
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink>Surrogacy Treatment</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className=" lg:mt-20 rounded-lg  max-w-5xl m-auto  bg-white">
        <div data-aos="fade-up" className="lg:p-10 p-3">
          <h3 className="ivf mt-5 lg:mt-0 lg:text-lg w-full text-2xl">
            Surrogacy Treatment
          </h3>
          <p className="ivfPara  text-justify mt-5">
            Surrogacy offers a wonderful pathway to parenthood for those unable
            to carry a child to term. Our surrogacy program supports hopeful
            parents throughout the journey, providing compassionate care, expert
            guidance, and a dedicated team to ensure a smooth and fulfilling
            experience.
          </p>
          <p className="ivfPara  text-justify mt-5">
            Surrogacy can be an option for many, including women with medical
            conditions that prevent safe pregnancy, couples who have experienced
            recurrent pregnancy loss. Our surrogacy program provides a
            supportive network that prioritizes health, transparency, and
            ethics..
          </p>

          <div className="w-full h-full border mt-10  bg-[#D9D9D9]"></div>
          <h3 className="ivf mt-5 lg:mt-10 lg:text-lg w-full text-2xl">
            Cryopreservation of Eggs, Sperm, and Embryos
          </h3>
          <p className="ivfPara  text-justify mt-5">
            Cryopreservation is an advanced technique that allows eggs, sperm,
            and embryos to be safely frozen for future use. This technology is
            invaluable for individuals and couples who want to preserve their
            fertility for a range of personal or medical reasons.
          </p>

          <h3 className="ivf mt-5 lg:mt-10 lg:text-lg w-full text-2xl">
            What is Cryopreservation?:
          </h3>
          <p className="ivfPara  text-justify mt-5">
            Cryopreservation involves carefully freezing reproductive cells at
            sub-zero temperatures, allowing them to be stored indefinitely. This
            option is beneficial for those undergoing treatments like
            chemotherapy, those who wish to delay parenthood, or couples
            planning for future family-building.
          </p>
        </div>
        <div className="w-full h-full border  bg-[#D9D9D9]"></div>
        <div data-aos="fade-up" className="lg:p-10 p-3">
          <h3 className="ivf text-center lg:text-left my-5 lg:mt-0 lg:text-lg w-full text-2xl">
            Types of Cryopreservation Services
          </h3>
          <ul className=" space-y-4 custom-disc list-disc ml-5  text-justify mt-5">
            <li>
              Egg Freezing: Egg freezing is ideal for women who want to preserve
              their eggs for future use. This process can benefit women looking
              to delay pregnancy for personal or medical reasons. Eggs are
              collected and frozen to maintain their viability, providing the
              option of future fertility.
            </li>
            <li>
              Sperm Freezing: Sperm freezing allows men to preserve their
              fertility by storing sperm at an ideal time. This option can be
              helpful for men undergoing medical treatments that may impact
              fertility or for those wishing to plan for future family-building.
            </li>
            <li>
              Embryo Freezing: Embryo freezing is recommended for couples who
              have undergone IVF and wish to store viable embryos for future
              pregnancies. Embryos are carefully frozen and can be thawed and
              transferred at a later time, maximizing family-building options.
            </li>
          </ul>
        </div>
        <div className="w-full h-full border  bg-[#D9D9D9]"></div>

        <div class="spacer  h-36 border-[#D9D9D9]"></div>
      </div>
    </div>
  );
}
