import React, { Component } from "react";
import Slider from "react-slick";
import './Carousel.css';
import Python from './images/python.jpeg'
import Dice from './images/2playerdice.PNG'
import Zen from './images/zen.PNG'
import Reactclones from './images/reactclones.jpg'
import Reddit from './images/reddit.jpg'
import Pokemon from './images/pokemon.PNG'



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
            <p>The first project I worked on was part of the 3 week developer course with Code Nation, it was a group project to create a text based adventure game in Python. This was a huge challenge to begin as we were given 1 and a half weeks to learn Python from scratch and create the game, however it turned out to be incredibly satisfying to work through.
                At first the ideas were a little too complicated for what we could achieve in the timeframe but we managed to come up with a few simple ideas that would show the skills we were learning whilst keeping the goal realistic. We began with a flowchart describing the very basics of the games layout, detailing the separate rooms the player would be lead into.
                I worked on the code whilst another team member tested it, this left me with a lot of the work but seeing my creation come to life was incredible and really solidified the idea that I wanted to take coding further to see what I could accomplish.</p>
            </div>
            <div className = "box">
            <a href = "https://github.com/Viviaana/3weekcoursepythonGame">GitHub Page</a>
            <img src = {Python} className = "pythonimg" alt="code and first screen of the game"/>
            </div>
          </div>
          <div className = "container">
            <h3 className = "carouselheaders">Portfolio Website - Coursework</h3>
            <p>For the 2nd part of the 3 week course we were given a task to create a website using simple HTML and CSS, this would be used to show the coursework which was a series of questions around the creation of the site. These covered topics ranging from research to the finalisation of the site, including researching the use of IT within businesses, designing the layout and functionality, and looking into the accessibility of the site.
            As this was the first project I'd have available to show to others I was keen to get a lot of my personality into it. I started by designing the main background image myself, keeping the style simplistic so it wouldn't be distracting and text could still be read over the top but adding a little more customisation to the overall page. I kept this the same throughout most of the site except the about me page.</p>
            <p>Since this wasn't a professional website I kept the About Me page very informal focusing on adding more personal elements, including a different design for just this one page to make it feel unique. the main goal for the design was to keep everything really simple, starting with an intro page that gave very little information and keeping the colour scheme basic to make it more readable. I was impressed with how easily the page came together, matching my original design and evolving overtime to include new things I'd learnt like animated backgrounds.</p>
            <div className = "box">
            <a href = "https://github.com/Viviaana/3weekcoursewebsite">GitHub Page</a>
            <a href = "https://viviaana.github.io/3weekcoursewebsite/">Website</a>
            </div>
          </div>
          <div className = "container">
            <h3 className = "carouselheaders">Zen Garden Project</h3>
            <p>Using the Zen Garden Project I was able to massively improve my CSS skills, starting with a basic HTML that couldn't be changed, we were tasked with duplicating the design based off just a static image. At first it seemed complicated as it included a lot of elements I hadn't used before but once I got into it I actually found it quite intuitive and thoroughly enjoyed seeing the page evolve as I learnt more.</p> 
            <p>I've been able to continue developing CSS based off this and now I'm confident in my ability to style basic pages to match expectations and I'm still using the skills I learned from this almost every day.</p>
            <div className = "box">
            <a href = "https://github.com/Viviaana/zengarden">GitHub Page</a>
            <img src = {Zen} className = "pythonimg" alt="top of the design"/>
            </div>
          </div>

          <div className = "container">
            <h3 className = "carouselheaders">Dice Games</h3>
            <p>One of the first Javascript projects we were given was to create a simple dice game where the aim was to reach a total of 20 without rolling a 1. At first this seemed rather daunting but in the end it really helped me to understand the basics of JS and this was the quickest project I managed to complete which I was incredibly proud of.
              As an extension this was developed into a 2 player version, although it was the same basic game the added player meant that it wasn't as simple as just copying the original code. 
            </p>
            <div className = "box">
            <a href = "https://viviaana.github.io/dicegame/">One player version</a>
            <a href = "https://github.com/Viviaana/2playerdice">GitHub Page</a>
            <img src = {Dice} className = "pythonimg" alt="2 player extension of the dice game"/>
            </div>
          </div>
          <div className = "container">
            <h3 className = "carouselheaders">React Website Clones</h3>
            <p>In order to practice the basics of React we were tasked with recreating static versions of various websites based off images, similar to the Zen Garden project but starting completely from scratch.
              This was a really great project to begin React with as it gave me a simple template to work new methods into, such as breaking it down into separate components, without having to begin a new project every time, I could see the new skills working in real time with my own examples. </p>
            <p>It also helped me learn how to properly group up information using div tags, allowing for certain items to be grouped together but with different styles applied, this would go on to be a great help in future projects.</p>
            <div className = "box">
            <img src = {Reactclones} className = "pythonimg" alt="code and first screen of the game"/>
            </div>
          </div>
          <div className = "container">
            <h3 className = "carouselheaders">Reddit Clone</h3>
            <p>For our first group project we decided to give mob programming a try, something we'd never tried before. It ended up working out really well for us as we all knew different little bits of React that we could contribute and no one ended up stuck on one part for too long as we all tackled the issues together. 
                This was the longest project I had worked on but seeing the progression working so quickly and having a great supportive team really kept us motivated throughout. We kept a photo of the navigation bar we had on the first day before it had been styled as a reminder of just how far we had come, and since then I've tried to do the same with other projects to help track the progression.</p>
            <p>This was my favourite project to work on as it felt like a much more realistic scenario of working as part of a team on a larger scale, working together with one person driving the code and everyone being able to have an input meant the whole process was smooth and we were able to keep each other going and ensure everyone was taking breaks and keeping on top of work.</p>
            <div className = "box">
            <a href = "https://github.com/roldhamk/reddit-project">GitHub Page</a>
            <img src = {Reddit} className = "pythonimg" alt="homepage"/>
            </div>
          </div>
          <div className = "container">
            <h3 className = "carouselheaders">Pokemon API</h3>
            <p>When learning to use Node.js to access APIs we were given time to get creative with a range of free APIs available online, so I worked with the Pokemon API to create a page that allows easy viewing of types strengths and weaknesses. 
              This was a fun project for me as I could add a more personal element to it and I had to work out the specific APIs myself which was good practice. The end result came out better than expected, though it took a lot of extra functions to get it to work properly.</p>
              <p>I used for loops to generate each element in the array regardless of how many results were returned and I added buttons instead of an input feature as the API used numbers and I wanted the user to select the type by name.</p>
            <div className = "box">
            <a href = "https://github.com/Viviaana/pokemonAPI">GitHub Page</a>
            <img src = {Pokemon} className = "pythonimg" alt="Working API to check Pokemon Stats"/>
          </div>
          </div>        
          </Slider>
      </div>
    );
  }
}