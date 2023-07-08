import React from 'react'
import './homegalery.css'

const homegalery = () => {
  return (
    <div className='homegalery-wrapper'>
        <div>
            <h2>Gallery</h2>
        </div>
      <ul class="honeycomb" lang="es">
        <li class="honeycomb-cell">
          <img
            class="honeycomb-cell__image"
            src="https://source.unsplash.com/random/1"
          />
          <div class="honeycomb-cell__title">Diseño exclusivo</div>
        </li>
        <li class="honeycomb-cell">
          <img
            class="honeycomb-cell__image"
            src="https://source.unsplash.com/random/2"
          />
          <div class="honeycomb-cell__title">Impermeables</div>
        </li>
        <li class="honeycomb-cell">
          <img
            class="honeycomb-cell__image"
            src="https://source.unsplash.com/random/3"
          />
          <div class="honeycomb-cell__title">Tablero doble cara</div>
        </li>
        <li class="honeycomb-cell">
          <img
            class="honeycomb-cell__image"
            src="https://source.unsplash.com/random/4"
          />
          <div class="honeycomb-cell__title">Maletín de empaque</div>
        </li>
        <li class="honeycomb-cell">
          <img
            class="honeycomb-cell__image"
            src="https://source.unsplash.com/random/5"
          />
          <div class="honeycomb-cell__title">
            Antireflectivo<small>No vidrio</small>
          </div>
        </li>
        <li class="honeycomb-cell">
          <img
            class="honeycomb-cell__image"
            src="https://source.unsplash.com/random/6"
          />
          <div class="honeycomb-cell__title">
            6 fichas<small>1 de repuesto</small>
          </div>
        </li>
        <li class="honeycomb-cell">
          <img
            class="honeycomb-cell__image"
            src="https://source.unsplash.com/random/7"
          />
          <div class="honeycomb-cell__title">Tablero magnético</div>
        </li>
        <li class="honeycomb-cell honeycomb__placeholder"></li>
      </ul>
    </div>
  );
}

export default homegalery
