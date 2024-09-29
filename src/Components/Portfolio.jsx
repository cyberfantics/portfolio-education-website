/**
 * Portfolio component
 *
 * A showcase of Syed Mansoor ul Hassan Bukhari's selected projects.
 */

import React from "react";

/**
 * Portfolio background image.
 *
 * Following the Hackerz theme for a dark and tech-inspired design.
 */
import image from "../images/motion-background.jpg";  // Hackerz theme background image

const imageAltText = "dark hacker-themed background with matrix-style code";

/**
 * List of projects.
 *
 * This includes Syed's notable projects with a brief description and a link to each repository.
 */
const portfolioList = [
  {
    title: "py-to-exe Converter",
    description: "A GUI-based tool to convert Python scripts into standalone executable files.",
    url: "https://github.com/CyberFantics/py-to-exe",
  },
  {
    title: "Indian Flag Generator",
    description: "A Tkinter application that draws the Indian flag with precise dimensions and colors.",
    url: "https://github.com/CyberFantics/indian-flag-tkinter",
  },
  {
    title: "AI Chatbots for Business",
    description:
      "A collection of AI-driven chatbots for businesses like restaurants, salons, and medical centers, integrated with appointment booking, CRM, and social media.",
    url: "https://github.com/CyberFantics/ai-chatbots-business",
  },
  {
    title: "Health Care Reminder App",
    description:
      "A Tkinter-based health care reminder system with customizable notifications and health tips.",
    url: "https://github.com/CyberFantics/health-care-reminder",
  },
  {
    title: "UPS Controller Using Arduino",
    description:
      "An Arduino-based UPS project designed to manage power for two 100W bulbs based on voltage, battery status, and solar input.",
    url: "https://github.com/CyberFantics/ups-arduino-controller",
  },
];

/**
 * The Portfolio component structure.
 */
const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "#0d0d0d",  // Dark background for the Hackerz theme
          color: "#00ff41",  // Matrix-style green text
          width: "60%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          borderRadius: "15px",
          border: "1px solid #00ff41",  // Green border to enhance the theme
        }}
      >
        <h2>Portfolio</h2>
        <p className="large">Explore some of the projects I've been working on:</p>
        <hr style={{ borderColor: "#00ff41" }} />  {/* Hackerz-themed horizontal line */}
        <ul
          style={{
            textAlign: "left",
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            color: "#00ff41",
          }}
        >
          {portfolioList.map((project, index) => (
            <li key={index} style={{ marginBottom: "1.5rem" }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#00ff41",
                  textDecoration: "underline",
                }}
              >
                View Project
              </a>
            </li>
          ))}
        </ul>
        <hr style={{ borderColor: "#00ff41" }} />  {/* Hackerz-themed horizontal line */}
      </div>
    </section>
  );
};

export default Portfolio;
