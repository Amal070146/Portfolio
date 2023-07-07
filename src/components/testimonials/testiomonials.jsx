import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/amalcp.png";
import AVTR2 from "../../assets/amalcp.png";
import AVTR3 from "../../assets/amalcp.png";
import AVTR4 from "../../assets/amalcp.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Some name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magni nostrum expedita laudantium commodi molestiae deleniti officiis soluta. Voluptate minima temporibus quaerat excepturi natus repellendus corporis aperiam modi incidunt.",
  },
  {
    avatar: AVTR1,
    name: "Some name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magni nostrum expedita laudantium commodi molestiae deleniti officiis soluta. Voluptate minima temporibus quaerat excepturi natus repellendus corporis aperiam modi incidunt.",
  },
  {
    avatar: AVTR1,
    name: "Some name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magni nostrum expedita laudantium commodi molestiae deleniti officiis soluta. Voluptate minima temporibus quaerat excepturi natus repellendus corporis aperiam modi incidunt.",
  },
  {
    avatar: AVTR1,
    name: "Some name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magni nostrum expedita laudantium commodi molestiae deleniti officiis soluta. Voluptate minima temporibus quaerat excepturi natus repellendus corporis aperiam modi incidunt.",
  },
];

const testiomonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container" 
       // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default testiomonials;
