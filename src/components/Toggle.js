import React, { Component } from 'react'
import './Jobs.css'

class Toggle extends Component {
    state = {
      show: "",
    }
  
    toggle = block => {
        if(block !== this.state.show){
            this.setState(() => ({show: block}))
       }
       else {
           this.setState(() => ({show: ""}))
       }
    };
  
    render() {
      return (
          <div className = "timeWrapper">
              <div className = "timeline">
                <div className = "codeBtn">
                    <button onClick={e => this.toggle(e.target.name)} name="code">
                        Code Nation - December 2019 to April 2020
                    </button>   
                </div>
                <div className = "lateBtn">
                    <button onClick={e => this.toggle(e.target.name)} name="late">
                        Laterooms - August 2016 to August 2019
                    </button>    
                </div>
                <div className = "iesaBtn">
                    <button onClick={e => this.toggle(e.target.name)} name="purchase1">
                        IESA - January 2012 to July 2016
                    </button>    
                </div>
                <div className = "crestBtn">
                    <button onClick={e => this.toggle(e.target.name)} name="purchase2">
                        Crest Medical - May 2010 to December 2011
                    </button>    
                </div>
                <div className = "educationBtn">
                    <button onClick={e => this.toggle(e.target.name)} name="education">
                        Education
                    </button>    
                </div>
                <div className = "extraBtn">
                    <button onClick={e => this.toggle(e.target.name)} name="extra">
                        Extra
                    </button>    
                </div>
            </div>

            <div className = "boxcontainer">
                    {this.state.show === "code" && <div className = "codeNation">
                        <p>Details of the course with code nation including 3 weeks</p>
                    </div>}
                    {this.state.show === "late" && <div className = "laterooms">
                        <p>details on how working for a tech company influenced my decision</p>
                    </div>}
                    {this.state.show === "purchase1" && <div className = "purchasing">
                        <p>group iesa and crest together as 7 years in purchasing</p>
                    </div>}
                    {this.state.show === "purchase2" && <div className = "purchasing">
                        <p>group iesa and crest together as 7 years in purchasing</p>
                    </div>}
                    {this.state.show === "education" && <div className = "education">
                        <p>college and GCSEs</p>
                    </div>}
                    {this.state.show === "extra" && <div className = "extra">
                        <p>google analytics, first aid, codecademy, pluralsight</p>
                    </div>}
        </div>
        </div>
       );
    }
  }

  export default Toggle

