import React from "react";
import "./Gallery.css";

import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { useState } from "react";

import Summit from "../../assets/certificates/Summit.webp";
import tegain from "../../assets/certificates/acptegain.webp";
import glome from "../../assets/certificates/AmalCPgomeinternship.webp";
import GDSC from "../../assets/certificates/GDSCWOW.webp";
import Beach from "../../assets/certificates/Beachhack5AmalCP.webp";
import CDW from "../../assets/certificates/cdw.webp";
import PSS from "../../assets/certificates/certificatepss2023.webp";
import Define from "../../assets/certificates/Define.webp";
import FD from "../../assets/certificates/frontenddevelopmentlibreriesfreecodecamp.webp";
import HFT from "../../assets/certificates/hackfortommorow.webp";
import RWD from "../../assets/certificates/responsive-web-design-freecodecamp.webp";
import ribc from "../../assets/certificates/ribc.webp";
import TOT from "../../assets/certificates/Tek-o-thon.webp";
import Wings from "../../assets/certificates/wings.webp";
import yip from "../../assets/certificates/yip2023voc.webp";
import stype from "../../assets/certificates/stype.webp";

const Gallery = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div>
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
      <div className="gallery-wrapper">
        <ul>
          <li>
            <img src={tegain} alt="tegain" loading="lazy" />
          </li>

          <li>
            <img src={glome} alt="Sara on a red bike" loading="lazy" />
          </li>
          <li>
            <img src={GDSC} alt="XOXO venue in between talks" loading="lazy" />
          </li>
          <li>
            <img src={Wings} alt="Wings 2022" loading="lazy" />
          </li>
          <li>
            <img src={yip} alt="YIP 2023" loading="lazy" />
          </li>
          <li>
            <img src={stype} alt="Stype Program" loading="lazy" />
          </li>
          <li>
            <img src={Summit} alt="IEDC SUMMIT" loading="lazy" />
          </li>
          <li>
            <img src={RWD} alt="Responsive Web Design" loading="lazy" />
          </li>
          <li>
            <img
              src={ribc}
              alt="Rural India Business Conclave"
              loading="lazy"
            />
          </li>
          <li>
            <img src={Beach} alt="Beach Hack" loading="lazy" />
          </li>

          <li>
            <img
              src={FD}
              alt="Frontend Developemt From Freecode Camp"
              loading="lazy"
            />
          </li>
          <li>
            <img src={CDW} alt="CODe Design Week" loading="lazy" />
          </li>

          <li>
            <img src={PSS} alt="PSS" loading="lazy" />
          </li>

          <li>
            <img src={HFT} alt="Hack For Tommorow" loading="lazy" />
          </li>

          <li>
            <img src={TOT} alt="Tek-O-Thon" loading="lazy" />
          </li>
          <li>
            <img src={Define} alt="Define Hackathon" loading="lazy" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
