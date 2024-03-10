import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailedService from "./Components/pages/Services";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Step1 from "./Components/pages/Step1";
import Step2 from "./Components/pages/Step2";
import Step3 from "./Components/pages/Step3";
import Gallery from "./Components/pages/Gallery";
import ScrollToTop from "./Components/Common/ScrollToTop";
import ErrorPage from "./Components/Common/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
  },
  {
    path: "/services.html",
    element: (
      <>
        <ScrollToTop />
        <DetailedService />,
      </>
    ),
  },
  {
    path: "/about.html",
    element: (
      <>
        <ScrollToTop />
        <About />
      </>
    ),
  },
  {
    path: "/contact.html",
    element: (
      <>
        <ScrollToTop />
        <Contact />,
      </>
    ),
  },

  {
    path: "/step-1.html",
    element: (
      <>
        <ScrollToTop />
        <Step1 />,
      </>
    ),
  },
  {
    path: "/step-2.html",
    element: (
      <>
        <ScrollToTop />
        <Step2 />
      </>
    ),
  },
  {
    path: "/step-3.html",
    element: (
      <>
        <ScrollToTop />
        <Step3 />,
      </>
    ),
  },
  {
    path: "/gallery.html",
    element: (
      <>
        <ScrollToTop />
        <Gallery />,
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <ScrollToTop />
        <ErrorPage />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
