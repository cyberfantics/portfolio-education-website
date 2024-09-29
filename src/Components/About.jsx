/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Updated to a hacker-themed background image.
 * You can replace the image with any other suitable image in the "images" directory.
 */
import image from "../images/banner.png";  // Hacker-themed background

const imageAltText = "green matrix-style code background";  // Alt text for screen readers

/**
 * Short description that expands on your title on the Home component.
 */
const description =
  "I'm a cybersecurity expert and ethical hacker passionate about AI and cutting-edge technology.";

/**
 * List of skills or technologies you work on, are learning,
 * passionate about, or enjoy.
 */
const skillsList = [
  "Penetration testing",
  "Cryptography",
  "Python for cybersecurity",
  "Red Teaming",
  "AI integration in security",
  "Malware analysis",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or a quote.
 */
const detailOrQuote =
  "I believe in securing the digital world using innovative techniques. Technology should be accessible and safe for all.";

/**
 * The About component structure.
 */
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "#1a1a1d",  // Dark background for hacker feel
          color: "#00ff41",  // Matrix green text color
          width: "60%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          borderRadius: "15px",  // Rounded corners
          border: "1px solid #00ff41",  // Green border
        }}
      >
        <h2>About Me</h2>
        <p className="large">{description}</p>
        <hr style={{ borderColor: "#00ff41" }} />  {/* Green horizontal line */}
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            color: "#00ff41",  // Green list items
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr style={{ borderColor: "#00ff41" }} />  {/* Green horizontal line */}
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
