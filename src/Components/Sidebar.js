import React, { Component } from 'react';
import image from '../Assets/profile.png';
import { Link } from 'react-router-dom'

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.sidebarData = props.sidebarData;
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">{this.sidebarData.firstName} {this.sidebarData.lastName}</span>
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={image} alt="me"></img>
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
                            <a className="nav-link js-scroll-trigger" href="#education">Formations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#skills">Compétences</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#interests">Centre d'interet</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#salesforce">Salesforce</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#awards">Certifications</a>
                        </li>
                        <Link to="/projet">
                            <button className="btn btn-secondary" variant="outlined">
                                Mes réalisations
                            </button>
                        </Link>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Sidebar;