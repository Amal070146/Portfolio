import React from 'react'

import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { useState } from "react";

const Projects = () => {
    const [activeNav, setActiveNav] = useState("#");
  return (
    <div>
      Prjoects display
      <div>
        <nav className="navbar">
          <a
            href="../"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            <AiOutlineHome />
          </a>
          <a
            href="../#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#" ? "active" : ""}
          >
            <BiUserCircle />
          </a>
          <a
            href="../#experience"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#" ? "active" : ""}
          >
            <BsJournalBookmarkFill />
          </a>
          <a
            href="../#services"
            onClick={() => setActiveNav("#services")}
            className={activeNav === "#" ? "active" : ""}
          >
            <MdOutlineHomeRepairService />
          </a>
          <a
            href="../#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#" ? "active" : ""}
          >
            <TbMessages />
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Projects
