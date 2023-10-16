import React, {Component} from "react";
import "./Contact.css";
import Facebook from '../images/facebook.png';
import Insta from '../images/insta.jpg';
import Twitter from '../images/twitter.png';

const Contact = () => {
    return(
    <div>
        <div>
            <p className="findus-label">How can you find us?</p>
        </div>
        <div className="bubbles">
        <div className="call">
            <h3 className="call-label" style={{display: 'flex', justifyContent: 'center'}}>You can call us</h3>
            <h3 className="call-text" style={{textAlign: 'center'}}>Phone number: +0123 456 789
                                                                    <p>+9876 543 210</p>
                                                                    +1923 456 789</h3>
            <h3 className="call-text" style={{textAlign: 'center'}}>What’s app: +1234 567 890</h3>
        </div>
        <div className="visit">
            <h3 className="visit-label" style={{display: 'flex', justifyContent: 'center'}}>You can visit us</h3>
            <h3 className="visit-text" style={{textAlign: 'center'}}>Address: Cluj-Napoca, st. Horea 20
                                                                    <p>Bucuresti, st. Decebal 37A</p>
                                                                    Timisoara, st. Muresului 18</h3>
        </div>
        <div className="mail">
            <h3 className="mail-label" style={{display: 'flex', justifyContent: 'center'}}>You can e-mail us</h3>
            <h3 className="mail-text" style={{textAlign: 'center'}}>E-mail: elite_imob@yahoo.com
                                                                    <p>Gmail: elite_imob@gmail.com</p></h3>
        </div>
        </div>
        <div className="social">
            <h3 className="social-label" style={{display: 'flex', justifyContent: 'center'}}>And you can follow us on social media</h3>
             <div className="icons">
                <a className="fb" href="https://www.facebook.com">
                    <img src={Facebook} width="80" height="70" alt="Facebook" />
                </a>
                <a className="in" href="https://www.intagram.com">
                    <img src={Insta} width="80" height="70" alt="Instagram" />
                </a>
                <a className="tw" href="https://www.twitter.com">
                    <img src={Twitter} width="80" height="70" alt="Twitter" />
                </a>
             </div>
        </div>
        <div class="form-container">
        <textarea className="area" placeholder="Enter your message here..." rows="5" cols="80"></textarea>
        <button className="send-button">Send</button>
        </div>
    </div>
    )
}

export default Contact;
