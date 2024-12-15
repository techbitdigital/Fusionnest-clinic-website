import React, { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import AOS from "aos";
import "aos/dist/aos.css";

export default function EggDonation() {
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
          src="../../assets/donation.svg "
          alt="Nurse image"
        />
        <div className="w-full overlay-container2 h-full inset-0 absolute"></div>
        <div className="absolute text-center prop text-white inset-0 flex flex-col justify-center items-center">
          <h1 className=" text-[#fff] text-[40px] font-extrabold">
            Egg Donation
          </h1>
        </div>
      </div>

      <div data-aos="fade-right" className="hidden lg:block lg:mt-20 rounded-lg  max-w-5xl m-auto">
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
            <BreadcrumbLink>Egg Donation</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className=" lg:mt-20 rounded-lg  max-w-5xl m-auto  bg-white">
        <div data-aos="fade-up" className="lg:p-10 p-3">
          <h3 className="ivf mt-5 lg:mt-0 lg:text-lg w-full text-2xl">
          Egg Donation
          </h3>
          <p className="ivfPara  text-justify mt-5">
            Sperm donors are men from a variety of backgrounds who share common
            excellence. Some are students, many of whom attend top-tier schools.
            Others are professionals in fields such as medicine, law, or public
            service. Sperm donors vary widely in regard to ethnicity, culture
            and religious backgrounds, but they are all bright, honest and
            committed.
          </p>
          <p className="ivfPara  text-justify mt-5">
            Making a sperm donation is one of the most generous things a man can
            do, as it gives others the chance to have a baby. The reasons for
            people needing to access donor sperm are varied, couples having
            difficulty conceiving because of male reproductive issues, single
            women who want to have a child. Sperm donors meet with our counselor
            to discuss the social, ethical and legal implications of sperm
            donation.
          </p>
          <p className="ivfPara  text-justify mt-5">
            During this time they provide complete profile about themselves,
            provide a family medical history, and also sign consent forms for
            donation. Once a sperm donor applicant meets these basic
            requirements he may then be asked to move on to our qualification
            screening process. Ultimately, acceptance into our donor program
            comes only after potential sperm donors meet the high standards set
            forth in our qualification process.
          </p>
          <p className="ivfPara  text-justify mt-5">
            But once accepted, those in the program will know that their sperm
            donation will change lives and make dreams of family a reality.
          </p>
        </div>
        <div className="w-full h-full border  bg-[#D9D9D9]"></div>
        <div data-aos="fade-up" className="lg:p-10 p-3">
          <h3 className="ivf text-center lg:text-left my-5 lg:mt-0 lg:text-lg w-full text-2xl">
            TYPES OF SPERM DONATION
          </h3>
          <h3 className="ivf text-center lg:text-left mt-5 lg:mt-0 lg:text-sm w-full text-2xl">
            Anonymous:
          </h3>
          <p className="ivfPara  text-justify mt-5">
            The sperm donor is anonymous and will remain anonymous.
          </p>
          <h3 className="ivf mt-5 text-center lg:text-start lg:text-sm w-full text-2xl">
            Known Donor
          </h3>
          <p className="ivfPara  text-justify mt-5">
            Donors will be willing to be known or couples are allowed to come
            with their own donor who could be a friend or relative. However
            attention is paid to the ethical, psychological and moral issues
            involved in using a known donor.
          </p>
        </div>
        <div className="w-full h-full border  bg-[#D9D9D9]"></div>

        {/* <div className="lg:p-0 p-3">
          <div className="ivf text-center lg:text-left mt-5 lg:mt-0 lg:text-lg w-full text-2xl">
            <div className="lg:p-10 p-3">
              <h3 className="ivf text-center lg:text-left mt-5 lg:mt-0 lg:text-lg w-full text-2xl">
                Medical Reasons For Carrying Out Sex Selection
              </h3>
              <h3 className="ivf text-center lg:text-left mt-5 lg:mt-0 lg:text-sm w-full text-2xl">
                Sperm Sorting
              </h3>

              <p className="ivfPara lg:w-[847px] text-justify mt-5">
                Sperm carry either an X chromosome or a Y chromosome; all eggs
                carry an X chromosome. If an egg is fertilised by an X-bearing
                sperm, the child will be female, while a Y-bearing sperm will
                produce a male. Sperm sorting aims to produce a sample with a
                higher proportion of X- or Y-bearing sperm; this increases the
                chance of conceiving a child of the preferred sex.
              </p>
            </div>
          </div>

          <div className="ivf text-center lg:text-left mt-5 lg:mt-0 lg:text-lg w-full text-2xl">
            <div className="lg:pl-10 p-3">
              <h3 className="ivf text-center lg:text-left mt-5 lg:mt-0 lg:text-lg w-full text-2xl">
                Pre-implantation genetic diagnosis (PGD)
              </h3>

              <p className="ivfPara lg:w-[871px] text-justify mt-5">
                The sex of embryos created by in vitro fertilization (IVF) can
                be determined using PGD. PGD involves the removal of one cell
                from an embryo and analysis of the chromosomes and DNA. This is
                done three days after fertilization when the embryo has about
                eight cells and does not appear to affect development. Only
                embryos with the required genetic characteristics and sex are
                placed in the woman’s uterus. This could mean choosing embryos
                that are of desired sex and are known to not be affected by a
                particular genetic disease.
              </p>
            </div>
          </div>
        </div> */}
        {/* <div className="w-full h-full border  bg-[#D9D9D9]"></div> */}

        <div data-aos="fade-up" className="lg:px-10 mt-10 px-3">
          <h3 className="ivf text-center lg:text-left mt-5 lg:mt-0 lg:text-lg w-full text-2xl">
          Basic Requirements for Sperm Donors
          </h3>
          <ul className=" space-y-4 custom-disc list-disc ml-5  text-justify mt-5">
            <li>
            At least 5’9” tall
            </li>
            <li>
            Between 19 and 38 years old
            </li>
            <li>
            Sexual partners are exclusively female
            </li>
            <li>
            Currently attending a four-year university, or already hold a bachelors or <br  className="hidden lg:block"/> advanced degree
            </li>
            <li>
            Are in good health
            </li>
          </ul>
        </div>

        <div class="spacer  h-16 border-[#D9D9D9]"></div>
      </div>
    </div>
  );
}
