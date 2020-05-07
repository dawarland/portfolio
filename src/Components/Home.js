import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Landing from './Landing';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Interests from './Interests';
import Awards from './Awards';
import Salesforce from './Salesforce';
import Contact from './Contact';
import userData from '../userData.json';
import ReactGA from 'react-ga';
import ProjectResult from "./ProjectResult";
import projects from "../projects";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projectData : projects.projects,
            landingData : userData.landing,
            experience : userData.experience,
            education : userData.education,
            skills : userData.skills,
            interests : userData.interests,
            awards : userData.awards,
            projectResult: {}
        };

        ReactGA.initialize('UA-141328214-1');
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <div className="App">
                <Sidebar sidebarData={this.state.landingData}/>
                <div className="container-fluid p-0">
                    <Landing landingData={this.state.landingData} />
                    <hr className="m-0" />
                    <Experience experience={this.state.experience} />
                    <hr className="m-0" />
                    <Education education={this.state.education}/>
                    <hr className="m-0" />
                    <Skills skills={this.state.skills} />
                    <hr className="m-0" />
                    <Interests interests={this.state.interests} />
                    <hr className="m-0" />
                    <Salesforce />
                    <hr className="m-0" />
                    <Awards awards={this.state.awards} />
                    <hr className="m-0" />
                    <ProjectResult projectData={this.state.projectData} />
                    <hr className="m-0" />
                    <Contact />

                </div>
            </div>
        );
    }
}

export default Home;