import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="body-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
