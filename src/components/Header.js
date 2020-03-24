import React from "react";
import {Link,} from "react-router-dom";
import './ContainerHeader.css';


export default function Header() {
  return (
    <div className = "page">
      <div className = "sidebar">
        <div className = "colourbox">
          <nav>
            <ul>
              <li>
                <Link to="/portfolio">Home</Link>
              </li>
              <li>
                <Link to="/aboutme">About Me</Link>
              </li>
              <li>
                <Link to="/jobs">Experience</Link>
              </li>
              <li>
                <Link to="/past">Past Projects</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </div>
    
  );
}
