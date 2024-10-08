import React, { lazy, Suspense, useEffect } from "react";
import ServiceCard from "../Components/Service/ServiceCard";

const ServiceHero = lazy(() => import("../Components/Service/ServiceHero"));

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        <ServiceHero />
        <ServiceCard />
      </Suspense>
    </div>
  );
}
