import React, { lazy, Suspense, useEffect } from "react";
import useSEO from "../hooks/useSEO";
import seoConfig from "../hooks/seoConfig";
import ServiceCard from "../Components/Service/ServiceCard";

const ServiceHero = lazy(() => import("../Components/Service/ServiceHero"));

export default function Services() {
  useSEO(seoConfig.services);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Suspense
        fallback={
          <div className="flex items-center justify-center">
            <img src="/assets/loading.gif" alt="Loading..." />
          </div>
        }
      >
        <ServiceHero />
        <ServiceCard />
      </Suspense>
    </div>
  );
}
