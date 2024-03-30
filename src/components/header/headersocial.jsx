import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";

const headersocial = () => {
  return (
    <div className="header_socials">
      <a
        href="https://twitter.com/amalcpaulson"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/amal-c-p/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://github.com/amalcpaulson/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineGithub />
      </a>
      <a
        href="https://www.instagram.com/amalcpaulson/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillInstagram />
      </a>
    </div>
  );
};

export default headersocial;
