import React, { Component } from 'react';
import userData from "../userData";
import projects from "../projects";
import image from "../Assets/projet.gif";
import ProjectResult from "./ProjectResult";
import {Link} from "react-router-dom";


class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            landingData : userData.landing,
            projectData : projects.projects,
            projectResult: {}
        };
    }

    handleClick = (event) => {
        const {href} = event.target;
        console.log("Jai cliqué sur ", href);
        const parseIndex = href.split('projet')[1];
        const result = this.state.projectData[parseIndex];
        console.log(result);
        this.setState(state => ({projectResult:result}) );
        event.preventDefault();
    };

    render() {
        return(
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="sideNav">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">
                        <span className="d-block d-lg-none">Williams Arland</span>
                        <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={image} alt="me"></img>
                    </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            { this.state.projectData.map(
                                (item, index) =>
                                    <li className="nav-item">
                                        <a className="nav-link js-scroll-trigger" href={"projet"+index} onClick={this.handleClick}>{item.Name}</a>
                                    </li>
                            )}
                            <Link to="/">
                                <button className="btn btn-outline-primary" variant="outlined">
                                    Accueil
                                </button>
                            </Link>
                        </ul>
                    </div>
                </nav>
                <div className="container-fluid p-0">
                    <ProjectResult project={this.state.projectResult} />
                </div>
            </div>
        );
    }
}

export default Projects;