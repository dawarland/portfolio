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
                        this.experience.map(({position,organization,aboutWork,logoUrl,fromDate,toDate}, index) => (
                            <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="resume-content">
                                    <h3 className="mb-0">{position}</h3>
                                    <div className="subheading mb-3">{organization}</div>
                                    <ul>
                                    {
                                        /*aboutWork.forEach((item) => (
                                            <li>item.aw</li>
                                        ))*/
                                    }
                                    </ul>
                                </div>
                                <div className="resume-date text-md-right">
                                    <div><img className="img img-fluid"  src={logoUrl} title={"Logo de "+ organization} alt={"Logo de "+ organization}/></div>
                                    <span className="text-primary">{fromDate} {toDate}</span>
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
