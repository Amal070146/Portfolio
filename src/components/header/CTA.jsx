import React from 'react'
import CV from '../../assets/CV_Resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="cta-btn1">
        Download Me
      </a>
      {/* <a href="#contact" className="cta-btn2">
        Lets Talk
      </a> */}
    </div>
  );
}

export default CTA