import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import Services from "./Pages/Services";
import OutletPage from "./Components/OutletPage";
import InvitroPage from "./Components/Service/InvitroPage";
import Intrauterine from "./Components/Service/Intrauterine";
import Intracytoplasmic from "./Components/Service/Intracytoplasmic";
import SexSelection from "./Components/Service/SexSelection";
import EggDonation from "./Components/Service/EggDonation";
import SpermDonation from "./Components/Service/SpermDonation";
import Gallery from "./Pages/Gallery";
import AdminPage from "./Components/Admin";
import Faq from "./Components/FaqPages";
import Surrogacy from "./Components/Service/Surrogate";

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
        path: "Admin",
        element: <AdminPage />,
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
        path: "gallery",
        element: <Gallery />,
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
      {
        path: "faqPage",
        element: <Faq />,
      },
      {
        path: "Surrogate",
        element: <Surrogacy  />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
