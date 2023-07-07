import React from "react";
import "./bfooter.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const bfooter = () => {
  return (
    <footer>
   

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/gallery">Gallery</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* <div className="footer_socials">
        <a href="https://www.facebook.com/amal.cpaulson/">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/amalcpaulson/">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/amalcpaulson">
          <FaTwitter />
        </a>
      </div> */}

      <div className="footer_copyright">
        <small>&copy; All rights reserved</small>
      </div>
    </footer>
  );
};

export default bfooter;
