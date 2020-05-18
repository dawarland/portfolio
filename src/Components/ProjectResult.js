import React from 'react';

class ProjectResult extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            project: {}
        };
    }

    handleClick = (event) => {
        const {href} = event.target;
        console.log("Jai cliqué sur ", href);
        const parseIndex = href.split('projet')[1];
        const result = this.props.projectData[parseIndex];
        console.log(result);
        this.setState(state => ({project:result}) );
        event.preventDefault();
    };

    render() {
        return (this.state.project.Name !== undefined)
            ? (<section className="resume-section p-3 p-lg-5 d-flex" id="project">
                <div className="mw-100">
                    <h2 className="mb-5">Mes realisations 🔨</h2>
                    <div className="dropdown">
                        <button className="btn btn-secondary btn-block dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Selectionner une réalisation
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {this.props.projectData.map(
                                (item, index) =>
                                    <a className="js-scroll-trigger dropdown-item" href={"projet" + index}
                                       onClick={this.handleClick}>{item.Name}</a>
                            )}
                        </div>
                    </div>
                    <div style={{width: '100%',
                        margin : '0',
                        padding : '2%',
                        border : 'solid'}}>
                        <img className="rounded float-right img-fluid"
                             src={this.state.project.img} />
                        <h3 className="mb-0">{this.state.project.Name}</h3>
                        <h4 className="text-secondary">{this.state.project.Role}</h4>
                        <br/>
                        <h4>Présentation :</h4>
                        <p>
                            { this.state.project.Presentation }
                        </p>

                        <h4>Objectif, Contexte, Enjeux, Risques :</h4>
                        <p>
                            {this.state.project.Context}
                        </p>

                        <h4>Missions</h4>
                        <ul>
                            {this.state.project.Missions.map(
                                (item) =>
                                    <li>{ item.mission }</li>
                            )}
                        </ul>

                    <div className="row">
                        <div className="col">
                            <table className="table">
                                <thead>
                                <tr className="bg-success">
                                    <td>Bénéfices</td>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.project.Benefits.map(
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
                                {this.state.project.Constraints.map(
                                    (item) =>
                                        <tr>
                                            <td>{item.constraint}</td>
                                        </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                        <div className="text-center">

                        </div>
                </div>
                </div>
                </section>
            )
            : ( <section className="resume-section p-3 p-lg-5 d-flex" id="project">
                    <div className="mw-100">
                        <h2 className="mb-5">Mes realisations 🔨</h2>
                        <div className="dropdown">
                            <button className="btn btn-secondary btn-block dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Selectionner une réalisation
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {this.props.projectData.map(
                                    (item, index) =>
                                        <a className="js-scroll-trigger dropdown-item" href={"projet" + index}
                                           onClick={this.handleClick}>{item.Name}</a>
                                )}
                            </div>
                        </div>
                        <div style={{width: '100%',
                        margin : '0',
                        padding : '2%',
                        border : 'solid',
                        backgroundImage: 'url("../Assets/aww.png")'}}>
                    <img className="d-block w-100 img-responsive" src={this.state.project.img} alt="" />
                    <h3>Nom du projet : ??? </h3>
                    <h3 className="mb-0"> </h3>
                    <h4 className="text-secondary">Mon Role : ???</h4>

                    <h4>Présentation :</h4>
                    <ul>

                    </ul>

                    <h4>Objectif, Contexte, Enjeux, Risques :</h4>
                    <p>

                    </p>

                    <h4>Missions :</h4>
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
                    </div>
            </section>);
    }
}

export default ProjectResult;