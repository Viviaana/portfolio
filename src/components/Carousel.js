import React, { Component } from "react";
import Slider from "react-slick";
import './Carousel.css';
import Python from './images/python.jpeg'
import Dice from './images/2playerdice.PNG'
import Zen from './images/zen.PNG'
import Reactclones from './images/reactclones.jpg'
import Reddit from './images/reddit.jpg'


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div className = "container">
            <h3 className = "carouselheaders">Python Game - Nexus Awakened</h3>
            <div>
            <p>The first project I worked on was part of the 3 week developer course with Code Nation, it was a group project to create a text based adventure game in Python. This was a huge challenge to begin as we were given 1 and a half weeks to learn Python from scratch and create the game, however it turned out to be incredibly satisfying to work through.</p>
            <p>At first the ideas were a little too complicated for what we could achieve in the timeframe but we managed to come up with a few simple ideas that would show the skills we were learning whilst keeping the goal realistic. We began with a flowchart describing the very basics of the games layout, detailing the separate rooms the player would be lead into.</p>
            </div>
            <div className = "box">
            <a href = "https://github.com/Viviaana/3weekcoursepythonGame">GitHub Page</a>
            <img src = {Python} className = "pythonimg" alt="code and first screen of the game"/>
            </div>
          </div>
          <div className = "container">
            <h3 className = "carouselheaders">Portfolio Website - Coursework</h3>
            <p>For the 2nd part of the 3 week course we were given a task to create a website using simple HTML and CSS, this would be used to show the coursework which was a series of questions around the creation of the site. These covered topics ranging from research to the finalisation of the site, including researching the use of IT within businesses, designing the layout and functionality, and looking into the accessibility of the site.</p>
            <p>As this was the first project I'd have available to show to others I was keen to get a lot of my personality into it. I started by designing the main background image myself, keeping the style simplistic so it wouldn't be distracting and text could still be read over the top but adding a little more customisation to the overall page. I kept this the same throughout most of the site except the about me page.</p>
            <p>Since this wasn't a professional website I kept the about me very informal</p>
            <div className = "box">
            <a href = "https://github.com/Viviaana/3weekcoursewebsite">GitHub Page</a>
            <a href = "https://viviaana.github.io/3weekcoursewebsite/">Website</a>
            </div>
          </div>
          <div className = "container">
            <h3 className = "carouselheaders">Zen Garden Project</h3>
            <p>Using the Zen Garden Project I was able to massively improve my CSS skills, </p>
            <div className = "box">
            <a href = "https://github.com/Viviaana/zengarden">GitHub Page</a>
            <img src = {Zen} className = "pythonimg" alt="code and first screen of the game"/>
            </div>
          </div>

          <div className = "container">
            <h3 className = "carouselheaders">Dice Games</h3>
            <p></p>
            <div className = "box">
            <a href = "https://viviaana.github.io/dicegame/">One player version</a>
            <a href = "https://github.com/Viviaana/2playerdice">GitHub Page</a>
            <img src = {Dice} className = "pythonimg" alt="2 player extension of the dice game"/>
            </div>
          </div>
          <div className = "container">
            <h3 className = "carouselheaders">React Website Clones</h3>
            <p></p>
            <div className = "box">
            <a href = "https://github.com/Viviaana/3weekcoursepythonGame">GitHub Page</a>
            <img src = {Reactclones} className = "pythonimg" alt="code and first screen of the game"/>
            </div>
          </div>
          <div className = "container">
            <h3 className = "carouselheaders">Reddit Clone</h3>
            <p></p>
            <div className = "box">
            <a href = "https://github.com/roldhamk/reddit-project">GitHub Page</a>
            <a href = "https://viviaana.github.io/3weekcoursewebsite/">Website</a>
            <img src = {Reddit} className = "pythonimg" alt="code and first screen of the game"/>
            </div>
          </div>        
          </Slider>
      </div>
    );
  }
}