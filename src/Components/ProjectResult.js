import React from 'react';

class ProjectResult extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (this.props.project.Name !== undefined)
            ? (<section className="resume-section p-3 p-lg-5 d-flex align-items-center">
                <div className="mw-100">
                    <h3>Nom du projet :</h3>
                    <h2 className="mb-0">{this.props.project.Name}</h2>
                        <h3 className="text-secondary">{this.props.project.Role}</h3>

                        <h3>Présentation :</h3>
                        <p>
                            { this.props.project.Presentation }
                        </p>

                        <h3>Objectif, Contexte, Enjeu, Risque :</h3>
                        <p>
                            {this.props.project.Context}
                        </p>

                        <h3>Missions</h3>
                        <ul>
                            {this.props.project.Missions.map(
                                (item) =>
                                    <li>{ item.mission }</li>
                            )}
                        </ul>

                    <div className="row">
                        <div className="col">
                            <table className="table">
                                <thead>
                                <tr className="bg-success">
                                    <td>Benefices</td>
                                </tr>
                                </thead>
                                <tbody>
                                {this.props.project.Benefits.map(
                                    (item) =>
                                        <tr>
                                            <td>{item.benefit}</td>
                                        </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                        <div className="col">
                            <table className="table">
                                <thead>
                                <tr className="bg-danger">
                                    <td>Contraintes</td>
                                </tr>
                                </thead>
                                <tbody>
                                {this.props.project.Constraints.map(
                                    (item) =>
                                        <tr>
                                            <td>{item.constraint}</td>
                                        </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </section>
            )
            : ( <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
                <div className="mw-100">
                    <h3>Nom du projet :</h3>
                    <h2 className="mb-0"> </h2>
                    <h3 className="text-secondary">Mon Role :</h3>

                    <h3>Présentation :</h3>
                    <ul>

                    </ul>

                    <h3>Objectif, Contexte, Enjeu, Risque :</h3>
                    <p>

                    </p>

                    <h3>Missions :</h3>
                    <ul>

                    </ul>

                    <div className="row">
                        <div className="col">
                            <table className="table">
                                <thead>
                                <tr className="bg-success">
                                    <td>Benefices</td>
                                </tr>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td></td>
                                        </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="col">
                            <table className="table">
                                <thead>
                                <tr className="bg-danger">
                                    <td>Contraintes</td>
                                </tr>
                                </thead>
                                <tbody>

                                        <tr>
                                            <td></td>
                                        </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>);
    }
}

export default ProjectResult;