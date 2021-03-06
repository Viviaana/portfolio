import React, { Component } from 'react';
import './About.css';
import profile from './images/profile.jpg';
import Keyskills from "./Keyskills"

export class About extends Component {
    render() {
        return (
            <div className = "page">
            <div className = "aboutcontainer">
                <div className = "about" id = "about">
                <h3>About Me</h3>
                <div className ="aboutcontent">
                    <div className="p1">
                        <p>Growing up in the 90's I got to see technology evolve faster than anyone could keep up with and I loved it. As far back as I can remember I was obsessed with computers and gaming, from the SNES at the after school club that I’d hog constantly, to finally getting my very own Gameboy and playing Super Mario 2 for so long I’d go through so many batteries, even just getting to play the storybook point and click adventures in school. To this day I’m still hooked and comparing new games to what I grew up with still blows my mind. A lot of my time is taken up by gaming, I even recently set up a game room in my house including all my childhood consoles and a full set up for my PC, Even though I’m a secret old lady, spending most of my time crocheting with my cat, but it’s not all indoors. I’m also an axe thrower, I was part of a league over the last year and I’ve spent months working on the perfect throw, I can now almost hit the target sometimes!</p>
                    </div>
                    <div className = "imgbox">
                    <div className="image">
                        <img src={profile} alt="profile"/>
                    </div>
                    <div className="p2">
                        <p> After leaving school I decided to go straight into work and began a career in purchasing, spanning 7 years and 2 companies. I was always determined in each role to strive for the best, thriving on challenges and ensuring every ran as smoothly as possible. 
                            As my ambitions grew I made the decision to move to a bigger city for more opportunities, settling in Manchester at LateRooms as an Affiliate Account Executive. Working for a large tech company was a huge change and I ended up working more and more with the IT department, troubleshooting issues and working on how to improve the system.
                            It was fascinating and I ended up spending more time working on the tech side, learning Google Analytics and completely renovating old processes to work more efficiently. Eventually though LateRooms went out of business, but I took that as an opportunity to continue growing within tech and find a career I'd actually enjoy.
                            This is when I began working with Code Nation, starting on a 3 week developer course where I absolutely fell in love. It finally felt like I was doing something worthwhile and I could definitely see myself taking it further going forward. This lead me to applying for apprenticeships with Code Nation and eventually being successful with Music Magpie.
                            I'm still at the start of my journey but it's been the best decision I've ever made.
                        </p>
                    </div>
                    </div>
                    <div className="p3">
                        <h2>KEY SKILLS</h2>
                        <Keyskills />
                    </div>
                    
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default About
