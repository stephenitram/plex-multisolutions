// App.jsx
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import NotFound from "./pages/NotFound";
import Gallery from "./components/Gallery";
import PlexAcademy from "./pages/PlexAcademy";
import Clock from "./components/Clock";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-black min-h-screen !scroll-smooth">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Gallery />
              </>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/plexacademy" element={<PlexAcademy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          {/* <ScrollToTopButton /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

// useEffect(() => {
//   AOS.init({ duration: 1000 });
// }, []);

export default App;
