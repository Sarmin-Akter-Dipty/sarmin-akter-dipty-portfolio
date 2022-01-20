import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import vscode from '../Images/skills/vscode.png'
import GitHub from '../Images/skills/github.png'
import GitBash from '../Images/skills/gitbash.png'
import Heroku from '../Images/skills/heroku.png'
import Figma from '../Images/skills/figma.png'
import Devtool from '../Images/skills/devtool.png'
import Footer from '../Footer/Footer';

const Tools = () => {
    return (
        <div className=" back-ground p-5">
            <Header></Header>
            <div className='container-fluid d-flex justify-content-center align-items-center my-5'>
                <Link to="/skills" className="btn-2">All Skills</Link>
                <Link to="/design" className="btn-2 btn-margin">Design</Link>
                <Link to="/development" className="btn-2 btn-margin ">Development
                </Link>
                <Link to="/Tools" className="btn-2 btn-margin">Tools
                </Link>
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

export default Tools;