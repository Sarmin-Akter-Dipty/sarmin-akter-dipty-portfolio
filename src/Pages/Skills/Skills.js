import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Skills.css'
import html from '../Images/skills/html.png'
import CSS from '../Images/skills/css.png'
import Bootstrap from '../Images/skills/icons8-bootstrap-96.png'
import ReactBootstrap from '../Images/skills/react-bootstrap.png'
import TailwindCSS from '../Images/skills/tailwindcss.png'
import MaterialUI from '../Images/skills/icons8-material-ui-96.png'
import Javascript from '../Images/skills/javascript.png'
import NodeJS from '../Images/skills/nodejs.png'
import NodeExpress from '../Images/skills/node-express.png'
import ReactJS from '../Images/skills/react.png'
import ReactRouter from '../Images/skills/react-router.png'
import Firebase from '../Images/skills/firebase.png'
import JWTToken from '../Images/skills/JWT-token.png'
import MongoDb from '../Images/skills/mongodb.png'
import CRUDoperation from '../Images/skills/server.png'
import API from '../Images/skills/api.png'
import Debugging from '../Images/skills/debugging.png'
import vscode from '../Images/skills/vscode.png'
import GitHub from '../Images/skills/github.png'
import GitBash from '../Images/skills/gitbash.png'
import Heroku from '../Images/skills/heroku.png'
import Figma from '../Images/skills/figma.png'
import Devtool from '../Images/skills/devtool.png'


const Skills = () => {
    return (
        <div className='back-ground'>
            <Header></Header>
            <div className='container d-lg-flex justify-content-center align-items-center my-5'>
                <Link to="/skills" className="btn-2 mx-2">All Skills</Link>
                <Link to="/design" className="btn-2">Design</Link>
                <Link to="/development" className="btn-2 mx-2">Development
                </Link>
                <Link to="/Tools" className="btn-2">Tools
                </Link>
            </div>
            <div>

                <div className="container">
                    <div className="container">
                        <div className="row container d-lg-flex justify-content-center align-items-center">
                            <h1 className='main-info-1 main-info-3' data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom">Design</h1>
                            <div className="col-md-4 cart-1" data-aos="zoom-in">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={html} />
                                        <Card.Title className="main-info-2 font-size">HTML</Card.Title>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-4 cart-1" data-aos="zoom-in">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={CSS} />
                                        <Card.Title className="main-info-2 font-size">CSS</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-4 cart-1" data-aos="zoom-in" >
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={Bootstrap} />
                                        <Card.Title className="main-info-2 font-size">Bootstrap</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="container">
                        <div className="row container d-lg-flex justify-content-center align-items-center ">
                            <div className="col-md-4 cart-1" data-aos="zoom-in">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={ReactBootstrap} />
                                        <Card.Title className="main-info-2 font-size">React Bootstrap</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-4 cart-1" data-aos="zoom-in">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={TailwindCSS} />
                                        <Card.Title className="main-info-2 font-size">Tailwind CSS</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-4 cart-1" data-aos="zoom-in">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={MaterialUI} />
                                        <Card.Title className="main-info-2 font-size">Material UI</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div>

                <div className="container">
                    <div className="container">
                        <div className="row container d-lg-flex justify-content-center align-items-center" >
                            <h1 className='main-info-1 main-info-3' data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom">Web Development
                            </h1>
                            <div className="col-md-4 cart-1" data-aos="zoom-in">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={Javascript} />
                                        <Card.Title className="main-info-2 font-size">Javascript</Card.Title>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-4 cart-1" data-aos="zoom-in">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={NodeJS} />
                                        <Card.Title className="main-info-2 font-size">Node JS</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-4 cart-1" data-aos="zoom-in">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={NodeExpress} />
                                        <Card.Title className="main-info-2 font-size">Node Express</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="container">
                        <div className="row container d-lg-flex justify-content-center align-items-center ">
                            <div className="col-md-4 cart-1" data-aos="zoom-in">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={ReactJS} />
                                        <Card.Title className="main-info-2 font-size">React JS</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-4 cart-1" data-aos="zoom-in">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={ReactRouter} />
                                        <Card.Title className="main-info-2 font-size">React Router</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-4 cart-1" data-aos="zoom-in">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={Firebase} />
                                        <Card.Title className="main-info-2 font-size">Firebase</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="container">
                        <div className="row container d-lg-flex justify-content-center align-items-center ">
                            <div className="col-md-4 cart-1" data-aos="zoom-in">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={JWTToken} />
                                        <Card.Title className="main-info-2 font-size">JWT Token</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-4 cart-1" data-aos="zoom-in">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={MongoDb} />
                                        <Card.Title className="main-info-2 font-size">MongoDb</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-4 cart-1" data-aos="zoom-in">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={CRUDoperation} />
                                        <Card.Title className="main-info-2 font-size">CRUD operation</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="container">
                        <div className="row container d-lg-flex justify-content-center align-items-center ">
                            <div className="col-md-4 cart-1" data-aos="zoom-in">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={API} />
                                        <Card.Title className="main-info-2 font-size">API</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-md-4 cart-1" data-aos="zoom-in">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={Debugging} />
                                        <Card.Title className="main-info-2 font-size">Debugging</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div>

                <div className="container">
                    <div className="container">
                        <div className="row container d-lg-flex justify-content-center align-items-center" data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                            <h1 className='main-info-1 main-info-3' data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom">Tools</h1>
                            <div className="col-md-4 cart-1" data-aos="zoom-in">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={vscode} />
                                        <Card.Title className="main-info-2 font-size">VS Code</Card.Title>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-4 cart-1" data-aos="zoom-in">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={GitHub} />
                                        <Card.Title className="main-info-2 font-size">GitHub</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-4 cart-1" data-aos="zoom-in">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={GitBash} />
                                        <Card.Title className="main-info-2 font-size">Git Bash</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="container">
                        <div className="row container d-lg-flex justify-content-center align-items-center ">
                            <div className="col-md-4 cart-1" data-aos="zoom-in">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={Heroku} />
                                        <Card.Title className="main-info-2 font-size">Heroku</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-4 cart-1" data-aos="zoom-in">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={Figma} />
                                        <Card.Title className="main-info-2 font-size">Figma</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-4 cart-1" data-aos="zoom-in">
                                <Card className='border-0'>
                                    <Card.Body className='back-ground'>
                                        <Card.Img variant="top" className="work-image skill-img" src={Devtool} />
                                        <Card.Title className="main-info-2 font-size">Dev tool</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Skills;