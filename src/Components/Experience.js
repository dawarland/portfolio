import React, { Component } from 'react';

class Experience extends Component {
    constructor(props) {
        super(props);

        this.experience = props.experience;
    }

    render() {
        return(
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
                <div className="w-100">
                    <h2 className="mb-5">Expériences 💼</h2>
                    {
                        this.experience.map( ({position,organization,city,aboutWork,logoUrl,fromDate,toDate, siteUrl, contractType}, index) => (
                            <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="resume-content">
                                    <div className="hover-action">
                                        <h3 className="mb-0">{position}</h3>
                                        <div className="subheading mb-3">{organization}</div>
                                    </div>
                                    <div className="hide">
                                        <ul>
                                        {
                                            [...aboutWork].map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))
                                        }
                                        </ul>
                                    </div>
                                </div>
                                <div className="resume-date text-md-right">
                                    <div>
                                        <a href={siteUrl} target="on_blank"><img className="img img-fluid img-max"  src={logoUrl} title={"Logo de "+ organization} alt={"Logo de "+ organization}/></a>
                                    </div>
                                    <span className="text-primary">{fromDate} {toDate}</span>
                                    <div className="text-secondary">{contractType}</div>
                                    <div className="text-secondary font-weight-bold">{city}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        );
    }
}

export default Experience;
