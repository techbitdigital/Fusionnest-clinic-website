import React, { lazy, Suspense } from "react";
const Hero = lazy(() => import("../Components/AboutFolder/AboutHero"));
const WhoWeAre = lazy(() => import("../Components/AboutFolder/WhoWeAre"));
const OurVision = lazy(() => import("../Components/AboutFolder/OurVision"));
const AbtDoctors = lazy(() => import("../Components/AboutFolder/AbtDoctors"));

export default function AboutUs() {
  return (
    <div>
      <Suspense
        fallback={
          <img
            className="flex items-center justify-center"
            src="/assets/loading.gif"
            alt="Loading..."
          />
        }
      >
        <Hero />
        <WhoWeAre />
        <OurVision />
        <AbtDoctors />
      </Suspense>
    </div>
  );
}
