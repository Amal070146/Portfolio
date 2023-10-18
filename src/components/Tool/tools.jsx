import React from "react";
import "./tools.css";

const tools = () => {
  return (
    <div className="toolsWrapper">
      <h2>Tools Used</h2>
      <div className="ToolsImgWrapper">
        <img
          src="data:image/png;base64,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"
          height="75px"
          alt="vscode"
        />

        <img
          src="https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png"
          height="75px"
          alt="img"
        />

        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/fa/d1/f1/fad1f1cc-e086-c872-7359-12699a8d3403/AppIcon-0-1x_U007emarketing-0-7-0-0-85-220.png/1200x630wa.png"
          height="75px"
          alt="img"
        />

        <img
          src="https://images.ctfassets.net/23aumh6u8s0i/6ubUHRD1qfolOVHxiBfjZ7/4e704f48dc5b0104d0c380fec1fe9b9e/django"
          height="75px"
          alt="img"
        />

        <img
          src="https://images.ctfassets.net/23aumh6u8s0i/1GpPK36EMwOOZZcQPV4YRD/8acc95b8c3639be1be1d445e5e762dae/typescript"
          height="75px"
          alt="img"
        />

        <img
          src="https://wallpaperaccess.com/full/9147315.png"
          height="70px"
          alt="img"
        />

        <img
          src="https://s3-alpha.figma.com/hub/file/2966856926/2f4e4570-ef9e-4fbf-9cfc-4fb952c47385-cover.png"
          height="75px"
          alt="img"
        />

        <img
          src="https://admin.tops-int.com/storage/course/icons/79580.png"
          height="70px"
          alt="img"
        />

        <img
          src="https://i0.wp.com/ahex.co/wp-content/uploads/2022/06/Unofficial_JavaScript_logo_2.svg.png?fit=480%2C480&ssl=1"
          height="75px"
          alt="img"
        />

        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/26/fd/5b/26fd5bfb-d741-51df-8972-fab2e92a0521/AppIcon-0-1x_U007emarketing-0-7-0-sRGB-85-220.png/1200x630wa.png"
          height="75px"
          alt="img"
        />

        <img
          src="https://velog.velcdn.com/images/hancihu/post/985ab0bb-6983-4897-a8ce-6be679472c5f/image.jpeg"
          height="75px"
          alt="tailwind"
        />

        <img
          src="https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png"
          height="75px"
          alt="c++"
        />

        <img
          src="https://ijicrack.com/wp-content/uploads/2021/02/MySQL-Crack.jpg"
          height="75px"
          alt="mysql"
        />

        <img
          src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"
          height="75px"
          alt="react"
        />

        <img
          src="https://img.favpng.com/7/11/12/github-logo-repository-computer-icons-png-favpng-dPybeZAYFbvSEiHDn0CXk5Yig.jpg"
          height="75px"
          alt="git hub"
        />
      </div>
    </div>
  );
};

export default tools;
