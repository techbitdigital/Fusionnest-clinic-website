import React, { useEffect, useState } from "react";
import useSEO from "../hooks/useSEO";
import seoConfig from "../hooks/seoConfig";

export default function Gallery() {
  useSEO(seoConfig.gallery);

  // const [galleryData, setGalleryData] = useState([]);
  // useEffect(() => {
  //   // Fetch the gallery data from the API
  //   fetch("http://localhost:1337/api/galleries?populate=*")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Assuming the data is stored in data.data array
  //       setGalleryData(data.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching gallery data:", error);
  //     });
  // }, []);

  return (
    <div className="max-w-7xl m-auto mb-20 mt-28 lg:mt-0 p-2">
      {/* {galleryData.length > 0 ? (
        galleryData.map((item, index) => ( */}
      <div className="flex flex-col lg:flex-row mt-5">
        <div className="space-y-3 md:ml2">
          <img
            className="im w-full"
            src="../assets/gallery/img1.svg"
            alt="Fusion Nest Fertility Centre reception and waiting area in Lagos"
          />
          <div>
            <img
              className="g4 w-full"
              src="../assets/gallery/img4.svg"
              alt="Fusion Nest Fertility Centre laboratory and IVF equipment"
            />
            <div className="flex flex-col md:flex-row mt-3 gap-2">
              <img
                className="w-full md:xl:w-[212px] md:lg:w-[170px]"
                src="../assets/gallery/img6.svg"
                alt="Fertility specialist consulting with a patient at Fusion Nest Lagos"
              />
              <img
                className="w-full md:xl:w-[212px] md:lg:w-[170px]"
                src="../assets/gallery/img7.svg"
                alt="Fusion Nest Fertility Centre modern clinical facility Lagos"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 md:mt-0">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mx-2">
              <img
                className="w-full"
                src="../assets/gallery/img2.svg"
                alt="Happy couple after successful IVF treatment at Fusion Nest Fertility Centre"
              />
              <img
                className="float-end ml- mt-2 w-full"
                src="../assets/gallery/img5.svg"
                alt="Fusion Nest IVF procedure room and embryology lab Lagos Nigeria"
              />
            </div>
            <div>
              <img
                className="w-full"
                src="../assets/gallery/img3.svg"
                alt="Fusion Nest Fertility Centre medical team and fertility specialists Lagos"
              />
            </div>
          </div>
          <div>
            <img
              className="ml-2 img mt-2 w-full"
              src="../assets/gallery/img8.svg"
              alt="Fusion Nest Fertility Centre patient care and consultation room Lagos"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
