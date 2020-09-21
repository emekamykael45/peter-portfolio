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
                            <h3 className="top-text">WORK EXPERIENCES</h3>
                            <div className="rule left">
                                <hr className="top" />
                                <hr className="bottom" />
                            </div>
                            <p className="sub-top-text">I am information technology enthusuast. I studued law and all its lies. I have a good heart and a good head. I am information technology enthusuast. I studued law and all its lies. I have a good heart and a good head.</p>

                            <div className="boxes">
                                <div className="box">
                                    <h5>June 2019 - Sept 2020</h5>
                                    <h4>Back-End Web Developer</h4>
                                    <h6>Adobe Inc.</h6>

                                    <p>- This is where things happen ontop the matter and its small small things around her now.</p>
                                    <p>- This is where things happen ontop the matter and its small small things around her now.</p>
                                </div>
                                <div className="box">
                                    <h5>June 2019 - Sept 2020</h5>
                                    <h4>Back-End Web Developer</h4>
                                    <h6>Adobe Inc.</h6>

                                    <p>- This is where things happen ontop the matter and its small small things around her now.</p>
                                    <p>- This is where things happen ontop the matter and its small small things around her now.</p>
                                </div>
                                <div className="box">
                                    <h5>June 2019 - Sept 2020</h5>
                                    <h4>Back-End Web Developer</h4>
                                    <h6>Adobe Inc.</h6>

                                    <p>- This is where things happen ontop the matter and its small small things around her now.</p>
                                    <p>- This is where things happen ontop the matter and its small small things around her now.</p>
                                </div>
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
