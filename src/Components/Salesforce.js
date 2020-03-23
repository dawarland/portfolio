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
            "Object-oriented programing":60,
            "Apex":30,
            "System integration":30,
            "SOQL / SOSL":40,
            "Web services":30
        };
    }

    render() {
        return(
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="salesforce">
                <div className="w-100">
                    <h2 className="mb-5">Le CRM Salesforce <a rel="noopener noreferrer" target="_blank" href="https://www.salesforce.com/fr/products/what-is-salesforce/">☁️</a></h2>
                    <div className="subheading mb-3">C'est quoi un CRM?</div>
                    <div className="row">
                        <p>Le CRM (Customer Relationship Management) ou gestion de la relation client est une stratégie de gestion des relations et interactions d'une entreprise avec ses clients ou clients potentiels (prospet). Un système CRM aide les entreprises à interagir en permanence avec les clients, à rationaliser leurs processus et à améliorer leur rentabilité.</p>
                        <p>L'objectif d'un système CRM est simple : améliorer les relations commerciales.</p>
                    </div>
                    <div className="subheading mb-3">Salesforce, le leader mondial du CRM axé sur l’innovation</div>
                    <div className="row">
                        <p>Salesforce est une solution de gestion de la relation client (ou CRM) basée sur le Cloud, qui offre à tous les départements de votre entreprise – y compris le marketing, les ventes, le service client, et l’e-commerce - une vue unifiée de vos clients sur une plateforme intégrée.</p>
                        <img className="img-fluid" src={crmPourPME} alt=""/>
                        <p>Parmis ses nombreux avantages, c'est une solution logicielle très innovante qui offre la possibilité de faire partie d’une communauté très variée proposant de nombreux conseils et des remarques pertinentes.</p>
                        </div>

                    <div className="subheading mb-3">Developpeur Salesforce</div>
                    <div className="row">
                        <div className="col-12">
                            <p>J'ai découvert cet outil lors de ma premiere année d'alternance chez Capgemini au sein de l'entité DCX.</p>
                            <p>Plusieurs heures d'autoformation plus tard sur le site <a href="https://trailhead.salesforce.com/fr/">trailhead</a> m'ont été necessaire pour maitriser l'aspect administration. J'ai pu ensuite me concentrer sur mon rôle cible </p>
                            <p>Toujours d'après ce site, voici la liste des compétences nécéssaire pour être un bon developpeur Salesforce :</p>
                        </div>
                        <div className="col-8 align-self-center">
                            { Object.keys(this.salesforceSkills).map((key) =>
                                <div className="skills-graph__item slds-clearfix">
                                    <div className="skills-graph__item-text">{key}</div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: this.salesforceSkills[key] +'%' }}></div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <p>J'ai choisi de concentrer mon apprentissage sur ces technologies. Pour les intéréssés, n'hésitez pas à vous rendre sur l'onglet "Mes réalisations" .</p>

                    </div>
                </div>
            </section>
        );
    }
}

export default Salesforce;