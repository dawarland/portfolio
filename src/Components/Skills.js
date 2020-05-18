import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


class Skills extends Component {
    constructor(props) {
        super(props);

        this.skills = props.skills;
    }

    render() {
        return(
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                <div className="w-100">
                    <h2 className="mb-5">Compétences 💻</h2>
                    <div className="subheading mb-3">Langage de programmation &amp; Outils</div>
                    <div className="row">
                        {
                            this.skills.hardskill.map((data, index) => (
                                <div key={index} className="col-6">
                                    <p className="list-item">
                                        <FontAwesomeIcon icon={faCheckCircle} color="green" />
                                        <span className="ml-3">{data.name}</span>
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="subheading mb-3">Softskill</div>
                    <div className="row">
                        {
                            this.skills.softskill.map((data, index) => (
                                <div key={index} className="col-6">
                                    <p className="list-item">
                                        <FontAwesomeIcon icon={faCheckCircle} color="green" />
                                        <span className="ml-3">{data.name}</span>
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="subheading mb-3">{this.skills.language.size >1 ? "Langues étrangères" : "Langue étrangère" }</div>
                    <div className="row">
                        {
                            this.skills.language.map((data, index) => (
                                <div key={index} className="col-6">
                                    <p className="list-item">
                                        <FontAwesomeIcon icon={faCheckCircle} color="green" />
                                        <span className="ml-3">{data.name}</span>
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;