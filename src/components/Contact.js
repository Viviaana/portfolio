import React, { Component } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './Contact.css'

export class Contact extends Component {
    render() {
        return (
            <div className = "page">
                <div className = "contact" id="contact">
                    <h3>Contact</h3>
                    <div className = "email">
                        <p>Email Me</p>
                        <p>Your email address</p>
                        <p>header</p>
                        <p>Message</p>
                    <button>send</button>
                    </div>
                    <div className = "icons">
                    <div className = "linked">
                    <a href = "https://www.linkedin.com/in/katie-ingham-176116164/"><FaLinkedin /></a>
                    </div>
                    <div className = "git">
                    <a href = "https://github.com/Viviaana"><FaGithubSquare /></a>
                    </div>
                    <div className = "insta">
                    <a href = "https://www.instagram.com/world_of_woolcraft/?hl=en"><FaInstagram /></a>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
