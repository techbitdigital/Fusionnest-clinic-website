import React, { useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Faq() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div data-aos="fade-up" className="lg:mt-5 mt-28 relative">
        <img
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
          className=""
          src="../../assets/Faqimg.svg"
          alt="Nurse image"
        />
        <div className="w-full overlay-container3 h-full inset-0 absolute"></div>
        <div className="absolute prop text-white inset-0 flex flex-col justify-center">
          <h1 className="text-[#fff] text-[40px] lg:ml-40 2xl:ml-60 ml-4 text-left font-extrabold">
            FAQs
          </h1>
        </div>
      </div>

      <div data-aos="fade-down" className="text-center mt-20">
        <h1 className="textcomph2 text-[#000]">Frequently Asked Questions</h1>
      </div>

      <div className="max-w-7xl lg:flex mx-auto lg:my-20 gap-10">
        {/* First Column of FAQs with 7 items */}
        <div data-aos="fade-right" className="lg:mt-10 lg:w-1/2">
          <Accordion allowToggle className="flex flex-col gap-5 text-[#000]">
            <AccordionItem className="appshadow ">
              <h2 className="">
                <AccordionButton _expanded={{ bg: "#6E2C76", color: "white" }}>
                  <Box
                    className="font-bold p-4"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    What fertility services does your clinic offer?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-4">
                Our clinic provides a range of fertility treatments including in
                vitro fertilization (IVF), intrauterine insemination (IUI), egg
                and sperm donation, fertility preservation, and hormone testing.
                Each service is designed to cater to individual needs and
                maximize chances of success.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="appshadow ">
              <h2>
                <AccordionButton _expanded={{ bg: "#6E2C76", color: "white" }}>
                  <Box
                    className="font-bold p-4"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    What should I expect during my first consultation?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-4">
                During your first visit, you’ll meet with a fertility specialist
                to discuss your medical history, any previous fertility
                treatments, and your goals. You may undergo some initial tests,
                such as bloodwork or an ultrasound, to help us understand your
                needs and recommend the most effective treatment plan.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="appshadow ">
              <h2>
                <AccordionButton _expanded={{ bg: "#6E2C76", color: "white" }}>
                  <Box
                    className="font-bold p-4"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    Why Choose Fusion Nest?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-4">
                At Fusion Nest, we are dedicated, evidence-based, and highly
                professional. We uphold the highest standards of confidentiality
                and expertise, ensuring that all treatment plans are managed
                with the utmost care and sensitivity.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="appshadow ">
              <h2>
                <AccordionButton _expanded={{ bg: "#6E2C76", color: "white" }}>
                  <Box
                    className="font-bold p-4"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    What payment options do you offer?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-4">
                Our clinic accepts various payment methods, including major
                credit cards, insurance plans, and financing options. During
                your consultation, our financial team will discuss costs and any
                financing plans that may be available to support your journey.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="appshadow ">
              <h2>
                <AccordionButton _expanded={{ bg: "#6E2C76", color: "white" }}>
                  <Box
                    className="font-bold p-4"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    Do you provide male fertility evaluations?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-4">
                Yes, male fertility is a critical part of the conception
                process, and we offer comprehensive evaluations, including semen
                analysis and hormone testing, to assess male reproductive
                health.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="appshadow ">
              <h2>
                <AccordionButton _expanded={{ bg: "#6E2C76", color: "white" }}>
                  <Box
                    className="font-bold p-4"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    Can I still pursue treatment if I have a busy schedule?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-4">
                Absolutely. Many treatments are flexible and can be coordinated
                with work or travel schedules. We offer early morning and
                evening appointments and work closely with you to make the
                process as convenient as possible.
              </AccordionPanel>
            </AccordionItem>

            {/* <AccordionItem className="appshadow ">
              <h2>
                <AccordionButton _expanded={{ bg: "#6E2C76", color: "white" }}>
                  <Box
                    className="font-bold p-4"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    How successful are fertility treatments?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-4">
                Success rates vary by treatment type and factors like age and
                overall health. For example, IVF success rates may range from
                20-40% per cycle, with younger patients often experiencing
                higher success rates. Our specialists will give you detailed
                insights based on your unique circumstances.
              </AccordionPanel>
            </AccordionItem> */}

            {/* <AccordionItem className="appshadow ">
              <h2>
                <AccordionButton _expanded={{ bg: "#6E2C76", color: "white" }}>
                  <Box
                    className="font-bold p-4"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    Is fertility treatment painful?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-4">
                While fertility treatments can involve some mild discomfort, we
                aim to minimize pain at each step. Procedures like IUI are
                typically pain-free, while IVF may cause slight cramping. We
                prioritize patient comfort and use techniques to reduce
                discomfort.
              </AccordionPanel>
            </AccordionItem> */}

            {/* <AccordionItem className="appshadow ">
              <h2>
                <AccordionButton _expanded={{ bg: "#6E2C76", color: "white" }}>
                  <Box
                    className="font-bold p-4"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    What are the risks associated with fertility treatments?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-4">
                Some patients may experience mild side effects such as bloating,
                mood swings, or headaches from fertility medications. Severe
                side effects are rare, and our medical team will monitor your
                response to medications closely to address any concerns.
              </AccordionPanel>
            </AccordionItem> */}
            <AccordionItem className="appshadow ">
              <h2>
                <AccordionButton _expanded={{ bg: "#6E2C76", color: "white" }}>
                  <Box
                    className="font-bold p-4"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    Will I need multiple cycles of treatment?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-4">
                It depends on individual circumstances. Some patients may
                achieve success with a single cycle, while others may require
                several attempts. We’ll discuss expected outcomes and tailor a
                treatment plan suited to your needs.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Second Column of FAQs with 5 items */}

        <div data-aos="fade-left" className="lg:mt-10 lg:w-1/2">
          <Accordion allowToggle className="flex flex-col gap-5 text-[#000]">
            <AccordionItem className="appshadow ">
              <h2>
                <AccordionButton _expanded={{ bg: "#6E2C76", color: "white" }}>
                  <Box
                    className="font-bold p-4"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    How long does a typical fertility treatment cycle take?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-4">
                A fertility treatment cycle generally takes 4-6 weeks, depending
                on the specific procedure and the individual's response to
                medication. Our team will provide a personalized timeline during
                your initial consultation to help you plan ahead.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="appshadow ">
              <h2>
                <AccordionButton _expanded={{ bg: "#6E2C76", color: "white" }}>
                  <Box
                    className="font-bold p-4"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    How successful are fertility treatments?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-4">
                Success rates vary by treatment type and factors like age and
                overall health. For example, IVF success rates may range from
                20-40% per cycle, with younger patients often experiencing
                higher success rates. Our specialists will give you detailed
                insights based on your unique circumstances.
              </AccordionPanel>
            </AccordionItem>

            {/* <AccordionItem className="appshadow ">
              <h2>
                <AccordionButton _expanded={{ bg: "#6E2C76", color: "white" }}>
                  <Box
                    className="font-bold p-4"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    Do you provide male fertility evaluations?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-4">
                Yes, male fertility is a critical part of the conception
                process, and we offer comprehensive evaluations, including semen
                analysis and hormone testing, to assess male reproductive
                health.
              </AccordionPanel>
            </AccordionItem> */}

            <AccordionItem className="appshadow ">
              <h2>
                <AccordionButton _expanded={{ bg: "#6E2C76", color: "white" }}>
                  <Box
                    className="font-bold p-4"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    What are the risks associated with fertility treatments?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-4">
                Some patients may experience mild side effects such as bloating,
                mood swings, or headaches from fertility medications. Severe
                side effects are rare, and our medical team will monitor your
                response to medications closely to address any concerns.
              </AccordionPanel>
            </AccordionItem>
            

            <AccordionItem className="appshadow ">
              <h2>
                <AccordionButton _expanded={{ bg: "#6E2C76", color: "white" }}>
                  <Box
                    className="font-bold p-4"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    How do I know if I need fertility treatment?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-4">
                If you’ve been trying to conceive for over a year without
                success, or six months if you’re over 35, it may be beneficial
                to consult a fertility specialist. We offer comprehensive
                evaluations to determine the best path forward based on your
                unique situation.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="appshadow ">
              <h2>
                <AccordionButton _expanded={{ bg: "#6E2C76", color: "white" }}>
                  <Box
                    className="font-bold p-4"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    What should you do if your partner's sperm count is zero?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-4">
                Male infertility is a common issue, and treatments like IVF may
                be helpful.
              </AccordionPanel>
            </AccordionItem>

           
            <AccordionItem className="appshadow ">
              <h2>
                <AccordionButton _expanded={{ bg: "#6E2C76", color: "white" }}>
                  <Box
                    className="font-bold p-4"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    What are the Payment Options?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-4">
                Clients may choose to pay 75% of the total cost before treatment
                begins, with the option to make this payment in installments.
                The remaining 25% balance is due before the end of the
                treatment.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
