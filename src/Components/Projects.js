import React, { Component } from 'react';
import projects from "../projects.json";
import userData from "../userData.json";
import devImg from "../Assets/projet.gif";

const TYPE_EXP = "Experience";
const TYPE_EDU = "Education";
const TYPE_SKI = "Skill";
const TYPE_INT = "Interest";
const TYPE_AWA = "Award";

const form ={
    "landing": {
        "firstName": "Test",
        "lastName": "Test",
        "city": "Paris",
        "email": "contact@williamsarland.fr",
        "poste": "Développeur Salesforce",
        "bio": "Actuellement diplomé en Ingénierie du Logiciel, j'ai pu de par mes diverses expériences acquérir de multiples compétences et aptitudes indispensables dans ces métiers. Passionné par le numérique et la logique, faire carrière dans le développement informatique m'a semblé inévitable.",
        "linkedin": "https://www.linkedin.com/in/williams-arland-374106118/",
        "github": "https://github.com/dawarland"
    },
    "experience": [
        {
            "position": "Consultant Technique Salesforce ☁",
            "organization": "Renault",
            "city": "Boulogne-Billancourt",
            "contractType": "Projet client",
            "aboutWork": [
                {
                    "aw" : "Préparation / Présentation de démo client 🇬🇧"
                },
                {
                    "aw" : "Deploiement continue avec Gitlab"
                },
                {
                    "aw" : "Développement de classe APEX et de test nécessaire"
                },
                {
                    "aw" : "Développement de Lightning Web Component et déploiement"
                },
                {
                    "aw" : "Analyse et correction des bugs"
                }
            ],
            "fromDate": "Mai 2021 -",
            "toDate": "Présent",
            "logoUrl": "https://logos-marques.com/wp-content/uploads/2021/02/Renault-Logo-2015.png",
            "siteUrl": "https://www.renault.fr/"
        },
        {
            "position": "Mentor",
            "organization": "Openclassrooms",
            "city": "Paris",
            "contractType": "Intervenant",
            "aboutWork": [
                {
                    "aw" : "Accompagnement des personnes dans la réalisation de projets issus du monde professionnel"
                },
                {
                    "aw" : "Suivie de la progression des apprenants et signalement d'éventuels retards"
                },
                {
                    "aw" : "Partage de connaissances et explication des notions"
                }
            ],
            "fromDate": "Mars 2021 -",
            "toDate": "Présent",
            "logoUrl": "https://consent.trustarc.com/get?name=oc_logo.png",
            "siteUrl": "https://openclassrooms.com/fr/"
        },
        {
            "position": "Consultant Technique Salesforce ☁",
            "organization": "France Boissons",
            "city": "Rueil Malmaison",
            "contractType": "Projet client",
            "aboutWork": [
                {
                    "aw" : "Préparation / Présentation de démo client"
                },
                {
                    "aw" : "Mise en place de l’integration sécurisé des systèmes externes (SAP, BDD client, API, Odata avec authentification OAuth)"
                },
                {
                    "aw" : "Développement de classe APEX et de test nécessaire"
                },
                {
                    "aw" : "Développement de Lightning Web Component et déploiement"
                },
                {
                    "aw" : "Déploiement les différentes realeases en production"
                }
            ],
            "fromDate": "Septembre 2020 -",
            "toDate": "Mai 2021",
            "logoUrl": "https://www.france-boissons.fr/uploads/151006_logo_FB_octobre_3906_001.jpg",
            "siteUrl": "https://www.france-boissons.fr"
        },
        {
            "position": "Consultant Technique Salesforce ☁",
            "organization": "Total",
            "city": "La Defense",
            "contractType": "Projet client",
            "aboutWork": [
                {
                    "aw" : "Comprendre les enjeux client (métier, culture)"
                },
                {
                    "aw" : "Savoir rapporter de manière pertinente les difficultés et/ou les risques sprint/projet"
                },
                {
                    "aw" : "Développer les classes APEX et les tests nécessaires"
                },
                {
                    "aw" : "Développer les Lightning Component et Ligntning Web Component"
                },
                {
                    "aw" : "Mettre en déploiement les différentes realeases"
                }
            ],
            "fromDate": "Décembre 2019 -",
            "toDate": "Aout 2020",
            "logoUrl": "https://www.total.com/themes/custom/total_com/dist/img/logo_total_290x70px_v3.png",
            "siteUrl": "https://total.com"
        },
        {
            "position": "Consultant Technique Salesforce ☁",
            "organization": "Naturalia",
            "city": "Issy Les Moulineaux",
            "contractType": "Projet client",
            "aboutWork": [
                {
                    "aw" : "Analyser les besoins clients"
                },
                {
                    "aw" : "Organiser et traiter des User Stories confiées au sein d'un sprint"
                },
                {
                    "aw" : "Transformer un besoin métier simple en solution technique"
                }
            ],
            "fromDate": "Septembre 2019 -",
            "toDate": "Décembre 2019",
            "logoUrl": "https://naturalia.fr/static/version1586888881/frontend/Naturalia/default/fr_FR/images/header-main_logo.png",
            "siteUrl": "https://naturalia.com/"
        },
        {
            "position": "Ingenieur Logiciel",
            "organization": "Capgemini ♠",
            "city": "Issy Les Moulineaux",
            "contractType": "Alternance",
            "aboutWork":[
                {
                    "aw": "Réaliser des avant-ventes pour des projets CRM"
                },
                {
                    "aw": "Intervenir en qualité de consultant technique chez des clients"
                },
                {
                    "aw": "Assurer une veille technique pérenne"
                }
            ],
            "fromDate": "Septembre 2019 -",
            "toDate": "Août 2021",
            "logoUrl": "https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg",
            "siteUrl": "https://capgemini.com"
        },
        {
            "position": "Professeur Associé",
            "organization": "CodeCodeCodec",
            "city": "Paris",
            "contractType": "CDI",
            "aboutWork": [
                {
                    "aw" : "Animer des ateliers de groupe composés de 8 élèves ( âgés de 7 à 14 ans)"
                },
                {
                    "aw" : "Elaborer des cours selon la matrice du manuel fourni par l’éducation nationale « 123, Codez ! »"
                },
                {
                    "aw" : "S'occuper de la gestion administrative, financière et de recrutement de l’école"
                },
                {
                    "aw": "Participer à l’élaboration de la stratégie commerciale"
                }
            ],
            "fromDate": "Avril 2017 -",
            "toDate": "Présent",
            "logoUrl": "https://codecodecodec.com/wp-content/uploads/2018/04/cropped-CCC_Logo_4_Couleurs-2017-2.png",
            "siteUrl": "https://codecodecodec.com"
        },
        {
            "position": "Développeur Informatique",
            "organization": "VO DSI",
            "city": "Paris",
            "contractType": "CDI",
            "aboutWork": [
                {
                    "aw": "Préparer et installer le matériel et/ou logiciel des systèmes et réseaux informatiques"
                },
                {
                    "aw": "Diagnostiquer et corriger des dysfonctionnements"
                },
                {
                    "aw": "Gérer des projets web"
                },
                {
                    "aw": "Assurer le développement et la maintenance de sites web"
                }
            ],
            "fromDate": "Octobre 2017 -",
            "toDate": "Août 2019",
            "logoUrl": "https://vodsi.com/wp-content/uploads/2018/05/cropped-vodsi-e1524582194173.png",
            "siteUrl": "https://vodsi.com"
        }
    ],
    "education": [
        {
            "university": "IN'TECH groupe ESIEA",
            "degree": "MASTER d'Expert en Ingenierie Logicielle",
            "gpa": "",
            "fromDate": "2019 -",
            "toDate": "2021",
            "logoUrl": "data:image/png;base64,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",
            "siteUrl": "https://intechinfo.cfr"
        },
        {
            "university": "CNAM",
            "degree": "DUT Informatique",
            "gpa": "",
            "fromDate": "",
            "toDate": "2019",
            "logoUrl": "https://immo2.pro/images/wp-images/2018/09/lecnam-logo-formations-immobilier-diplomes.jpg",
            "siteUrl": "https://cnam.fr"
        },
        {
            "university": "Lycée Charles de Gaulle",
            "degree": "BACCALAUREAT Scientifique Sciences de l'Ingénieur",
            "gpa": "",
            "fromDate": "",
            "toDate": "2014",
            "logoUrl": "https://lewebpedagogique.com/sciencesdelingenieur/files/2011/10/logo-default1.jpg",
            "siteUrl": "https://google.com"
        }
    ],
    "skills": {
        "hardskill": [
            {
                "name": "Agile Scrum"
            },
            {
                "name": "Angular / React",
                "article": "Etant à l'aise avec l'utilisation de javascript, j'ai pris pour habitude de me servir de ses framworks lors de la réalisation d'application Web. J'ai d'ailleurs décidé de réaliser mon portfolio en React car même si ce n'est pas une technologie que j'utilise dans mon entreprise d'accueil, je suis contient qu'elle est extremement demandée sur le marché."
            },
            {
                "name": "Bootstrap"
            },
            {
                "name": "Git",
                "article": "Outil devenu indispensable au bon déroulement d'un projet informatique, GIT fait partie des compétences que j'ai souhaité développer. Je l'utilise d'ailleurs aussi bien dans un cadre profession que lors de projet personnel. Je vous invite à consulter mon github pour apprécier quelques unes de mes réalisations."
            },
            {
                "name": "HTML5/CSS3"
            },
            {
                "name": "Java 11"
            },
            {
                "name": "Javascript"
            },
            {
                "name": "Lightning Component, LWC, APEX",
                "article": "Après une periode intense d'autoformation, j'ai intégré ma premiere mission Salesforce pour le Client total. J'ai pu profiter de l'aspet particulierment customiser du projet pour monter en compétence sur la réalisation de composant Lightning et LWC. J'ai pu approfondir mon expertise lors de l'integration d'un système de CTI (Computer Telephony Interface) sur l'environement Salesforce pour le client France Boissons. Je suis aujourd'hui titulaire de 3 certifications Salesforce."
            },
            {
                "name": "Mac, Windows & Linux"
            },
            {
                "name": "Python"
            }
        ],
        "softskill": [
            {
                "name": "Ambition"
            },
            {
                "name": "Dynamisme"
            },
            {
                "name": "Pédagogie",
                "article": "J'ai eu l'occasion d'etre professeur d'informatique pour des enfants de 7 à 14ans chez CodeCodeCodec. J'ai adoré leur transmettre des notions de programmation et d'algorithme via la plateforme Scratch. Actuellemenent, mentor chez Openclassrooms, j'accompagne des aprenants lors de leurs formations."
            },
            {
                "name": "Esprit d'analyse",
                "article": "J'aime comparer le métier d'ingenieur informatique à celui de détective: Nous sommes des enqueteurs, à la recherche de réponses, de solutions. Et cela demande de savoir analyser les différents éléments en notre possession. Je passe aussi une bonne partie de mon temps libre à faire des clash of code sur le site www.codingame.com. Les petits exercices de programmation proposé me permettent de me challenger, d'élargir ma manière de traiter un probleme et d'apprendre de nouveaux tips."
            },
            {
                "name": "Force de proposition"
            },
            {
                "name": "Perseverance"
            },
            {
                "name": "Prise de parole en public",
                "article": "J'ai participé à un reportage réalisé par Arte sur \"les Hackeurs Russes\". J'ai également animé le live instagram de présentation de ma filère pour mon école INTECH"
            },
            {
                "name": "Rigueur"
            }
        ],
        "language": [
            {
                "name": "Anglais : B1 Intermediaire",
                "article": "Score TOIEC : 735. Je suis actuellement sur un projet à ampleur international pour le groupe Renault. De ce fait, tous les echanges se font en anglais. Ca a été un réel chalenge pour moi au départ, mais je me suis senti de plus en plus à l'aise lors des différents meeting."

            }
        ]
    },
    "interests": [
        {
            "title": "Partage de connaissance",
            "paragraphe" : "J'adore apprendre et transmettre mes connaissances. J'ai eu la chance d'être professeur d'informatique chez CodeCodeCodec. Le but était de sensibiliser la nouvelle génération au numérique et aux algorithmes de programmation. En outre, j'interviens aussi en tant que mentor et professeur particulier",
            "url": "https://images.bfmtv.com/wIjK7iXAf5ldCGSfRpFKsr40Rx0=/2x1:610x343/375x0/images/-158246.jpg"
        },
        {
            "title": "Boxe",
            "paragraphe" : "Je pratique la boxe chinoise (aussi appelé Sanda). Une pratique à la fois mentale et physique.",
            "url": "https://ffwu.be/wp-content/uploads/2019/10/sanda2.jpg"

        },
        {
            "title": "Capoeira",
            "paragraphe" : "Ma insuflé la concentration et le dépassement de soi.",
            "url": "https://www.tourisme-bresil.com/wp-content/uploads/adobestock-215533187-1280x800.jpeg"
        },
        {
            "title": "Football",
            "paragraphe" : "Plus particulièrement fan du PSG. Cela en dit long sur ma capacité à soutenir un projet auquel je crois ! C'est à dire remporter la ligue des champions !",
            "url": "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1111x280:1113x278)/origin-imgresizer.eurosport.com/2020/08/17/2866199-59069988-2560-1440.jpg"
        }
    ],
    "awards": [
        {
            "awardDetail": "03/2021",
            "awardTitle": "Javascript Developer I",
            "awardOrg": "Salesforce"
        },
        {
            "awardDetail": "11/2020",
            "awardTitle": "Platform Developer I",
            "awardOrg": "Salesforce"
        },
        {
            "awardDetail": "10/2019",
            "awardTitle": "Administrator",
            "awardOrg": "Salesforce"
        },
        {
            "awardDetail": "08/2019",
            "awardTitle": "Angular",
            "awardOrg": "OpenClassroom"
        },
        {
            "awardDetail": "07/2019",
            "awardTitle": "Java",
            "awardOrg": "OpenClassroom"
        },
        {
            "awardDetail": "04/2019",
            "awardTitle": "Ruby",
            "awardOrg": "OpenClassroom"
        },
        {
            "awardDetail": "03/2019",
            "awardTitle": "Linux",
            "awardOrg": "OpenClassroom"
        }
    ]
};

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectData: projects.projects,
            landingData: userData.landing,
            experienceArray : [],
            educationArray :[],
            skillArray : [],
            interestArray: [],
            awardArray :[]
        }

        this.addElement = this.addElement.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    addElement(event, type){
        console.log(type);
        let elem = event.target;
        let children = elem.parentNode.children;
        let inputs = [...children].filter(x => x.type !== "submit")

        let newElem = {};
        let newArray = undefined;

        if(type===TYPE_SKI){
            newElem[inputs[0].value] = {}
            newElem[inputs[0].value][inputs[1].id] = inputs[1].value
            newElem[inputs[0].value][inputs[2].id] = inputs[2].value
        }else {
            for (let i = 0; i < inputs.length; i++) {
                if(inputs[i].value.match(/\n/g)){
                    newElem[inputs[i].id] = inputs[i].value.split('\n').map(x=> x);
                }else{
                    newElem[inputs[i].id] = inputs[i].value;
                }
                //clean field
                inputs[i].value = "";
            }
        }

        switch (type) {
            case TYPE_EXP : newArray = [...this.state.experienceArray, newElem]
                            this.setState({experienceArray: newArray});
                break;
            case TYPE_EDU : newArray = [...this.state.educationArray, newElem]
                            this.setState({educationArray: newArray});
                break;
            case TYPE_SKI : newArray = [...this.state.skillArray, newElem]
                            this.setState({skillArray: newArray});
                break;
            case TYPE_INT : newArray = [...this.state.interestArray, newElem]
                            this.setState({interestArray: newArray});
                break;
            case TYPE_AWA : newArray = [...this.state.awardArray, newElem]
                            this.setState({awardArray: newArray});
                break;
            default : console.error("Type of information not allowed")
                break;
        }

        event.preventDefault();
    }
    handleClick(event){
        event.preventDefault();

        let newForm = {}
        const fields = document.querySelectorAll('.form-control');

        fields.forEach(x=>x.classList.remove("fieldOnError"))

        const reqFieldEmpty = [...fields].map(x=> (x.required && (!x.value) && x)).filter(Boolean)
        // Il y a des champs iobligatoire pas remplit
        if(reqFieldEmpty.length > 0){
            alert("Merci de remplir tous les champs obligatoires")
            reqFieldEmpty.forEach(x=>x.classList.add("fieldOnError"))
            reqFieldEmpty[0].focus();
            return ;
        }


        newForm.landing = {
            "firstName": document.getElementById("firstName").value,
            "lastName": document.getElementById("lastName").value,
            "city": document.getElementById("city").value,
            "email": document.getElementById("email").value,
            "poste": document.getElementById("poste").value,
            "bio": document.getElementById("bio").value || "",
            "linkedin": document.getElementById("linkedin").value || "",
            "github": document.getElementById("github").balue || ""
        }

        newForm.experience = this.state.experienceArray;

        newForm.education = this.state.educationArray;

        newForm.skills = this.state.skillArray;

        newForm.interests = this.state.interestArray;

        newForm.awards = this.state.awardArray;

        fetch("http://localhost:3000/generate-zip", {body: newForm, method: "post"} )
            .then((res)=>res.json())
            .then((res)=>{
                console.log({res})
                /*if(window.confirm("Zip is ready. Download it ?")){
                    (window.open(`http://localhost:3000/download?token=${res.token}`, '_blank')).focus();
                }*/
                document.querySelector("#to-display").innerHTML = `
                                <div className="form-group">
                                    <h3 className="mb-5">Le fichier est prêt.</h3>
                                    <button type="submit" className="btn btn-outline-secondary pull-right" onClick="window.open('http://localhost:3000/download?token=${res.token}', '_blank')">Download</button>
                                </div>`;
            });

    };

    render() {
        return(
            <div className="App">
                <nav className={"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"} id="sideNav">
                    <a className="navbar-brand js-scroll-trigger" href="#about">
                        <span className="d-block d-lg-none">Williams</span>
                        <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={devImg} title="Développeur" alt="Développeur"></img>
                    </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    </div>
                </nav>
                <div className="container-fluid p-0">
                    <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="generate">
                        <div className="w-100">
                            <h2 className="mb-5">Generation de CV ⚙️</h2>
                            <form className="row" id="myForm">
                                <div className="col-12 col-xs-10 col-xs-offset-1 col-md-offset-0" id="to-display">
                                    <div className="form-group">
                                        <h3 className="mb-5">Infos personnelles</h3>
                                        <input id="firstName" placeholder="Nom" className="form-control" maxLength="80" name="firstName" size="20" type="text" required/>
                                        <input id="lastName" placeholder="Prenom" className="form-control" maxLength="80" name="lastName" size="20" type="text" required/>
                                        <input id="city" placeholder="Ville" className="form-control" maxLength="80" name="city" size="20" type="text" required/>
                                        <input id="email" placeholder="Email" className="form-control" maxLength="80" name="email" size="20" type="email" required/>
                                        <input id="poste" placeholder="Poste" className="form-control" maxLength="80" name="poste" size="20" type="text" required/>
                                        <textarea id="bio" placeholder="Bio" className="form-control" rows="5" cols="33"/>
                                        <input id="linkedin" placeholder="Url linkedin" className="form-control" name="linkedin" size="20" type="url"/>
                                        <input id="github" placeholder="Url github" className="form-control" name="github" size="20" type="url"/>
                                    </div>
                                    <div className="form-group">
                                        <h3 className="mb-5">Experiences</h3>
                                        <div className="form-group">
                                            <input id="position" placeholder="Poste" className="form-control" name="position" size="20" type="text"/>
                                            <input id="organization" placeholder="Organisation" className="form-control" name="organization" size="20" type="text"/>
                                            <input id="city" placeholder="Ville" className="form-control" name="city" size="20" type="text"/>
                                            <input id="contractType" placeholder="Type de contrat" className="form-control" name="contractType" size="20" type="text"/>
                                            <textarea id="aboutWork" placeholder="Missions réalisées (revenir à la ligne)" className="form-control" rows="5" cols="33"/>
                                            <button onClick={(e)=>this.addElement(e,TYPE_EXP)}>+</button>
                                        </div>
                                        <ul className="border">
                                            {this.state.experienceArray.map((item, index) => (
                                                <li key={index}>{JSON.stringify(item)}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="form-group">
                                        <h3 className="mb-5">Diplomes</h3>
                                        <div className="form-group">
                                            <input id="university" placeholder="Ecole" className="form-control" name="university" size="20" type="text"/>
                                             <input id="degree" placeholder="Intilulé" className="form-control" name="degree" size="20" type="text"/>
                                             <input id="fromDate" placeholder="Date de début" className="form-control" name="fromDate" size="20" type="text"/>
                                            <input id="toDate" placeholder="Date de fin" className="form-control" name="toDate" size="20" type="text"/>
                                            <input id="logoUrl" placeholder="Url logo de l'école" className="form-control" name="logoUrl" size="20" type="uri"/>
                                            <input id="siteUrl" placeholder="Site de l'école" className="form-control" name="siteUrl" size="20" type="text"/>
                                            <button onClick={(e)=>this.addElement(e,TYPE_EDU)}>+</button>
                                        </div>
                                        <ul className="border">
                                            {this.state.educationArray.map((item, index) => (
                                                <li key={index}>{JSON.stringify(item)}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="form-group">
                                        <h3 className="mb-5">Certifications</h3>
                                        <div className="form-group">
                                            <input id="linkedin" placeholder="Url linkedin" className="form-control" name="linkedin" size="20" type="text"/>
                                            <button onClick={(e)=>this.addElement(e,TYPE_AWA)}>+</button>
                                        </div>
                                        <ul className="border">
                                            {this.state.awardArray.map((item, index) => (
                                                <li key={index}>{JSON.stringify(item)}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="form-group">
                                        <h3 className="mb-5">Competence</h3>
                                        <div className="form-group">
                                            <select id="skillType" className="form-control">
                                                <option value="hardskill">Technique</option>
                                                <option value="softskill">Softskill</option>
                                                <option value="Language">Langue</option>
                                            </select>
                                            <input id="name" placeholder="Nom" className="form-control" name="nom" size="20" type="text"/>
                                            <textarea id="article" placeholder="Explication (facultatif)" className="form-control" rows="4" cols="33"/>
                                            <button onClick={(e)=>this.addElement(e,TYPE_SKI)}>+</button>
                                        </div>
                                        <ul className="border">
                                            {this.state.skillArray.map((item, index) => (
                                                <li key={index}>{JSON.stringify(item)}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="form-group">
                                        <h3 className="mb-5">Centre d'interet</h3>
                                        <div className="form-group">
                                            <input id="title" placeholder="Titre" className="form-control" name="title" size="20" type="text"/>
                                            <input id="logoUrl" placeholder="Url logo du centre d'interet" className="form-control" name="logoUrl" size="20" type="uri"/>
                                            <textarea id="paragraphe" placeholder="Explication" className="form-control" rows="4" cols="33"/>
                                            <button onClick={(e)=>this.addElement(e,TYPE_INT)}>+</button>
                                        </div>
                                        <ul className="border">
                                            {this.state.interestArray.map((item, index) => (
                                                <li key={index}>{JSON.stringify(item)}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button type="submit" className="btn btn-outline-secondary pull-right" onClick={this.handleClick}>Generate</button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Projects;
