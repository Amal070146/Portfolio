import React from "react";
import "./services.css";
import { HiCheckCircle } from "react-icons/hi";

const services = () => {
  return (
    <section id="services" 
     className="sevice-wrapper">
      <div className="service-header">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="services_container" >
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <HiCheckCircle className="service_list_icon" />
              <p>User Research</p>
            </li>
            <li>
              <HiCheckCircle className="service_list_icon" />
              <p>Information Architecture</p>
            </li>
            <li>
              <HiCheckCircle className="service_list_icon" />
              <p>User Interface (UI) Design</p>
            </li>
            <li>
              <HiCheckCircle className="service_list_icon" />
              <p>Interaction Design</p>
            </li>
            <li>
              <HiCheckCircle className="service_list_icon" />
              <p>Prototyping and Testing</p>
            </li>
            <li>
              <HiCheckCircle className="service_list_icon" />
              <p>Visual Design</p>
            </li>
            <li>
              <HiCheckCircle className="service_list_icon" />
              <p>Accessibility</p>
            </li>{" "}
            <li>
              <HiCheckCircle className="service_list_icon" />
              <p>Collaboration and Communication</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <HiCheckCircle className="service_list_icon" />
              <p>Website Design</p>
            </li>
            <li>
              <HiCheckCircle className="service_list_icon" />
              <p>Front-End Development</p>
            </li>
            <li>
              <HiCheckCircle className="service_list_icon" />
              <p>Back-End Development</p>
            </li>
            <li>
              <HiCheckCircle className="service_list_icon" />
              <p>E-Commerce Development</p>
            </li>
            <li>
              <HiCheckCircle className="service_list_icon" />
              <p>Content Management Systems (CMS)</p>
            </li>
            <li>
              <HiCheckCircle className="service_list_icon" />
              <p>Website Maintenance and Support</p>
            </li>
            <li>
              <HiCheckCircle className="service_list_icon" />
              <p>Search Engine Optimization (SEO)</p>
            </li>
            <li>
              <HiCheckCircle className="service_list_icon" />
              <p>Web Hosting and Deployment</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default services;
