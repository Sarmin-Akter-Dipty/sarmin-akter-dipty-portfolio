import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import html from '../Images/skills/html.png'
import CSS from '../Images/skills/css.png'
import Bootstrap from '../Images/skills/icons8-bootstrap-96.png'
import ReactBootstrap from '../Images/skills/react-bootstrap.png'
import TailwindCSS from '../Images/skills/tailwindcss.png'
import MaterialUI from '../Images/skills/icons8-material-ui-96.png'

const SkillsProjects = () => {
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

            <Footer></Footer>
        </div>

    );
};

export default SkillsProjects;