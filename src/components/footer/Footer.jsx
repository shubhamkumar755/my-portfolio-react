import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">Shubham kumar</h1>

            <ul className="footer__list">
                {/* <li>
                    <a href="#about" className='footer__link'>About</a>
                </li> */}
                <li>
                    <a href="#portfolio" className='footer__link'>Portfolio</a>
                </li>
                <li>
                    <a href="#home" className='footer__link'>Home</a>
                </li>
            </ul>

            <div className="footer__social">
                  <a href="https://www.instagram.com/_shubhamxkumar/" className='footer__social-link' target="_blank">
                      <i class="uil uil-instagram"></i>
                  </a>

                  <a href="https://www.linkedin.com/in/shubham-kumar-142a13278/" className='footer__social-link' target="_blank">
                      <i class='uil uil-linkedin-alt'></i>
                  </a>

                  <a href="https://github.com/shubhamkumar755" className='footer__social-link' target="_blank">
                      <i class="uil uil-github-alt"></i>
                  </a>
            </div>

              <span className='footer__copy'>-- Thanks for checking out my portfolio --</span>
        </div>
    </footer>
  )
}

export default Footer
