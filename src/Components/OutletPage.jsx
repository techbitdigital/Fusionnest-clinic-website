import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { TraceSpinner } from "react-spinners-kit";
import Navbar from "./Navbar";
import Footer from "./Footer";

const OutletPage = () => {
  const [loader, setLoader] = useState(false);
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrollToTopVisible(true);
      } else {
        setScrollToTopVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {loader ? (
        <div className="flex justify-center spinner items-center h-screen">
          <TraceSpinner color="#672E71" size={100} />
        </div>
      ) : (
        <>
          <Navbar />
          <Outlet />
          {scrollToTopVisible && (
            <button
              onClick={scrollToTop}
              className="fixed z-50 bottom-4 right-4 bg-[#6E2C76] text-white h-12 w-12 flex justify-center items-center p-2 rounded-full shadow-lg transition-opacity duration-300"
              style={{ opacity: scrollToTopVisible ? 1 : 0 }}
            >
              <i class="fa-solid fa-arrow-up"></i>
            </button>
          )}
          <Footer />
        </>
      )}
    </>
  );
};

export default OutletPage;
