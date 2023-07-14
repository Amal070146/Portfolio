import React from 'react'
import './tools.css'

const tools = () => {
  const design_card_butttons = document.querySelectorAll(".design-card");
  const introduction_text = document.querySelectorAll(".introduction-text");

  const single_profile_card = document.querySelectorAll(".single-profile-card");
  const testimonial_card = document.querySelectorAll(".testimonial-card");

  design_card_butttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      introduction_text.forEach((introduction, introductionIndex) => {
        if (index === introductionIndex) {
          introduction.style.display = "block";
        } else {
          introduction.style.display = "none";
        }
      });
      design_card_butttons.forEach((btn, btnIndex) => {
        if (index === btnIndex) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
    });
  });

  single_profile_card.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      testimonial_card.forEach((testimonialCard, testimonialCardIndex) => {
        if (index === testimonialCardIndex) {
          testimonialCard.style.display = "block";
        } else {
          testimonialCard.style.display = "none";
        }
      });
      single_profile_card.forEach((cardBtn, cardIndex) => {
        if (index === cardIndex) {
          cardBtn.classList.add("profile-card-active");
        } else {
          cardBtn.classList.remove("profile-card-active");
        }
      });
    });
  });
  return (
    <div>
      <h2>Tools Used</h2>
      <section id="content-body">
        <div class="body-part-2">
          <div class="hoodie-guy-animation-class">
       
            <div class="circle">
              <span style={{ "--i": 1 }}>
                <img
                  src="https://yt3.googleusercontent.com/ytc/AOPolaQ4-CWs1qmtt_r7jqGLE0j82QjRG9KltN0hRIRN=s900-c-k-c0x00ffffff-no-rj"
                  height="75px"
                  alt="img"
                />
              </span>
              <span style={{ "--i": 2 }}>
                <img
                  src="https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png"
                  height="75px"
                  alt="img"
                />
              </span>
              <span style={{ "--i": 3 }}>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/fa/d1/f1/fad1f1cc-e086-c872-7359-12699a8d3403/AppIcon-0-1x_U007emarketing-0-7-0-0-85-220.png/1200x630wa.png"
                  height="75px"
                  alt="img"
                />
              </span>
              <span style={{ "--i": 4 }}>
                <img
                  src="https://images.ctfassets.net/23aumh6u8s0i/6ubUHRD1qfolOVHxiBfjZ7/4e704f48dc5b0104d0c380fec1fe9b9e/django"
                  height="75px"
                  alt="img"
                />
              </span>
              <span style={{ "--i": 5 }}>
                <img
                  src="https://images.ctfassets.net/23aumh6u8s0i/1GpPK36EMwOOZZcQPV4YRD/8acc95b8c3639be1be1d445e5e762dae/typescript"
                  height="75px"
                  alt="img"
                />
              </span>
              <span style={{ "--i": 6 }}>
                <img
                  src="https://wallpaperaccess.com/full/9147315.png"
                  height="70px"
                  alt="img"
                />
              </span>
              <span style={{ "--i": 7 }}>
                <img
                  src="https://s3-alpha.figma.com/hub/file/2966856926/2f4e4570-ef9e-4fbf-9cfc-4fb952c47385-cover.png"
                  height="75px"
                  alt="img"
                />
              </span>
              <span style={{ "--i": 8 }}>
                <img
                  src="https://admin.tops-int.com/storage/course/icons/79580.png"
                  height="70px"
                  alt="img"
                />
              </span>
              <span style={{ "--i": 9 }}>
                <img
                  src="https://i0.wp.com/ahex.co/wp-content/uploads/2022/06/Unofficial_JavaScript_logo_2.svg.png?fit=480%2C480&ssl=1"
                  height="75px"
                  alt="img"
                />
              </span>
              <span style={{ "--i": 10 }}>
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/26/fd/5b/26fd5bfb-d741-51df-8972-fab2e92a0521/AppIcon-0-1x_U007emarketing-0-7-0-sRGB-85-220.png/1200x630wa.png"
                  height="75px"
                  alt="img"
                />
              </span>
              <span style={{ "--i": 11 }}>
                <img
                  src="https://velog.velcdn.com/images/hancihu/post/985ab0bb-6983-4897-a8ce-6be679472c5f/image.jpeg"
                  height="75px"
                  alt="img"
                />
              </span>
              <span style={{ "--i": 12 }}>
                <img
                  src="https://media.sketchfab.com/models/1b277fc32bbc451fa6f40e298996ba91/thumbnails/1c9c06b1fa3c4aaaa94a70bc7bfc3c7e/d369fbc48d5b479bb657791e4026ca34.jpeg"
                  height="75px"
                  alt="img"
                />
              </span>
              <span style={{ "--i": 13 }}>
                <img
                  src="https://ijicrack.com/wp-content/uploads/2021/02/MySQL-Crack.jpg"
                  height="75px"
                  alt="img"
                />
              </span>
              <span style={{ "--i": 14 }}>
                <img
                  src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"
                  height="75px"
                  alt="img"
                />
              </span>
              <span style={{ "--i": 15 }}>
                <img
                  src="https://img.favpng.com/7/11/12/github-logo-repository-computer-icons-png-favpng-dPybeZAYFbvSEiHDn0CXk5Yig.jpg"
                  height="75px"
                  alt="img"
                />
              </span>
            </div>
          </div>
          <div class="background-circle"></div>
        </div>
      </section>
    </div>
  );
}

export default tools
