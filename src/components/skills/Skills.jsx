import React from 'react'
import Frontend from './Frontend'
import MachineLearning from './MachineLearning'
import "./skills.css"

const Skills = () => {
  return (
    <section className="skills section" id='skills'>
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level (The stars represent my expertise level, with 5 stars being the highest)</span>


      <div className="skills__container container grid">


        {/* web */}
        <div className='skills__content'>
          <h3 className='skills__title'>Web development</h3>

          <div className="skills__box">
            <div className="skills__group">

              <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">HTML</h3>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star-half-alt"></i>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">CSS</h3>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uil uil-favorite"></i>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">Javascript</h3>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uil uil-favorite"></i>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">React</h3>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uil uil-favorite"></i>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">Vite</h3>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">Bootstrap</h3>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                </div>
              </div>

            </div>
          </div>
        </div>


        {/* Tools */}
        <div className='skills__content'>
          <h3 className='skills__title'>Tools</h3>

          <div className="skills__box">
            <div className="skills__group">

              <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">VS Code</h3>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uil uil-favorite"></i>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">Github</h3>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uil uil-favorite"></i>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">Jupyter/Colab</h3>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uil uil-favorite"></i>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">Appwrite</h3>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">Vercel</h3>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uil uil-favorite"></i>
                </div>
              </div>

            </div>
          </div>
        </div>




        {/* languagea */}
        <div className='skills__content' style={{ boxSizing: 'border-box' }}>
          <h3 className='skills__title'>Programming languages</h3>

          <div className="skills__box">
            <div className="skills__group">

              <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">C++</h3>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star-half-alt"></i>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">Java</h3>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star-half-alt"></i>
                  <i className="uil uil-favorite"></i>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">Python</h3>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                </div>
              </div>

            </div>
          </div>
        </div>


        {/* analysis*/}
        <div className='skills__content' style={{ boxSizing: 'border-box' }}>
          <h3 className='skills__title'>Data Analysis and Visualization</h3>

          <div className="skills__box">
            <div className="skills__group">

              <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">Pandas</h3>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uil uil-favorite"></i>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">Numpy</h3>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star-half-alt"></i>
                  <i className="uil uil-favorite"></i>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">Matplotlib</h3>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                </div>
              </div>

            </div>
          </div>
        </div>




        {/* ML*/}
        <div className='skills__content' style={{ boxSizing: 'border-box' }}>
          <h3 className='skills__title'>Machine Learning and AI</h3>

          <div className="skills__box">
            <div className="skills__group">

              <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">Scikit-learn</h3>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uil uil-favorite"></i>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">TensorFlow</h3>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                </div>
              </div>

              <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3 className="skills__name">Keras</h3>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uis uis-star"></i>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                </div>
              </div>

            </div>
          </div>
        </div>
        

      </div>

      
    </section>
  )
}

export default Skills
