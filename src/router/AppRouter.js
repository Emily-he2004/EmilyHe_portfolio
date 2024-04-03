import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { SiteModeProvider } from "../context/SiteMode";

import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import SingleProject from "../pages/SingleProject";
import Contact from "../pages/Contact";

function AppRouter() {
  const restBase = "https://emilyhe.ca/portfolio/wp-json/wp/v2/";

  // const [clicked, setClicked] = useState(false);
  // const [siteMode, setSiteMode] = useState("pages");

  // const siteModeToggle = () => {
  //   setSiteMode(siteMode === "pages" ? "scroll" : "pages");
  // };

  // const handleNavLinkClick = (event) => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });

  //   const lis = document.querySelectorAll(".nav-menu li");
  //   lis.forEach((li) => {
  //     li.classList.remove("clicked");
  //   });

  //   setClicked(true);
  //   event.target.closest("li").classList.add("clicked");
  // };

  // const smoothScroll = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <SiteModeProvider>
      <BrowserRouter>
        <div className="body-wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Home restBase={restBase} />} />

            <Route path="/about" element={<About restBase={restBase} />} />

            <Route
              path="/projects"
              element={<Projects restBase={restBase} />}
            />

            <Route
              path="/project/:slug"
              element={<SingleProject restBase={restBase} />}
            />

            <Route path="/contact" element={<Contact restBase={restBase} />} />
          </Routes>
          <Footer />
          <Navigation />
        </div>
      </BrowserRouter>
    </SiteModeProvider>
  );
}

export default AppRouter;
