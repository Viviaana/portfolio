import React, { Component } from 'react';
import './Jobs.css';
import Toggle from './Toggle'


export class Jobs extends Component {
    render() {
        return (
            <div className = "page">
            <div className = "jobcontainer">
                <div className = "experience">
                    <h2>Work Experience</h2>
                    <div className = "contentcontainer">
                        <Toggle />
                </div>
             </div>
            </div>
            </div>
        )
    }
}

export default Jobs
