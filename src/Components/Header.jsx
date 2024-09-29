/**
 * Header component
 *
 * The header section for the portfolio site.
 */

import React from "react";

/**
 * The Header component structure.
 */
const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#1a1a1d",  // Dark background matching hacker theme
        color: "#00ff41",  // Matrix green text
        padding: "1.5rem 0",
        textAlign: "center",
        borderBottom: "1px solid #00ff41",  // Green border for matrix effect
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",  // Large font size for the name
          fontWeight: "bold",
          margin: "0",
        }}
      >
        Syed Mansoor ul Hassan Bukhari
      </h1>
      <p style={{ fontSize: "1.25rem", margin: "0.5rem 0" }}>
        Full-Stack Developer | AI Enthusiast | Cybersecurity Specialist
      </p>
      <nav>
        <ul
          style={{
            listStyleType: "none",
            padding: "0",
            margin: "1rem 0",
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <li>
            <a
              href="#home"
              style={{
                color: "#00ff41",
                textDecoration: "none",
                fontSize: "1.25rem",
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              style={{
                color: "#00ff41",
                textDecoration: "none",
                fontSize: "1.25rem",
              }}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#about"
              style={{
                color: "#00ff41",
                textDecoration: "none",
                fontSize: "1.25rem",
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#footer"
              style={{
                color: "#00ff41",
                textDecoration: "none",
                fontSize: "1.25rem",
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
