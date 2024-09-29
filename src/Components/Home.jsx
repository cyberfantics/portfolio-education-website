/**
 * Home component
 *
 * The landing page for your portfolio.
 */

import React from "react";

/**
 * Background image for the Home component.
 */
import image from "../images/motion-background.jpg";  // Hacker-themed background

const imageAltText = "dark, techy background with glowing green code";

/**
 * The Home component structure.
 */
const Home = () => {
  return (
    <section className="padding" id="home">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "#1a1a1d",  // Dark background to match hacker feel
          color: "#00ff41",  // Matrix green text
          width: "60%",
          padding: "6rem",
          margin: "3rem auto",
          textAlign: "center",
          borderRadius: "15px",
          border: "1px solid #00ff41",  // Green border for matrix effect
        }}
      >
        <h1>Syed Mansoor ul Hassan Bukhari</h1>
        <p style={{ fontSize: "1.5rem", margin: "1.5rem 0" }}>
          A passionate cybersecurity expert, AI enthusiast, and full-stack developer, 
          creating innovative solutions to modern technical challenges.
        </p>
        <hr style={{ borderColor: "#00ff41" }} />  {/* Green horizontal line */}
        <p style={{ fontSize: "1.25rem" }}>
          Explore my portfolio to see a selection of my key projects and contributions
          in the fields of Cybersecurity, AI, Web Development, and Automation.
        </p>
        <p style={{ fontSize: "1.25rem", marginTop: "2rem" }}>
          Stay tuned as I continuously update my work and share new tools, applications, 
          and research.
        </p>
        <hr style={{ borderColor: "#00ff41" }} />  {/* Green horizontal line */}
      </div>
    </section>
  );
};

export default Home;
