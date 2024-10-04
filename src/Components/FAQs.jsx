import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const FAQs = () => {
  return (
    <>
      <div>
        <div className="text-center">
          <h1 className="textcomph1 ">Frequently Asked Questions</h1>
          <p className="textcompp lg:[155px] lg:p-0 p-3 text-justify lg:text-center mx-auto">
            Here are some frequently asked questions
          </p>
        </div>
        <div className=" max-w-7xl mx-auto lg:my-20 lg:px-40">
          <div className="lg:mt-10 ">
            <Accordion
              allowToggle
              className="flex flex-col gap-5 text-[#263D7B]"
            >
              <AccordionItem className="appshadow p-4">
                <h2>
                  <AccordionButton>
                    <Box
                      className="font-bold "
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      What is IVF? Can you explain the process for me.
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  IVF is a fertility treatment that involves fertilizing eggs
                  outside the body and then transferring <br /> the resulting
                  embryos into the uterus.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="appshadow p-4">
                <h2>
                  <AccordionButton>
                    <Box
                      className="font-bold"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      Who is qualified for IVF.
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Any woman within the child bearing age (23-45) who has
                  infertility issues.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="appshadow p-4">
                <h2>
                  <AccordionButton>
                    <Box
                      className="font-bold"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      Will I get any support during and after my treatment at
                      your centre?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  At Fusion Nest Fertility Centre we provide you with continuous
                  support throughout your IVF/Fertility treatment journey. Your
                  doctor and our fertility nurses are always available to answer
                  all your questions and guide you throughout this journey. Most
                  importantly you have someone specifically assigned to you, to
                  check on you and make sure you do/observe all that you need to
                  do and observe.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="appshadow p-4">
                <h2>
                  <AccordionButton>
                    <Box
                      className="font-bold"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      What of Fibroid do i need to remove it before IVF
                      Treatment?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  You will need the advice of a gynecologist on this one and
                  luckily we have that at Fusion Nest. The truth with fibroid is
                  that it depends on the number and the position of the fibroid
                  in some cases the fibroid has to go before the IVF treatment
                  proper.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="appshadow p-4">
                <h2>
                  <AccordionButton>
                    <Box
                      className="font-bold"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      What should you do if your partner's sperm count is zero?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Male infertility is a common issue due to azospermia, a
                  condition causing zero sperm count. IVF therapy can help, but
                  treatment can be lengthy, so consult a doctor.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="appshadow p-4">
                <h2>
                  <AccordionButton>
                    <Box
                      className="font-bold"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      My husband struggles with his count, and I'm considering
                      IVF or IUI fertility treatment, but I still have
                      hyperprolactinemia.
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Hyperprolactinaemia is a treatable condition but would like to
                  ask how is your FSH and LH level?. Have you done an HSG test
                  before? because before considering IUI, HSG has to be done
                  that shows you have a patent bilateral tubes. What of your
                  hubby have he done an SFA test? the result of this test can
                  tell us if he can go for IUI or not you for IUI. but in the
                  case of IVF, high prolactin doesn’t matter, you don’t need to
                  do HSG, and your husband sperm count is not really a problem
                  except no active cells were found in the semen
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
