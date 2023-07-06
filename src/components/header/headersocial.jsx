import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";

const headersocial = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/amal-c-p/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Amal070146/" target="_blank">
        <FaGithubSquare />
      </a>
      <a href="https://twitter.com/amalcpaulson" target="_blank">
        <AiFillTwitterSquare />
      </a>
    </div>
  );
};

export default headersocial;
