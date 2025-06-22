import React from 'react'
import CV from "../../assets/resume.pdf"
const Data = () => {
  return (
    <div>
      <div className="home__data">
        <h1 className="home__title">
          Shubham Kumar
        </h1>

        {/* <h3 className="home__subtitle">Frontend Developer</h3> */}
        <p className="home__description">I am a final-year Computer Science Engineering student at VIT Vellore with a passion for technology and innovation. Skilled in web development and machine learning, I enjoy crafting efficient solutions for complex problems. Currently, I am actively seeking job opportunities to apply my skills and grow as a professional.</p>

        <a href={CV} download="" className="button button--flex">
          <i class="uil uil-arrow-to-bottom"></i>
          Download CV
        </a>

      </div>
    </div>
  )
}

export default Data
