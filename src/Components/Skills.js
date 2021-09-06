import React, { Component } from 'react';

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
                    <div className="subheading mb-3">Langages de programmation &amp; Outils</div>
                    <div className="row">
                        {
                            this.skills.hardskill.map((data, index) => (
                                <div key={index} className="popover__wrapper col-6">
                                    <div className="list-item">
                                        <span className="popover__title ml-3"><p>{data.article ? "👑" : "✅"} {data.name}</p></span>
                                    </div>
                                    {data.article ? (
                                        <div className="popover__content">
                                            <div className="popover__message"><b>{data.name}</b></div>
                                            <div>{data.article}</div>
                                        </div>
                                    ) : (<div/>)
                                    }

                                </div>
                            ))
                        }
                    </div>
                    <div className="subheading mb-3">Softskills</div>
                    <div className="row">
                        {
                            this.skills.softskill.map((data, index) => (
                                <div key={index} className="popover__wrapper col-6">
                                    <div className="list-item">
                                        <span className="popover__title ml-3"><p>{data.article ? "👑" : "✅"} {data.name}</p></span>
                                    </div>
                                    {data.article ? (
                                        <div className="popover__content">
                                            <div className="popover__message"><b>{data.name}</b></div>
                                            <div>{data.article}</div>
                                        </div>
                                    ) : (<div/>)
                                    }

                                </div>
                            ))
                        }
                    </div>
                    <div className="subheading mb-3">{this.skills.language.size >1 ? "Langues étrangères" : "Langue étrangère" }</div>
                    <div className="row">
                        {
                            this.skills.language.map((data, index) => (
                                <div key={index} className="popover__wrapper col-6">
                                    <div className="list-item">
                                        <span className="popover__title ml-3"><p>{data.article ? "👑" : "✅"} {data.name}</p></span>
                                    </div>
                                    {data.article ? (
                                        <div className="popover__content">
                                            <div className="popover__message"><b>{data.name}</b></div>
                                            <div>{data.article}</div>
                                        </div>
                                    ) : (<div/>)
                                    }

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
