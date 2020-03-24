import React, { Component } from 'react';
import './Navbar.css';
import {GiWhiteCat} from "react-icons/gi";
import {GiWool} from "react-icons/gi";
import {GiFireAxe} from "react-icons/gi";
import {FaPizzaSlice} from "react-icons/fa";
// import Navigation from './Navigation'


export class Navbar extends Component {
    render() {
        return (
            <div className = "page">

            <div class = "headContain">
                <div class = "navbar" id = "navbar">
                </div>

                <div class = "headerbox">
                    <h1>Katie Ingham</h1>
                    <h2> Cat lover <GiWhiteCat className = "navicon"/> - Crocheter <GiWool className = "navicon"/> - Axe Thrower <GiFireAxe className = "navicon" /> - Foodie <FaPizzaSlice className = "navicon" /></h2>
                    <div class = "buttons">
                    <a href ="https://github.com/Viviaana">Github</a>
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Navbar
