import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props);

        this.education = props.education;
    }

    render() {
        return(
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
                <div className="w-100">
                    <h2 className="mb-5">Diplomes 🎓</h2>
                    {
                        this.education.map((data, index) => (
                            <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="resume-content">
                                    <h3 className="mb-0">{data.degree}</h3>
                                    <div className="subheading mb-3">{data.university}</div>
                                    <p>{data.gpa}</p>
                                </div>
                                <div className="resume-date text-md-right">
                                    <div><a href={data.siteUrl} target="on_blank"><img className="img img-fluid img-thumbnail img-max" src={data.logoUrl} title={"Logo de "+ data.university} alt={"Logo de "+ data.university}/></a></div>
                                    <span className="text-primary">{data.fromDate} {data.toDate}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        );
    }
}

export default Education;
