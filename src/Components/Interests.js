import React, { Component } from 'react';

class Interests extends Component {
    constructor(props) {
        super(props);

        this.interests = props.interests;
    }

    render() {
        return(
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
                <div className="w-100">
                    <h2 className="mb-5">Centres d'interet ❤</h2>
                    <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {
                                this.interests.map( (element, index) => (
                                    <li key={index} data-target="#carouselIndicators" data-slide-to={index} className={ (index === 0 ) ? "active" : ""}></li>
                                ) )
                            }
                        </ol>
                        <div className="carousel-inner">
                            {
                                this.interests.map((data, index) => (
                                    <div key={index} className={ (index === 0 ) ? "carousel-item active" : "carousel-item"}>
                                        <img style={{objectFit: "cover"}} className="d-block w-100" src={data.url} title={data.title} alt={data.title} />
                                        <div className="carousel-caption d-md-block">
                                            <h5>{data.title}</h5>
                                            <small>{data.paragraphe}</small>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <a className="carousel-control-prev" href="#carouselIndicators" role="button"
                           data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselIndicators" role="button"
                           data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Interests;
