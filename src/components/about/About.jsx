import React from 'react'
import "./about.css"
import profile from "../../assets/profile.jpg"
import CV from "../../assets/resume.pdf"
import Info from './Info'
const About = () => {
    return (
        <section className="about section" id='about'>
            <h2 className="section__title">Certifications & Achievements</h2>
            {/* <span className="section__subtitle">My introduction</span> */}

            <div className="about__container container grid">
                {/* <img src={profile} alt="" className="about__img" /> */}

                <div className="about__data">
                    
                    <a href="https://drive.google.com/file/d/1R-DJW02sRvGs0HxvbQsS3xAh9Va1m6Uv/view?usp=sharing" target="#" style={{cursor:"pointer"}}>
                    <h3 className="about__description">-- Microsoft Azure AI Fundamentals:</h3> 
                    </a><p>Achieved a score of 836/1000, Validated understanding of core AI concepts and
                    Azure AI services, including machine learning, natural language processing, and computer vision.</p>

                    
            
                </div>
                <div className="about__data">

                    <a href="https://drive.google.com/file/d/1B4Gcf_g9nSfXDclq6-YD0SAdvcyCHOBp/view?usp=sharing" target="#" style={{cursor:"pointer"}}>
                        <h3 className="about__description">-- Complete A.I. & MachineLearning, Data Science Bootcamp:</h3> 
                    </a><p>Completed a comprehensive 44-hour bootcamp covering artificial intelligence, machine learning, and data science fundamentals, instructed by industry experts Andrei Neagoie and Daniel Bourke.</p>
            
                </div>
                <div className="about__data">

                    <a href="https://leetcode.com/u/shubhamkr77555/" target="#" style={{cursor:"pointer"}}>
                        <h3 className="about__description">-- Problem-Solving Experience:</h3> 
                    </a><p>Solved 450+ problems on LeetCode, enhancing expertise in data structures, algorithms, and analytical thinking.</p>
            
                </div>
            </div>
        </section>
    )
}

export default About
