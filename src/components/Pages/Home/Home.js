/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
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
                ],
                links: [
                    { name: 'Jaiz Mobile Plus App', url: 'https://google.com' }
                ]
            },
            {
                start_date: '2018',
                end_date: 2019,
                position: 'Team Lead / Senior Developer (LandLagos)',
                company: 'Divergent Enterprise',
                description: 'LandLagos pegs the inflation rate of property to allow for more people to be able to afford them in due time. Landlagos sees that a Nigerian worker become an owner and a decision in their own time',
                projects: null,
                links: [
                    { name: 'LandLagos', url: 'https://landlagos.com' }
                ]
            },
            {
                start_date: '2018',
                end_date: 2019,
                position: 'Team Lead / Senior Developer (Porkoyum)',
                company: 'Divergent Enterprise',
                description: 'PorkoYum is the e-commerce subsidiary of PorkMoney that completes the business cycle. At PorkoYum, end-users will be able to procure the chopped, processed and packaged pig produce and by-products.',
                projects: null,
                links: [
                    { name: 'PorkoYum', url: 'https://porkoyum.com' }
                ]
            },
            {
                start_date: '2018',
                end_date: 2019,
                position: 'Team Lead / Senior Developer (Porkmoney)',
                company: 'Divergent Enterprise',
                description: 'Porkmoney is the leading pig farming enterprise in West Africa with an objective to welcome financial partnership from any interested persons around the world. Partners earn between 15-30% returns on their capitals based on plan of choice.',
                projects: null,
                links: [
                    { name: 'Porkmoney', url: 'https://porkmoney.com' }
                ]
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
                description: 'WorkatDubai care for your finances even after getting you a good paying job. WorkatDubai is helping to bridge the gap between semi to highly skilled individuals in Africa and job opportunities in Dubai.',
                projects: null,
                // links: [
                //     { name: 'WorkatDubai', url: 'https://workatdubai.com' }
                // ]
            },
            {
                start_date: '2018',
                end_date: 2019,
                position: 'Team Lead / Senior Developer (Osei Consult)',
                company: 'Divergent Enterprise',
                description: 'Osei Consult manages your marketing while you focus on your business. Using advanced marketing strategies & tactics, we drive traffic, leads & customers to your business.',
                projects: null,
                links: [
                    { name: 'Osei Consult', url: 'https://oseiconsulting.com/' }
                ]
            },
            {
                start_date: '2018',
                end_date: 2019,
                position: 'Team Lead / Senior Developer (HR mobile app)',
                company: 'Divergent Enterprise',
                description: 'HR mobile app.',
                projects: null
            },
            {
                start_date: '2018',
                end_date: 2019,
                position: 'Team Lead / Senior Developer (Femfunds)',
                company: 'Divergent Enterprise',
                description: 'Femfunds is a social enterprise that offers Interest free loans (with no collateral) and other resources to female owned growing businesses.',
                projects: null,
                links: [
                    { name: 'Femfunds', url: 'femfunds.org' }
                ]
            },
            {
                start_date: '2018',
                end_date: 2019,
                position: 'Team Lead / Senior Developer (Inventory management System)',
                company: 'Divergent Enterprise',
                description: 'Inventory management System.',
                projects: null
            },
            {
                start_date: '2018',
                position: 'Developer (Frontend)',
                company: 'Kiakia FX',
                description: 'KiaKiaFX is an innovative and insightful company that deals with foreign exchange online. During my time at KiaKiaFX I worked on the frontend part of things as well as server configuration, setup and deployment.',
                projects: null,
                links: [
                    { name: 'KiaKiaFX', url: 'https://kiakiafx.com' }
                ]
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
                projects: null,
                links: [
                    { name: 'Dornnie School', url: 'https://dornnieschool.com' }
                ]
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
                projects: null,
                links: [
                    { name: 'Stellar Dental Services', url: 'https://stellardental.com' }
                ]
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

                                        {item.links && <>
                                            <h6 className="links">Link(s):</h6>
                                            <p className="list">
                                                {item.links.map((link, i) => (
                                                    <> | <a key={i} href={`${link.url}`} target="_blank">{link.name}</a></>
                                                ))}
                                            </p>
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
                                <h3 className="top-text">PERSONAL ATTRIBUTES</h3>
                                <div className="rule left">
                                    <hr className="top" />
                                    <hr className="bottom" />
                                </div>
                                <br />
                                <div className="boxes">
                                    <div className="box">
                                        <h4>- Honest and Reliable</h4>
                                        <h6>Able to take on tasks with a high degree of responsibility due to strong morals and ethics ensuring honesty and reliability.</h6>
                                    </div>
                                    <div className="box">
                                        <h4>- Flexible</h4>
                                        <h6>Understands the need to remain flexible to support last-minute demands and changes. Comfortable with changing environments and situations, remaining flexible and adaptable.</h6>
                                    </div>
                                    <div className="box">
                                        <h4>- Time Management</h4>
                                        <h6>Dedicated to effectively prioritising and managing time by allocating tasks and activities and keeping track of them.</h6>
                                    </div>
                                    <div className="box">
                                        <h4>- Team Player</h4>
                                        <h6>Understands the need to work with a team and grasps the concept of team spirit and management of difference of opinions and techniques.</h6>
                                    </div>
                                    <div className="box">
                                        <h4>- Team Leader</h4>
                                        <h6> Efficient and effective leadership honed from a strong degree of responsibility and a need to get things done.</h6>
                                    </div>
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
