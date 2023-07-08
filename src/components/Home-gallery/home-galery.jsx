import React from 'react'
import './homegalery.css'
import { MdOutlineReadMore } from "react-icons/md";


const homegalery = () => {
  return (
    <div className="homegalery-wrapper">
      <div>
        <h2>Gallery</h2>
      </div>
      <ul className="honeycomb" lang="es">
        <li className="honeycomb-cell">
          <img
            className="honeycomb-cell__image"
            src="https://source.unsplash.com/random/1"
            alt="img"
          />
          <div className="honeycomb-cell__title">Diseño exclusivo</div>
        </li>
        <li className="honeycomb-cell">
          <img
            className="honeycomb-cell__image"
            src="https://source.unsplash.com/random/2"
            alt="img"
          />
          <div className="honeycomb-cell__title">Impermeables</div>
        </li>
        <li className="honeycomb-cell">
          <img
            className="honeycomb-cell__image"
            src="https://source.unsplash.com/random/3"
            alt="img"
          />
          <div className="honeycomb-cell__title">Tablero doble cara</div>
        </li>
        <li className="honeycomb-cell">
          <img
            className="honeycomb-cell__image"
            src="https://source.unsplash.com/random/4"
            alt="img"
          />
          <div className="honeycomb-cell__title">Maletín de empaque</div>
        </li>
        <li className="honeycomb-cell">
          <img
            className="honeycomb-cell__image"
            src="https://source.unsplash.com/random/5"
            alt="img"
          />
          <div className="honeycomb-cell__title">
            Antireflectivo<small>No vidrio</small>
          </div>
        </li>
        <li className="honeycomb-cell">
          <img
            className="honeycomb-cell__image"
            src="https://source.unsplash.com/random/6"
            alt="img"
          />
          <div className="honeycomb-cell__title">
            6 fichas<small>1 de repuesto</small>
          </div>
        </li>
        <li className="honeycomb-cell">
          <img
            className="honeycomb-cell__image"
            src="https://source.unsplash.com/random/7"
            alt="img"
          />
          <div className="honeycomb-cell__title">Tablero magnético</div>
        </li>
        <li className="honeycomb-cell honeycomb__placeholder"></li>
      </ul>
      <div className="portfolio-view-button">
        <a href="/gallery">
          {" "}
          View More <MdOutlineReadMore />
        </a>
      </div>
    </div>
  );
}

export default homegalery
