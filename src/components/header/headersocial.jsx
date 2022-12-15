import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillDribbbleSquare } from "react-icons/ai";

const headersocial = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithubSquare />
      </a>
      <a href="https://dribble.com" target="_blank">
        <AiFillDribbbleSquare />
      </a>
    </div>
  );
};

export default headersocial;
