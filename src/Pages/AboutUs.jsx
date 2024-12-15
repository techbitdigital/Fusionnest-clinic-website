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
          <div className="flex  items-center justify-center">
            <img src="/assets/loading.gif" alt="Loading..." />
          </div>
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
