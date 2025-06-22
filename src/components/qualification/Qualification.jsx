import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {

    const [toggleState,settoggleState]=useState(1);

    const toggleTab=(index)=>{
        settoggleState(index);
    }

    return (
        <section className="qualification section" id="qualification">
            <h2 className='section__title'>Qualification</h2>
            <span className='section__subtitle'></span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    onClick={()=>toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    {/* <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    onClick={()=>toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div> */}
                </div>

                <div className="qualificaiton__sections">

                    {/* education */}
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        {/* college */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Btech in Computer Science Engineering</h3>
                                <span className="qualification__subtitle">
                                    Vellore Institute of Technology, Vellore
                                </span>
                                <div className="qualification__calender">
                                    <i className='uil uil-calendar-alt'></i>
                                    &nbsp;2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        {/* 12th */}
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Senior Secondary Education</h3>
                                <span className="qualification__subtitle">
                                    Delhi Public School, Patna
                                </span>
                                <div className="qualification__calender">
                                    <i className='uil uil-calendar-alt'></i>
                                    &nbsp;2020 - 2022
                                </div>
                            </div>
                        </div>

                        {/* 10th */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">High School Education</h3>
                                <span className="qualification__subtitle">
                                    Delhi Public School, Patna
                                </span>
                                <div className="qualification__calender">
                                    <i className='uil uil-calendar-alt'></i>
                                    &nbsp;2010 - 2020
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                    </div>



                    {/* experience */}
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        {/* <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Btech in Computer Science Engineering</h3>
                                <span className="qualification__subtitle">
                                    Vellore Institute of Technology, Vellore
                                </span>
                                <div className="qualification__calender">
                                    <i className='uil uil-calender-alt'></i>
                                    2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className='qualificaiton__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className='qualificaiton__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Senior Secondary Education</h3>
                                <span className="qualification__subtitle">
                                    Delhi Public School, Patna
                                </span>
                                <div className="qualification__calender">
                                    <i className='uil uil-calender-alt'></i>
                                    2020 - 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className='qualificaiton__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">High School Education</h3>
                                <span className="qualification__subtitle">
                                    Delhi Public School, Patna
                                </span>
                                <div className="qualification__calender">
                                    <i className='uil uil-calender-alt'></i>
                                    2010 - 2020
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
