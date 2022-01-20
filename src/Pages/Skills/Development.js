import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
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
const Development = () => {
    return (
        <div className=" back-ground p-5 ">
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

            <Footer></Footer>
        </div>
    );
};

export default Development;