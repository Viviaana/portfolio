import React, { Component } from 'react';
import "./Keyskills.css"

export class Keyskills extends Component {
    render() {
        return (
            <div className= "skillscontainer">
                <div className="first">
                    <div className="skill1"><h2>Software and Tools</h2></div>
                    <div className = "programs">
                        <p>VS Code</p>
                        <p>Trello</p>
                        <p>Slack</p>
                        <p>Github</p>
                        <p>Microsoft Office</p>
                        <p>Google Analytics</p>
                        <p>SAP</p>
                        <p>Sage</p>
                        <p>Salesforce</p>
                    </div>
                </div>
                <div className="second">
                    <div className="skill2"><h2>Languages</h2></div>
                    <div className = "languages">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Javascript</p>
                        <p>React</p>
                        <p>Node.js</p>
                        <p>Python</p>
                    </div>
                </div>
                <div className="third">
                    <div className="skill3"><h2>Personal</h2></div>
                    <div className = "personal">
                        <p>10 years office experience</p>
                        <p>Great communication skills</p>
                        <p>Ability to work well under pressure</p>
                        <p>Qualified First Aider</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Keyskills
