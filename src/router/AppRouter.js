import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

function AppRouter() {

  const restBase = 'https://emilyhe.ca/portfolio/wp-json/wp/v2/'

  return (
    <BrowserRouter>
      <div className="body-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home restBase={restBase} />} />
          <Route path="/about" element={<About restBase={restBase} />} />
          <Route path="/projects" element={<Projects restBase={restBase} />} />
          <Route path="/contact" element={<Contact restBase={restBase} />} />
        </Routes>
        <Footer />
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
