/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";  // Hacker-themed CSS file

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed as properties to the
 * components that need that information.
 */
const siteProps = {
  name: "Syed Mansoor ul Hassan Bukhari",
  title: "AI Engineer and Ethical Hacker",
  email: "digital.creator380@gmail.com",
  gitHub: "cyberfantics",
  instagram: "cyberfantics",
  linkedIn: "mansoor-bukhari-77549a264",
  medium: "",
  twitter: "",
  youTube: "",
};

// Hacker theme colors
const primaryColor = "#1a1a1d";  // Dark background
const secondaryColor = "#00ff41";  // Matrix green for highlights

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
