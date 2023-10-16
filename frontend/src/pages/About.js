import React, {Component} from "react";
import "./About.css";

const About = () => {
    return(
    <div>
        <div className="about-label">
            <p>About us</p>
        </div>
        <div className="bullets">
        <div className="our-mission">
            <h3 className="our-mission-label" style={{display: 'flex', justifyContent: 'center'}}>Our Mission</h3>
            <h3 className="our-mission-text" style={{textAlign: 'center'}}>Here at Elite Imob we are committed to helping our clients achieve their real estate goals.
                Our mission is to provide our clients with unparalleled service, expertise and guidance throughout the entire process.
                We are dedicated to delivering exceptional results and creating long-term relationships with our clients.</h3>
        </div>
        <div className="history">
            <h3 className="history-label" style={{display: 'flex', justifyContent: 'center'}}>Company History</h3>
            <h3 className="history-text" style={{textAlign: 'center'}}>Founded in 2010, Elite Imob has been a trusted name in the industry for over 10 years.
                                                                       Our founder, Anne Smith, started the company with a passion for real estate and a desire to help others achieve their dreams of homeownership.
                                                                       Since then, we have grown into a team of professional with a wealth knowledge and experience.</h3>
        </div>
        <div className="values">
            <h3 className="values-label" style={{display: 'flex', justifyContent: 'center'}}>Our Values</h3>
            <h3 className="values-text" style={{textAlign: 'center'}}>At Elite Imob, we believe in putting our clients first. Our core values of honesty,
             integrity, and transparency guide everything we do, and we are committed to providing our clients with the highest level of service and
             professionalism. We believe that every client deserves personalized attention and tailored solutions to meet their unique needs.</h3>
        </div>
        </div>
    </div>
    )
}

export default About;
