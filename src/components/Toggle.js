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
              <h2>Work Experience</h2>
              <div className = "timeline">
                <div className = "codeBtn">
                    <button onClick={e => this.toggle(e.target.name)} name="code">
                        Code Nation
                    </button>   
                </div>
                <div className = "lateBtn">
                    <button onClick={e => this.toggle(e.target.name)} name="late">
                        Laterooms
                    </button>    
                </div>
                <div className = "iesaBtn">
                    <button onClick={e => this.toggle(e.target.name)} name="purchase1">
                    IESA
                    </button>    
                </div>
                <div className = "crestBtn">
                    <button onClick={e => this.toggle(e.target.name)} name="purchase2">
                    Crest Medical
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
                        <h3>Code Nation - December 2019 to April 2020</h3>
                        <p>After leaving Laterooms I decided I wanted to work towards a career I'd really enjoy, so I started learning to code online. After a few months I got in touch with Code Nation to help me further my practice into something I could use professionally. I began working with them on a 3 week develop course, teaching the basics on Python, HTML and CSS and I absolutely fell in love, it finally felt like I was doing something worthwhile, something I could be really good at.
                            I began with a 2 week Python project developing a basic text based adventure game, including learning about the best tools and practices to use when working with code in teams such as Trello and using flowcharts to plan.  </p>
                        <p>Eager to continue my learning, I applied for an apprenticeship role as this was the best opportunity for me to get into a brand new field, and luckily I was offered to work with Music Magpie. The 12 week bootcamp was incredibly intensive, there was a lot to learn in a very short period of time. But I enjoyed the challenge. We began simple with Javascript, HTML and CSS, later moving on to more complicated projects using React, Node.js and MongoDB. It was a great chance for me to work on more realistic exercises as well as develop skills in working with teams and using the wide range of tools needed. </p>
                    </div>}
                {this.state.show === "late" && <div className = "laterooms">
                        <h3>LateRooms - August 2016 to August 2019</h3>
                        <ul>
                            <li>Account management for over 400 marketing partners including Quidco, Topcashback, Chester Zoo and multiple Visit Britain sites</li>
                            <li>Using a mix of Excel, Google Analytics and Tableau to generate reports ensuring clients were kept up to date on performance</li>
                            <li>Creating banners and other promotional items for partners to use </li>
                            <li>Creating a monthly newsletter to keep clients up to date and increase interest in the brand </li>
                            <li>Devising incentives and contests to boost partner performance and increase commission </li>
                            <li>Processing reports to generate monthly invoices including bespoke reports for larger clients </li>
                            <li>Working directly with multiple affiliate networks to validate cashback payments for both LateRooms and SuperBreak</li>
                            <li>Analysing cashback bookings to catch fraudulent attempts early ensuring payment wasn’t processed for invalid bookings</li>
                        </ul>
                    </div>}
                {this.state.show === "purchase1" && <div className = "purchasing1">
                        <h3>IESA - January 2012 to July 2019</h3>
                        <ul>
                            <li>Working closely with large manufacturers such as Jaguar Land Rover, Kelloggs, Weetabix and Premier Foods to develop and maintain good working relationships</li>
                            <li>Inputting orders for items requested by clients</li>
                            <li>Managing stock through SAP "to buy" reports and communications with sites </li>
                            <li>Setting up new items and amending existing codes upon request </li>
                            <li>Arranging urgent deliveries and same day couriers </li>
                            <li>Ensuring goods are being delivered on time and booked in by the stores </li>
                            <li>Working with finance to resolve payment issues and invoicing errors </li>
                            <li>Managing a small team to work on the backlog of late orders to ensure orders are up to date</li>
                            <li>Training new employees on the bespoke software and various custom account processes</li>
                        </ul>
                    </div>}
                {this.state.show === "purchase2" && <div className = "purchasing2">
                        <h3>Crest Medical - May 2010 to December 2011</h3>
                            <ul>
                                <li>Maintaining stock counts within the warehouse and keeping the database up to date</li>
                                <li>Running daily reports to produce purchase orders </li>
                                <li>Working with suppliers to improve lead times and prices </li>
                                <li>Working in SAP and Excel to manage the stock levels </li>
                                <li>Achieved NVQ Level 2 in Business Admin</li>
                            </ul>
                    </div>}
                {this.state.show === "extra" && <div className = "extra">
                        <h3>Extras</h3>
                        <p>NQ Level 2 in Business Administration – 2011</p>
                        <p>QA Level 3 Award in Emergency First Aid at Work (RQF) - March 2018 to March 2021 </p>
                        <p>Google Analytics Advanced Course – March 2019</p>
                    </div>}
                    {this.state.show === "education" && <div className = "education">
                        <h3>Education</h3>
                        <p>Priestley College - Warrington June 2007 to June 2009 <br></br>
                            AS-Levels in Film Studies, Mathematics, Computing<br></br>
                            A-Level in Media Studies </p>

                        <p>Woolston High School - Warrington September 2002 to July 2007<br></br>
                            GCSEs in Maths, English, Science, French, ICT, History</p>

                </div>}
                </div>
        </div>
       );
    }
  }

  export default Toggle

