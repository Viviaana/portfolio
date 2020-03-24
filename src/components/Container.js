import React from "react";
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import Pastprojects from "./Pastprojects";
import About from "./About";
import Navbar from "./Navbar";
import Jobs from "./Jobs";
import Contact from "./Contact";
import './ContainerHeader.css';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'


function Container({ location }) {
    return (
    <div className = "page">
        <TransitionGroup className="transition-group">
            <CSSTransition
                key={location.key}
                timeout={{ enter: 400, exit: 400 }}
                classNames="fade"
            >
        <div className="route-section">
          <Switch location={location}>
            <Route path="/jobs" component={Jobs} />
            <Route path="/contact" component={Contact} />
            <Route path="/aboutme" component={About} />
            <Route path="/past" component={Pastprojects} />
            <Route exact path="/portfolio" component={Navbar} />
          </Switch>
          </div>
        </CSSTransition>
        </TransitionGroup>
    </div>
  );
}

export default withRouter(Container)