import React from "react";

import Header from "./components/Header";
import LeftNav from "./components/LeftNav";
import RightNav from "./components/RightNav";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import AppRouter from "./";

function App() {
  return (
    <div>
      <Header />

      <Home />
      <About />
      <Projects />
      <Contact />

      <LeftNav />
      <RightNav />
      <Navigation />

      <Footer />
    </div>
  );
}

export default App;
