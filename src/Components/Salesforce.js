import React, { Component } from 'react';
import crmPourPME from '../Assets/crm-pour-PME.png';


class Salesforce extends Component {
    constructor(props) {
        super(props);

        this.salesforceSkills = {
            "Salesforce Platform":90,
            "Lightning Web Components":80,
            "Javascript":60,
            "Application Lifecycle Management":40,
            "Object-oriented Programing":60,
            "Apex":30,
            "System Integration":30,
            "SOQL / SOSL":40,
            "Web Services":30
        };
    }

    render() {
        return(
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="salesforce">
                <div className="w-100">
                    <h2 className="mb-5">Le CRM Salesforce <a rel="noopener noreferrer" target="_blank" href="https://www.salesforce.com/fr/products/what-is-salesforce/">☁️</a></h2>
                    <div className="subheading mb-3">Qu'est ce qu'un CRM ?</div>
                    <div className="row">
                        <p>Un CRM (Customer Relationship Management) ou Gestion de la Relation Client désigne un logiciel technique/outil qui permet de traiter et d’analyser les informations liées aux clients et aux prospects.
                        </p>
                        <p>L'objectif est simple : <strong>améliorer les relations commerciales</strong>.</p>
                    </div>
                    <br/>
                    <div className="subheading mb-3">Salesforce, le leader mondial du CRM axé sur l’innovation</div>
                    <div className="row">
                        <p>Salesforce est une solution de gestion de la relation client (ou CRM) basée sur le Cloud, qui offre à tous les départements de votre entreprise – y compris le marketing, les ventes, le service client, et l’e-commerce - une vue unifiée de vos clients sur une plateforme intégrée.</p>
                        <img className="img-fluid" src={crmPourPME} title="Classement CRM Salesforce" alt="Classement CRM Salesforce"/>
                        <p>Parmi ses nombreux avantages, c'est une solution logicielle très innovante qui offre la possibilité de faire partie d’une communauté très variée, proposant de nombreux conseils ainsi que des remarques pertinentes.</p>
                        <p>Il domine le marché des logiciels CRM, avec plus de 20% des parts de marché totales.</p>
                    </div>
                    <br/>
                    <div className="subheading mb-3">Développeur Salesforce</div>
                    <div className="row">
                            <p>J'ai découvert cet outil lors de ma premiere année d'alternance chez Capgemini au sein de l'entité DCX.</p>
                            <p>Plusieurs heures d'autoformation sur le site <a href="https://trailhead.salesforce.com/fr/">trailhead</a> m'ont été necessaire afin de maîtriser l'aspect administration. J'ai ensuite pu me concentrer sur mon rôle cible.</p>
                            <p>Voici la liste des compétences nécessaires selon Salesforce afin de devenir développeur :</p>
                        <div className="col-8 align-self-center">
                            { Object.keys(this.salesforceSkills).map((key, index) =>
                                <div className="skills-graph__item slds-clearfix" key={index}>
                                    <div className="skills-graph__item-text">{key}</div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: this.salesforceSkills[key] +'%' }}></div>
                                    </div>
                                </div>
                            )}
                            <small className="float-right">Source trailhead.salesforce.com</small>
                        </div>
                        <br/>
                        <p>J'ai choisi de concentrer mon apprentissage informatique autour des technologies présentées ci-dessus afin de devenir expert dans ce domaine.</p>
                        <p>Vous trouverez plus d'informations dans l'onglet <a className="js-scroll-trigger" href="#project">"Réalisations"</a>.</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Salesforce;
