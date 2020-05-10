import React, { Component } from 'react';


class Contact extends Component {
    constructor(props) {
        super(props);

        this.url = window.location.href;
    }

    render() {
        return(
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="contact">
                <div className="w-100">
                    <h2 className="mb-5">Me Contacter ✉</h2>
                    <form className="row" action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8" method="POST">
                        <div className="col-12 col-xs-10 col-xs-offset-1 col-md-offset-0">
                            <input type="hidden" name="orgid" value="00D2o000000apsf"/>
                            <input type="hidden" name="retURL" value={this.url}/>
                            <div className="form-group">
                                <input id="name" placeholder="Votre nom et prénom" className="form-control" maxLength="80" name="name" size="20" type="text"/>
                            </div>
                            <div className="form-group">
                                <input id="email" placeholder="Votre e-mail" className="form-control" maxLength="80" name="email" size="20" type="text"/>
                            </div>
                            <div className="form-group">
                                <input id="subject" placeholder="Objet" className="form-control" maxLength="80" name="subject" size="20" type="text"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Votre message" name="description"></textarea>
                                <input type="hidden" id="external" name="external" value="1"/>
                            </div>
                            <div className="form-group">
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