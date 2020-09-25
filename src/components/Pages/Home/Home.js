/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/Contact/Contact";
import Spinner from "../components/Spinner/Spinner";
import Error from "../components/Error/Error";
import { agriculture,
    angular,
    banking,
    bootstrap,
    cplus,
    cordova,
    css,
    custom,
    encryption,
    fullstack,
    gaming,
    html,
    infrastructure,
    inventory,
    ionic,
    jasmine,
    java,
    javascript,
    jquery,
    karma,
    laravel,
    lending,
    manufacturing,
    mobile,
    node,
    objective,
    phaser,
    php,
    plugins,
    python,
    react,
    shopping,
    socket,
    swift,
    system
} from "../../../assets/index";
import "./Home.css";


class Home extends Component {
    state = {
        isLoading: false,
        showError: false,
        errorMessage: ""
    };

    componentDidMount = () => {
        window.scroll(0, 0);
    };
    
    scrollToPortfolio = () => {
        const anchor = document.querySelector('#portfolio');
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    scrollToContact = () => {
        const anchor = document.querySelector('#contact');
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };


    render = () => {

        const { isLoading, showError, errorMessage } = this.state;
        const location = this.props.location.hash;

        const solutions = [
            { icon: banking, name: 'Banking' },
            { icon: shopping, name: 'E-commerce' },
            { icon: gaming, name: 'Gaming' },
            { icon: infrastructure, name: 'Infrastructure' },
            { icon: manufacturing, name: 'Manufacturing' },
            { icon: agriculture, name: 'Agriculture' },
            { icon: lending, name: 'Lending' },
            { icon: system, name: 'System Analysis' },
            { icon: encryption, name: 'Encryption' },
            { icon: plugins, name: 'Hybrid App Plugins' },
            { icon: plugins, name: 'Wordpress Plugins' },
            { icon: plugins, name: 'Magneto Plugins' },
            { icon: inventory, name: 'Inventory Management' },
            { icon: custom, name: 'Custom Software' }
        ];

        const skills = [
            { icon: python, name: 'Python' },
            { icon: cplus, name: 'C++' },
            { icon: java, name: 'Java' },
            { icon: html, name: 'HTML' },
            { icon: css, name: 'CSS' },
            { icon: javascript, name: 'JavaScript' },
            { icon: php, name: 'PHP' },
            { icon: swift, name: 'Swift' },
            { icon: objective, name: 'Objective C' },
            { icon: bootstrap, name: 'Bootstrap' },
            // { icon: '', name: 'SMF' },
            { icon: laravel, name: 'Laravel' },
            { icon: ionic, name: 'Ionic' },
            { icon: jquery, name: 'JQuery' },
            { icon: angular, name: 'AngularJS' },
            { icon: react, name: 'ReactJS' },
            { icon: phaser, name: 'Phaser' },
            { icon: node, name: 'NodeJS' },
            { icon: socket, name: 'Socket.io' },
            { icon: jasmine, name: 'Jasmine' },
            { icon: karma, name: 'Karma' },
            { icon: react, name: 'React Native' },
            { icon: cordova, name: 'Cordova' }
        ];

        const experiences = [
            {
                start_date: '2020',
                end_date: null,
                position: 'React and Laravel Developer (Remote)',
                company: 'PictureWorks Pty',
                description: 'Pictureworks is a company that is primarily focused on the automation of processes in the photo and souvenir producing business. As it was a remote job, I learnt the importance of teamwork and use of collaboration tools.',
                projects: [
                    'Zensmart design system (React)',
                    'Zensmart User Interfaces (React)',
                    'Zensmart Analytics (React and Laravel)'
                ]
            },
            {
                start_date: '2019',
                end_date: '2020',
                position: 'Hybrid and iOS Developer / Senior Developer',
                company: 'Vela Business Solution',
                description: 'At Vela, I developed Hybrid app plugins as well as native iOS applications using Swift and Objective-C. The plugins were built for different frameworks. Strict adherence to Version Control best practices were applied. I developed iOS applications for Jaiz Bank and Mint Financial Technology.',
                projects: [
                    'React Native plugins (iOS and Android)',
                    'Cordova/Ionic plugins (iOS and Android)',
                    'iOS native applications for financial institutions'
                ]
            },
            {
                projects: [
                    'Porkoyum (porkoyum.com)',
                    'Porkmoney (porkmoney.com)',
                    'Proctorer (proctorer.com)',
                    'WorkatDubai (workatdubai.com)',
                    'Osei Consult (oseiconsult.com)',
                    'HR mobile app',
                    'Femfumds (femfunds.com)',
                    'Inventory management System'
                ]
            },
            {
                start_date: '2018',
                end_date: 2019,
                position: 'Team Lead / Senior Developer (LandLagos)',
                company: 'Divergent Enterprise',
                description: 'landlagos.com - LandLagos pegs the inflation rate of property to allow for more people to be able to afford them in due time. Landlagos sees that a Nigerian worker become an owner and a decision in their own time',
                projects: null
            },
            {
                start_date: '2018',
                end_date: 2019,
                position: 'Team Lead / Senior Developer (Porkoyum)',
                company: 'Divergent Enterprise',
                description: 'porkoyum.com - PorkoYum is the e-commerce subsidiary of PorkMoney that completes the business cycle. At PorkoYum, end-users will be able to procure the chopped, processed and packaged pig produce and by-products.',
                projects: null
            },
            {
                start_date: '2018',
                end_date: 2019,
                position: 'Team Lead / Senior Developer (Porkmoney)',
                company: 'Divergent Enterprise',
                description: 'porkmoney.com - Porkmoney.',
                projects: null
            },
            {
                start_date: '2018',
                end_date: 2019,
                position: 'Team Lead / Senior Developer (Proctorer)',
                company: 'Divergent Enterprise',
                description: 'proctorer.com - Proctorer.',
                projects: null
            },
            {
                start_date: '2018',
                end_date: 2019,
                position: 'Team Lead / Senior Developer (WorkatDubai)',
                company: 'Divergent Enterprise',
                description: 'workatdubai.com - WorkatDubai.',
                projects: null
            },
            {
                start_date: '2018',
                end_date: 2019,
                position: 'Team Lead / Senior Developer (WorkatDubai)',
                company: 'Divergent Enterprise',
                description: 'workatdubai.com - WorkatDubai.',
                projects: null
            },
            {
                start_date: '2018',
                position: 'Developer (Frontend)',
                company: 'Kiakia FX',
                description: 'KiaKiaFX is an innovative and insightful company that deals with foreign exchange online. During my time at KiaKiaFX I worked on the frontend part of things as well as server configuration, setup and deployment.',
                projects: null
            },
            {
                start_date: '2018',
                position: 'Team Lead, Senior Developer (Freelance)',
                company: 'E-Vents',
                description: 'The position entailed managing a team of developers, liaising with clients, designing the application as well being actively involved in programming. I worked with a Nodejs server on a VPS, worked with socket.io and developed an android application with Ionic which uses Angularjs.',
                projects: null
            },
            {
                start_date: '2018',
                position: 'Designer, System Analyst and Programmer (Freelance)',
                company: 'Dornnie Private School',
                description: 'The project is a school management software built with Laravel. The job was a freelance effort and was handled alone. The project involved setting up mailing, handling sessions and a host of other functions.',
                projects: null
            },
            {
                start_date: '2018',
                position: 'Developer (Freelance)',
                company: 'Hospital Management System',
                description: 'The project is a hospital management software built with Java. The job involved collating data, planning the system, designing it, developing and testing it for soundness.',
                projects: null
            },
            {
                start_date: '2017',
                position: 'Designer, System Analyst and Programmer (Freelance)',
                company: 'Stellar Dental Services',
                description: 'The job was a freelance effort and was handled alone it involved designing, developing and managing a website for a dental practitioner.',
                projects: null
            },
            {
                start_date: '2016',
                position: 'Designer, System Analyst and Programmer (Freelance)',
                company: 'Nigerian Genealogy',
                description: 'Worked as the primary designer, system analyst and programmer, the job was a solo job that involved planning, designing, developing, debugging and testing the website. The job also involved building a content management system for use by the owner/administrator of the website.',
                projects: null
            },
            {
                start_date: '2016',
                position: 'Designer, System Analyst and Programmer (Freelance)',
                company: 'Encrypt',
                description: 'Worked as the only designer, programmer and system analyst the position entailed planning, implementing and testing several worst case scenarios for the android application.',
                projects: null
            },
            {
                start_date: '2016',
                position: 'Designer, System Analyst and Programmer',
                company: 'Inventory Management System',
                description: 'This project involved developing an inventory management system for a client. The inventory management system kept track of a super markets stock and gave notifications when certain goods were low. The system also recommended the appropriate time to purchase goods.',
                projects: null
            }
        ];

        return (
            <>
                <Spinner show={isLoading} />
                {showError ? <Error errorMsg={errorMessage} /> : null}
                <div className="content">
                    
                    <Navbar location={location} />
                    <div className="home page">
                        <div id="home" className="banner">
                            <div className="left">
                                <h6>Hello World!</h6>
                                <h1>I am <span>Peter O. Okafor</span></h1>
                                <p>A Senior software engineer with a passion for bettering lives through technology.
                                    <br /><br />
                                    <span>{`<Committed /> | <Passionate /> | <Experienced />`}</span>
                                </p>
                                <div className="btn-actions">
                                    <Link className="btn btn-primary" to="/#portfolio" onClick={this.scrollToPortfolio}>See portfolio</Link>
                                    <Link className="btn btn-secondary" to="/#contact" onClick={this.scrollToContact}>Contact me</Link>
                                </div>
                            </div>
                            <div className="right"></div>
                        </div>

                        <div id="about" className="section-one section">
                            <div className="left">
                                <h3 className="top-text">INNOVATIVE SOLUTIONS TO BOOST YOUR CREATIVE PROJECTS</h3>
                                <div className="rule left">
                                    <hr className="top" />
                                    <hr className="bottom" />
                                </div>
                                <p className="sub-top-text">I am an information technology enthusiast. 
                                    A computer science graduate with varied work experience and a strong ability 
                                    to engage and help partners develop innovative solutions that aid growth.
                                </p>

                                <div className="boxes">
                                    <div className="box">
                                        <img src={fullstack} alt="" />
                                        <h6>Full Stack Web Development</h6>
                                    </div>
                                    <div className="box">
                                        <img src={mobile} alt="" />
                                        <h6>Mobile and Desktop App Development</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <img src="https://res.cloudinary.com/emekamykael45/image/upload/v1583156908/peter/etty-fidele-l5rez6X2m8k-unsplash_1_qlsz5f.png" alt="" />
                                <div className="info">
                                    <h3>13</h3>
                                    <h6>Years of</h6>
                                    <p>experience</p>
                                </div>
                            </div>
                        </div>

                        <div className="section">
                            <div className="section-two section">
                                <h3 className="top-text">SOLUTIONS</h3>
                                <div className="rule center">
                                    <hr className="top" />
                                    <hr className="bottom" />
                                </div>
                                <p className="sub-top-text center">I am information technology enthusuast. I studued law and all its lies. I have a good heart and a good head. I am information technology enthusuast.</p>

                                <div className="solutions-div">
                                    {solutions.map((item, i) => (
                                        <div key={i} className="item">
                                            <img src={item.icon} alt={item.name} />
                                            <h6>{item.name}</h6>
                                        </div>
                                    ))}
                                </div>

                                <div className="skills-div">
                                    {skills.map((item, i) => (
                                        <div key={i} className="item">
                                            <img src={item.icon} alt={item.name} />
                                            <h6>{item.name}</h6>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="section-three section">
                            <h3 className="top-text">PROFESSIONAL WORK EXPERIENCE</h3>
                            <div className="rule left">
                                <hr className="top" />
                                <hr className="bottom" />
                            </div>
                            <p className="sub-top-text">I am information technology enthusuast. I studued law and all its lies. I have a good heart and a good head. I am information technology enthusuast. I studued law and all its lies. I have a good heart and a good head.</p>

                            <div className="boxes">
                                {experiences.map((item, i) => (
                                    <div key={i} className="box">
                                        <h5>{item.start_date} {item.end_date && `- ${item.end_date}`}</h5>
                                        <h4>- {item.position}</h4>
                                        <h6>{item.company}</h6>
                                        <p>{item.description}</p>
                                        
                                        {item.projects && <>
                                            <h6>Projects:</h6>
                                            {item.projects.map((project, i) => (
                                                <p key={i} className="list">- {project}</p>
                                            ))}
                                        </>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="section">
                            <div className="section-four section">
                                <div className="left">
                                    I'm Available<br />
                                    for <span>Freelancing</span>
                                </div>
                                <div className="right">
                                    <Link className="btn btn-primary" to="/#contact" onClick={this.scrollToContact}>Contact me</Link>
                                    <Link className="btn btn-white" to="#">Download CV</Link>
                                </div>
                            </div>
                        </div>

                        <div className="section-five section">
                            <div className="section">
                                <h3 className="top-text">EDUCATION</h3>
                                <div className="rule left">
                                    <hr className="top" />
                                    <hr className="bottom" />
                                </div>
                                <p className="sub-top-text">I am information technology enthusuast. I studued law and all its lies. I have a good heart and a good head. I am information technology enthusuast. I studued law and all its lies. I have a good heart and a good head.</p>

                                <div className="boxes">
                                    <div className="box">
                                        <h5>June 2019 - Sept 2020</h5>
                                        <h4>B.Sc Computer Science</h4>
                                        <h6>Federal Polytechnic Nekede, Owerri</h6>
                                    </div>
                                    <div className="box">
                                        <h5>June 2019 - Sept 2020</h5>
                                        <h4>B.Sc Computer Science</h4>
                                        <h6>Federal Polytechnic Nekede, Owerri</h6>
                                    </div>
                                    <div className="box">
                                        <h5>June 2019 - Sept 2020</h5>
                                        <h4>B.Sc Computer Science</h4>
                                        <h6>Federal Polytechnic Nekede, Owerri</h6>
                                    </div>
                                    <div className="box">
                                        <h5>June 2019 - Sept 2020</h5>
                                        <h4>B.Sc Computer Science</h4>
                                        <h6>Federal Polytechnic Nekede, Owerri</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="portfolio" className="section-six section">
                            <h3 className="top-text center">PORTFOLIO</h3>
                            <div className="rule center">
                                <hr className="top" />
                                <hr className="bottom" />
                            </div>
                            <p className="sub-top-text center">I am information technology enthusuast. I studued law and all its lies. I have a good heart and a good head. I am information technology enthusuast. I studued law and all its lies. I have a good heart and a good head.</p>

                            <div className="bd-example">
                                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="https://res.cloudinary.com/emekamykael45/image/upload/v1583156909/peter/4742a6889200e6c574adec89054240b5_1_zfepyj.png" alt="" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <div className="info">
                                                    <h6>Project</h6>
                                                    <p>Bazuze</p>
                                                </div>
                                                <div className="info">
                                                    <h6>Description</h6>
                                                    <p>Bazuze is an international agri-tech firm with lots of bazuze into the agriculture an international agri-tech firm with lot.</p>
                                                </div>
                                                <a className="btn btn-white" href="https://www.google.com" target="_blank">See project</a>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://res.cloudinary.com/emekamykael45/image/upload/v1583753113/peter/797f3851e04705d04fb23a85ea77eb8f_1_r4huae.png" alt="" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <div className="info">
                                                    <h6>Project</h6>
                                                    <p>Bazuze</p>
                                                </div>
                                                <div className="info">
                                                    <h6>Description</h6>
                                                    <p>Bazuze is an international agri-tech firm with lots of bazuze into the agriculture an international agri-tech firm with lot.</p>
                                                </div>
                                                <a className="btn btn-white" href="https://www.google.com" target="_blank">See project</a>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://res.cloudinary.com/emekamykael45/image/upload/v1583753113/peter/24fc328a425d7925e1fc7bdb59ef69b6_1_kmgi8c.jpg" alt="" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <div className="info">
                                                    <h6>Project</h6>
                                                    <p>Bazuze</p>
                                                </div>
                                                <div className="info">
                                                    <h6>Description</h6>
                                                    <p>Bazuze is an international agri-tech firm with lots of bazuze into the agriculture an international agri-tech firm with lot.</p>
                                                </div>
                                                <a className="btn btn-white" href="https://www.google.com" target="_blank">See project</a>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Contact />

                </div>
            </>
        );
    }
}

export default Home;
