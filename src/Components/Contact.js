import React, { Component } from 'react';


class Contact extends Component {
    constructor(props) {
        super(props);

        this.skills = props.skills;
    }

    render() {
        return(
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                <div className="w-100">
                    <h2 className="mb-5">Me Contacter</h2>
                    <form className="row">
                        <div className="col-12 col-xs-10 col-xs-offset-1 col-md-offset-0">
                            <div className="form-group col-lg-4">
                                <input type="email" className="form-control" placeholder="Votre email"/>
                            </div>
                            <div className="form-group col-lg-8">
                                <textarea className="form-control" rows="3" placeholder="Votre message"></textarea>
                            </div>
                            <div className="form-group col-lg-12">
                                <button type="submit" className="btn btn-outline-secondary pull-right">Envoyer</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Contact;