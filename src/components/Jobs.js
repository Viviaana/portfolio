import React, { Component } from 'react';
import './Jobs.css';
import Toggle from './Toggle'


export class Jobs extends Component {
    render() {
        return (
            <div className = "page">
            <div className = "jobcontainer">
                <div className = "experience">
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