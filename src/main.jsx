import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Services from "./Pages/Services";
import OutletPage from "./Components/OutletPage";
import InvitroPage from "./Components/Service/InvitroPage";
import Intrauterine from "./Components/Service/Intrauterine";
import Intracytoplasmic from "./Components/Service/Intracytoplasmic";
import SexSelection from "./Components/Service/SexSelection";
import EggDonation from "./Components/Service/EggDonation";
import SpermDonation from "./Components/Service/SpermDonation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OutletPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },
      {
        path: "Services",
        element: <Services />,
      },
      {
        path: "Blog",
        element: <Blog />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "InvitroPage",
        element: <InvitroPage />,
      },
      {
        path: "Intrauterine",
        element: <Intrauterine />,
      },
      {
        path: "Intracytoplasmic",
        element: <Intracytoplasmic />,
      },
      {
        path: "SexSelection",
        element: <SexSelection />,
      },

      {
        path: "EggDonation",
        element: <EggDonation />,
      },
      {
        path: "SpermDonation",
        element: <SpermDonation />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <OutletPage />
  </RouterProvider>
);
