import React, { lazy, Suspense } from "react";

const Hero = lazy(() => import("../Components/AboutHero"));
const WhoWeAre = lazy(() => import("../Components/WhoWeAre"));
const OurVision = lazy(() => import("../Components/OurVision"));

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
      </Suspense>
    </div>
  );
}
