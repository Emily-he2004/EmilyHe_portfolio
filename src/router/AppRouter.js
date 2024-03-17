import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../components/Header";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

function AppRouter() {
  return (
    <BrowserRouter className="body-wrapper">
      <div className="main-wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* <LeftNav /> */}
        {/* <RightNav /> */}
        {/* <Navigation /> */}

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
