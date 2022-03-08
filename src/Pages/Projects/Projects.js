import React, { Component } from "react";
import Slider from "react-slick";
import { Card } from 'react-bootstrap';
import projects1 from '../Images/image/3-devices-white.png'
import projects2 from '../Images/image/3-devices-white2.png'
import projects3 from '../Images/image/traveliana.png'
import projects4 from '../Images/image/portfolio.png'
import './Projects.css'
import Footer from '../Footer/Footer';
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faExternalLinkAlt, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 20000,
            autoplaySpeed: 200,
            cssEase: "linear"
        };
        return (
            <div className="back-ground">
                <Header></Header>
                <div className="container p-4">
                    <h2 className="text-light p-5">All Completed Projects</h2>
                    <Slider {...settings}>
                        <Card className='border-0 card back-ground'>
                            <Card.Img variant="top" className="" src={projects1} />
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


                        <Card className='border-0 card back-ground'>
                            <Card.Img variant="top" className="" src={projects2} />
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
                        <Card className='border-0 card back-ground'>
                            <Card.Img variant="top" className="" src={projects3} />
                            <Card.Body className='back-ground'>
                                <Card.Title className="main-info-1">Traveliana</Card.Title>
                                <a href='
                       https://traveliana-com.web.app/'
                                    target='_blank' className=" main-info-1"><FontAwesomeIcon icon={faLocationArrow} />live Site</a>
                                <a href='
                     https://github.com/Sarmin-Akter-Dipty/Traveliana-client-site'
                                    target='_blank' className="main-info-1 mx-2 "><FontAwesomeIcon icon={faCode} />Client Site</a>
                                <a href='
                       https://github.com/Sarmin-Akter-Dipty/Traveliana-server-site'
                                    target='_blank' className="main-info-1"><FontAwesomeIcon icon={faExternalLinkAlt} />Server Site</a>
                            </Card.Body>
                            <Card.Text className='back-ground cardText'>React || Heroku || API || MongoDB</Card.Text>
                        </Card>
                        <Card className='border-0 card back-ground'>
                            <Card.Img variant="top" className="" src={projects4} />
                            <Card.Body className='back-ground'>
                                <Card.Title className="main-info-1">Portfolio</Card.Title>
                                <a href='
                       https://sarmin-akter-dipty-portfolio.netlify.app/'
                                    target='_blank' className=" main-info-1"><FontAwesomeIcon icon={faLocationArrow} />live Site</a>
                                <a href='
                     https://github.com/Sarmin-Akter-Dipty/sarmin-akter-dipty-portfolio'
                                    target='_blank' className="main-info-1 mx-2 "><FontAwesomeIcon icon={faCode} />Client Site</a>

                            </Card.Body>
                            <Card.Text className='back-ground cardText'>React || Heroku || API || MongoDB</Card.Text>
                        </Card>
                        <Card className='border-0 card back-ground'>
                            <Card.Img variant="top" className="" src={projects1} />
                            <Card.Body className='back-ground'>
                                <Card.Title className="main-info-1">Orchos Shoes</Card.Title>
                                <a href='
                       https://orchos-shoes-320b7.web.app/'
                                    target='_blank' className=" main-info-1"><FontAwesomeIcon icon={faLocationArrow} />live Site</a>
                                <a href='https://github.com/Sarmin-Akter-Dipty/Orchos-shoes'
                                    target='_blank' className="main-info-1 mx-2 "><FontAwesomeIcon icon={faCode} />Client Site</a>
                                <a href='
                       https://github.com/Sarmin-Akter-Dipty/Orchos-shoes-server-site'
                                    target='_blank' className="main-info-1"><FontAwesomeIcon icon={faExternalLinkAlt} />Server Site</a>
                            </Card.Body>
                            <Card.Text className='back-ground cardText'>React || Heroku || API || MongoDB</Card.Text>
                        </Card>
                        <Card className='border-0 card back-ground'>
                            <Card.Img variant="top" className="" src={projects2} />
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

                        <Card className='border-0 card back-ground'>
                            <Card.Img variant="top" className="" src={projects3} />
                            <Card.Body className='back-ground'>
                                <Card.Title className="main-info-1">Traveliana</Card.Title>
                                <a href='
                       https://traveliana-com.web.app/'
                                    target='_blank' className=" main-info-1"><FontAwesomeIcon icon={faLocationArrow} />live Site</a>
                                <a href='
                     https://github.com/Sarmin-Akter-Dipty/Traveliana-client-site'
                                    target='_blank' className="main-info-1 mx-2 "><FontAwesomeIcon icon={faCode} />Client Site</a>
                                <a href='
                       https://github.com/Sarmin-Akter-Dipty/Traveliana-server-site'
                                    target='_blank' className="main-info-1"><FontAwesomeIcon icon={faExternalLinkAlt} />Server Site</a>
                            </Card.Body>
                            <Card.Text className='back-ground cardText'>React || Heroku || API || MongoDB</Card.Text>
                        </Card>



                    </Slider>
                    <Footer></Footer>

                </div>

            </div>
        );
    }
}