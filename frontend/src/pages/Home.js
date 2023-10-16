import React, {useState, useEffect} from "react";
import "./Home.css";
import {variables,imageMap} from "../Variables.js";
import Motto from "../images/motto.jpg";
import Casa1 from "../images/casa1.jpg";
import Casa2 from "../images/casa2.jpg";
import Casa3 from "../images/casa3.jpg";
import Casa4 from "../images/casa4.jpg";
import Logo from "../images/logo.png";
import { useNavigate  } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    return(
    <div>
        <div className="questions-container">
            <p>Do you want to find your dream home?</p>
            <p>Are you ready to experience luxury living at its finest?</p>
            <p>Are you ready to invest in your future with confidence?</p>
            <p>Are you willing to discover a world of possibilities?</p>
        </div>
        <div className="signup-container">
            <p>Come and join us!</p>
            <button className="signup-button" onClick={() => navigate("/register")}>Sign Up </button>
        </div>
        <div className="login-container">
            <p>Or</p>
            <button className="login-button" onClick={() => navigate("/login")}>Login </button>
            <p>if you already are enrolled in our journey</p>
        </div>
        <div className="motto-container">
            <img src={Motto} style={{width: "250px", height: "150px"}} />
            <img src={Logo} style={{width: "250px", height: "150px"}} />
        </div>
        <div className="images-container">
            <img src={Casa1} style={{width: "388px", height: "220px"}} />
            <img src={Casa2} style={{width: "387px", height: "220px"}} />
            <img src={Casa3} style={{width: "387px", height: "220px"}} />
            <img src={Casa4} style={{width: "387px", height: "220px"}} />
        </div>
    </div>
    )
}

export default Home;
