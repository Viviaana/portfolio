import React, { Component } from 'react';
import './Jobs.css';
import Toggle from './Toggle'


export class Jobs extends Component {
    render() {
        return (
            <div className = "page">
            <div className = "jobcontainer">
                        <Toggle />
                </div>
             </div>

        )
    }
}

export default Jobs
