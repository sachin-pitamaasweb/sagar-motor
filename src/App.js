import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Infrastructure from "./pages/Infrastructure";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 5 seconds or when assets are loaded
    }, 1000); // Set this duration to your desired loading time (5s here)

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      {
        loading ? (
          <>

            <Loader />
          </>
        ) :
          <>
            <Router>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/infrastructure" element={<Infrastructure />} />
              </Routes>
              <Footer />
            </Router>
          </>
      }
    </>
  );
};

export default App;