import React, { useEffect, useState } from "react";

export default function Gallery() {
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
        <div className="space-y-3  md:ml2">
          <img className="im w-full " src="../assets/gallery/img1.svg" alt="" />
          <div>
            <img
              className="g4 w-full "
              src="../assets/gallery/img4.svg"
              alt=""
            />
            <div className="flex flex-col md:flex-row mt-3 gap-2">
              <img
                className="w-full md:xl:w-[212px] md:lg:w-[170px]"
                src="../assets/gallery/img6.svg"
                alt=""
              />
              <img
                className="w-full md:xl:w-[212px] md:lg:w-[170px]"
                src="../assets/gallery/img7.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-5 md:mt-0">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mx-2">
              <img
                className="w-full "
                src="../assets/gallery/img2.svg"
                alt=""
              />
              <img
                className="float-end ml- mt-2 w-full "
                src="../assets/gallery/img5.svg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full "
                src="../assets/gallery/img3.svg"
                alt=""
              />
            </div>
          </div>
          <div>
            <img
              className="ml-2 img mt-2 w-full "
              src="../assets/gallery/img8.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
