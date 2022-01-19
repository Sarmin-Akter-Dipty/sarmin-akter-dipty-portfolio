import React from 'react';
import { Card, NavLink } from 'react-bootstrap';
import projects1 from '../Images/image/3-devices-white.png'
import projects2 from '../Images/image/3-devices-white2.png'
import projects3 from '../Images/image/undraw_moving_forward_lhhd.svg'
import projects4 from '../Images/image/3-devices-white.png'
import './HomeProjects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faExchangeAlt, faExternalLinkAlt, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const HomeProjects = () => {
    return (
        <div className="margin-1 mx-5">
            <div className="row d-flex justify-content-center">

                <div className="col-md-4 cart" data-aos="fade-down-right">
                    <Card className='border-0 card'>
                        <Card.Img variant="top" className="img-height" src={projects1} />
                        <Card.Body className='back-ground'>
                            <Card.Title className="main-info-1">Orchos-Shoes</Card.Title>
                            <a href='
                       https://orchos-shoes-320b7.web.app/'
                                target='_blank' className=" main-info-1"><FontAwesomeIcon icon={faLocationArrow} />live Site</a>
                            <a href='
                       https://github.com/Sarmin-Akter-Dipty/Orchos-shoes'
                                target='_blank' className="main-info-1 mx-2 "><FontAwesomeIcon icon={faCode} />Client Site</a>
                            <a href='
                       https://github.com/Sarmin-Akter-Dipty/Orchos-shoes-server-site'
                                target='_blank' className="main-info-1"><FontAwesomeIcon icon={faExternalLinkAlt} />Server Site</a>
                        </Card.Body>
                        <Card.Text className='back-ground cardText'>Firebase || React || API || MongoDB</Card.Text>
                    </Card>
                </div>
                <div className="col-md-4 cart" data-aos="zoom-in-up">
                    <Card className='border-0 card'>
                        <Card.Img variant="top" className="img-height" src={projects2} />
                        <Card.Body className='back-ground'>
                            <Card.Title className="main-info-1">MobileHut</Card.Title>
                            <a href='
                       https://p-hero-team-project.web.app/'
                                target='_blank' className=" main-info-1"><FontAwesomeIcon icon={faLocationArrow} />live Site</a>
                            <a href='
                     https://github.com/Sarmin-Akter-Dipty/p-hero-team-project'
                                target='_blank' className="main-info-1 mx-2 "><FontAwesomeIcon icon={faCode} />Client Site</a>
                            <a href='
                       https://github.com/Sarmin-Akter-Dipty/p-hero-team-project-server-site'
                                target='_blank' className="main-info-1"><FontAwesomeIcon icon={faExternalLinkAlt} />Server Site</a>
                        </Card.Body>
                        <Card.Text className='back-ground cardText'>React || Heroku || API || MongoDB</Card.Text>
                    </Card>
                </div>
                <div className="col-md-4 cart" data-aos="fade-down-left">
                    <Card className='border-0 card'>
                        <Card.Img variant="top" className="img-height" src={projects3} />
                        <Card.Body className='back-ground'>
                            <Link to='/projects' className="text text-1">See More...</Link>
                            <Card.Text className='back-ground cardText'>
                                Dear , click to see my all completed and responsive projects
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </div>





            </div>
        </div>
    );
};

export default HomeProjects;

