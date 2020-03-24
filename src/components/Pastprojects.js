import React, { Component } from 'react'
import './Pastprojects.css';
import SimpleSlider from './Carousel';

export class Pastprojects extends Component {
    render() {
        return (
            <div className = "page">

            <div className = "pastcontainer">
                <div className = "pastProjects" id = "past">
                    <h3>Past Projects</h3>
                    <SimpleSlider />
                </div>
            </div>
            </div>
            )
        }
    }

export default Pastprojects
