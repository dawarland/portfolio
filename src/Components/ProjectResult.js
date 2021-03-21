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
        const parseIndex = href.split('projet')[1];
        const result = this.props.projectData[parseIndex];
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
                            📂 Liste des réalisations
                        </button>
                        <div className="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuButton">
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
                        {this.state.project.img && <img className="rounded float-right img-fluid"
                                                        src={this.state.project.img}
                                                        title={"Logo de " + this.state.project.Name}
                                                        alt={"Logo de " + this.state.project.Name}/>
                        }
                        <h3 className="mb-0">{this.state.project.Name}</h3>
                        <h4 className="text-secondary">👤 {this.state.project.Role}</h4>
                        { this.state.project.url && <h5 className="text-secondary">🔎 <a href={this.state.project.url} target="_blank">le lien</a></h5> }
                        <br/>
                        <h4>Présentation :</h4>
                        <p>
                            { this.state.project.Presentation }
                        </p>

                        <h4>Contexte :</h4>
                        <p>
                            {this.state.project.Contexte}
                        </p>

                        <h4>Objectif :</h4>
                        <p>
                            {this.state.project.Objectif}
                        </p>

                        <h4>Missions :</h4>
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
                        <div className="row">
                            <div className="col">
                                <table className="table">
                                    <thead>
                                    <tr className="bg-info">
                                        <td>Compétences liées</td>
                                        <td> </td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.project.Skills.map(
                                        (item) =>
                                            <tr>
                                                <td>{item.skill}</td>
                                                {item.url
                                                    ? <td><img height="20px" width="20px" src={item.url} title={"Logo de "+this.skill} alt={"Logo de "+this.skill} /></td>
                                                    : <td></td>
                                                }
                                            </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="text-center">

                        </div>
                </div>
                    <div className="dropup">
                        <button className="btn btn-secondary btn-block dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            📂 Liste des réalisations
                        </button>
                        <div className="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuButton">
                            {this.props.projectData.map(
                                (item, index) =>
                                    <a className="js-scroll-trigger dropdown-item" href={"projet" + index}
                                       onClick={this.handleClick}>{item.Name}</a>
                            )}
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
                                📁 Liste des réalisations
                            </button>
                            <div className="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuButton">
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
                            <p className="text-center">⬆️ Selectionner un projet dans la liste ci-dessus ⬆️</p>


                        </div>
                        <div class="dropup">
                            <button type="button" className="btn btn-secondary btn-block">
                                &nbsp;
                            </button>
                        </div>

                    </div>
            </section>);
    }
}

export default ProjectResult;
