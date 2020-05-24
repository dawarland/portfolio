import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import aww from "../Assets/aww.png";

class Landing extends Component {
    constructor(props) {
        super(props);

        this.landingData = props.landingData;
    }
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                <div className="mw-100">
                    <div className="text-center">
                    <img className="img d-block d-sm-none" src={aww} alt="Williams Arland Anyou"></img>

                        <h1 className="mb-0 d-none d-sm-block">{this.landingData.firstName}
                        <div className="text-primary"> {this.landingData.lastName}</div>
                    </h1>
                    <div className="subheading mb-5">{this.landingData.poste} · {this.landingData.city} ·
                        <a className="mb-0 d-none d-sm-inline" href={'mailto:' + this.landingData.email}> {this.landingData.email}</a>
                        <a className="mb-0 d-inline d-sm-none" href={'mailto:' + this.landingData.email}> @</a>
                    </div>
                        <p className="lead mb-5">{this.landingData.bio}</p>

                    <div className="social-icons">
                        <a href={this.landingData.linkedin}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href={this.landingData.github}>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Landing;