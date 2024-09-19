import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Infrastructure from "./pages/Infrastructure";

const App = () => {
  return (
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
      </Router>
    </>
  );
};

export default App;