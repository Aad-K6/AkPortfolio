import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
        <Helmet>
          <meta name="description" content="I am a web developer, UX/UI designer, and data analyst." />
          <meta name="keywords" content="web developer, ux/ui designer, data analyst, cognitive science, data science, SGU, Sanjay Ghodawat University, SGI, full stack, front end, back end, react, javascript, html, css, python, java, c++, sql, mongodb, node.js, express, bootstrap, material ui, react bootstrap" />
          <meta name="author" content="Aaditi Kshirsagar" />
        </Helmet>
      </div>
    </Router>
  );
}

export default App;
