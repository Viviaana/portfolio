import React, { Component } from 'react';
import "./Keyskills.css"

export class Keyskills extends Component {
    render() {
        return (
            <div className= "skillscontainer">
                <div className="first">
                    <div className="skill1">Software and tools</div>
                    <div className = "programs">
                        <ul>
                            <li>VS Code</li>
                            <li>Trello</li>
                            <li>Slack</li>
                            <li>Github</li>
                            <li>Microsoft Office</li>
                            <li>Google Analytics</li>
                            <li>SAP</li>
                            <li>Sage</li>
                            <li>Salesforce</li>
                        </ul>
                    </div>
                </div>
                <div className="second">
                    <div className="skill2">Languages</div>
                    <div className = "languages">
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Python</li>
                        </ul>
                    </div>
                </div>
                <div className="third">
                    <div className="skill3">Personal</div>
                    <div className = "personal">
                        <ul>
                            <li>Absolutely Nothing</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Keyskills
