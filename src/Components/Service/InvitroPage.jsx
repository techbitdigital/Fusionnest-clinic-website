import React, { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function InvitroPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="lg:mb-40 lg:mt-0 mt-28">
      <div className="lg:mt-5 relative">
        <img
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
          className=""
          src="../../assets/ServiceInfo.svg "
          alt="Nurse image"
        />
        <div className="w-full overlay-container2 h-full inset-0 absolute"></div>
        <div className="absolute text-center prop text-white inset-0 flex flex-col justify-center items-center">
          <h1 className=" text-[#fff] text-[40px] font-extrabold">
            InVitro Fertilization
          </h1>
        </div>
      </div>
      <div className="hidden lg:block lg:mt-20 rounded-lg  max-w-5xl m-auto">
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
            <BreadcrumbLink>InVitro Fertilization</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className=" lg:mt-20 rounded-lg  max-w-5xl m-auto  bg-white shadow-2xl">
        <div className="lg:p-10 p-3">
          <h3 className="ivf lg:mt-0 mt-5 lg:text-lg w-full text-2xl">
            What Is IVF?
          </h3>
          <p className="ivfPara text-justify mt-5">
            In-vitro fertilization is a form of assisted reproductive technique
            used to help women get pregnant.Eggs and sperm(either from the
            clients or a donor) are fertilized outside the body in a laboratory
            after which two or more healthy embryos are then transferred into
            the woman’s uterus.
          </p>
        </div>
        <div className=" w-full h-full border  bg-[#D9D9D9]"></div>
        <div class="parent">
          <div class="div1 pt-5 border-r border-[#D9D9D9]">
            <h3 class="ivf  lg:text-lg w-full text-2xl text-center lg:text-start lg:pl-10 lg:p-0  p-3 pr-5 mb-5">
              Who Are The Candidate Of IVF Fertility Treatment
            </h3>
            <p class="ivfPara lg:pl-10 p-3 pr-5 text-justify mt-5">
              All women are qualified for IVF Treatment, success rates decline
              as their age advances, specifically those with
            </p>
            <ul class="mt-5 custom-disc pl-3 lg:pl-0 space-y-2 border-b-2 pb-5">
              <li class="lg:pl-10 pr-5">
                <span class="mr-2">•</span> Damaged and block fallopian tubes.
              </li>
              <li class="lg:pl-10 pr-5">
                <span class="mr-2">•</span> Anatomic defects of reproductive
                track preventing direct coitus.
              </li>
              <li class="lg:pl-10 pr-5">
                <span class="mr-2">•</span> Psychologic dysfunction e.g
                Vaginismus.
              </li>
              <li class="lg:pl-10 pr-5">
                <span class="mr-2">•</span> Endometriosis.
              </li>
              <li class="lg:pl-10 pr-5">
                <span class="mr-2">•</span> Unexplained infertility.
              </li>
              <li class="lg:pl-10 pr-5">
                <span class="mr-2">•</span> Cervical Failure.
              </li>
              <li class="lg:pl-10 pr-5">
                <span class="mr-2">•</span> Premature ovarian failure.
              </li>
              <li class="lg:pl-10 pr-5">
                <span class="mr-2">•</span> Reduced Sperm Count and Motility.
              </li>
              <li class="lg:pl-10 pr-5">
                <span class="mr-2">•</span> impotency.
              </li>
              <li class="lg:pl-10 pr-5">
                <span class="mr-2">•</span> Immunological failure.
              </li>
              <li class="lg:pl-10 pr-5">
                <span class="mr-2">•</span> Retrogade ejaculation.
              </li>
            </ul>
          </div>

          <div class="spacer lg:block hidden h-60  border-[#D9D9D9]"></div>

          <div class="div2 lg:pb-10  lg:border-b-2">
            <h3 class="ivf lg:text-lg w-full text-2xl lg:pl-5 lg:text-start text-center pl-3 mt-5 pr-5 mb-5">
              IVF Fertility Treatment <br className="lg:hidden" /> Process And
              Procedure
            </h3>
            <p class="ivfPara lg:pl-5 pl-3 pr-10 text-justify mt-5">
              IVF Treatment process here at our Lagos fertility facility,
              involves first proper evaluation of a client’s case by one of our
              Fertility Doctors to ascertain the peculiarity of the client’s
              case, proper explanation of treatment option and collection of
              consent form.
            </p>
            <p class="ivfPara lg:pl-5 pl-3 pr-10 text-justify mt-5">
              Then undergoing of required preliminary set of tests/screenings,
              administering of fertility drugs, monitoring of cycle, collection
              of eggs mixing of egg and sperm together outside the woman’s body
              in culture or test tube. Resulting embryos are left to grow and
              the best embryo 2-3 is then transferred into the woman’s womb. Any
              remaining embryo of good quality may be frozen for future use.
            </p>

            <div class="div5 lg:pl-5 pl-3 pb-10 lg:mt-10 lg:pb-0 mt-5  ]">
              <h3 class="ivf lg:text-lg text-2xl  w-full  mt-5 lg:pr-10 pr-3 lg:text-start text-center mb-5">
                When To Go For Fertility <br className="lg:hidden" /> Treatment
                Using IVF
              </h3>
              <p class="ivfPara lg:pr-10 pr-3 text-justify mt-5">
                As soon as possible, as success rate of IVF declines with age,
                so it’s advisable for one to seek a solution early once you
                notice you have infertility issue.
              </p>
            </div>
          </div>

          {/* <div class="spacer  h-20 border-r border-[#D9D9D9]"></div> */}
        </div>
      </div>
    </div>
  );
}
