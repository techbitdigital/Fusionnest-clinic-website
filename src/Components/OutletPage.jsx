import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { SwapSpinner } from "react-spinners-kit";
import Navbar from "./Navbar";
import Footer from "./Footer";

const OutletPage = () => {
  const [loader, setLoader] = useState(true); // Set loader to true initially
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
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

  if (loader) {
    return (
      <div className="flex justify-center spinner items-center h-screen">
        <SwapSpinner color="#672E71" size={100} />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Outlet />
      {scrollToTopVisible && (
        <button
          onClick={scrollToTop}
          className="fixed z-30 bottom-4 right-4 bg-[#6E2C76] text-white h-12 w-12 flex justify-center items-center p-2 rounded-full shadow-lg transition-opacity duration-300"
          style={{ opacity: scrollToTopVisible ? 1 : 0 }}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
      <Footer />
    </>
  );
};

export default OutletPage;
