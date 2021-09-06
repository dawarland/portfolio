import React, { Component } from 'react';
import profilImg from '../Assets/profile.png';
import devImg from "../Assets/projet.gif";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.projectData = props.projectData;
        this.sidebarData = props.sidebarData;
    }

    render() {
        return (
            <nav className={"navbar navbar-expand-lg navbar-dark "+ (window.location.hash === '#projects' ? 'bg-dark' : 'bg-primary') +" fixed-top"} id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#about">
                    <span className="d-block d-lg-none">{this.sidebarData.firstName} {this.sidebarData.lastName}</span>
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={(window.location.hash === '#project' ? devImg :profilImg )} title={(window.location.hash === '#project' ? "Image Développeur" :"Photo de Williams ARLAND ANYOU" )} alt={(window.location.hash === '#project' ? "Image Développeur" :"Photo de Williams ARLAND ANYOU" )}></img>
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#about">A propos de moi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#experience">Expériences</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#education">Diplomes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#awards">Certifications</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#skills">Compétences</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#interests">Centres d'interet</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#salesforce">Salesforce</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#project">Réalisations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#contact">Me Contacter</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Sidebar;
