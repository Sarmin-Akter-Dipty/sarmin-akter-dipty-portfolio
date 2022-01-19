import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import projects1 from '../Images/photo-1492562080023-ab3db95bfbce.jpg'
import projects2 from '../Images/photo-1506794778202-cad84cf45f1d.jpg'
import projects3 from '../Images/photo-1530268729831-4b0b9e170218.jpg'
import projects4 from '../Images/photo-1584598788860-2695a3a6c874.jpg'
import projects5 from '../Images/photo-1500648767791-00dcc994a43e.jpg'
import projects6 from '../Images/photo-1507003211169-0a1dd7228f2d.jpg'
import './Review.css'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            // speed: 20000,
            // autoplaySpeed: 200,
        };
        return (
            <div className="container mt-5">
                <h3 className="main-info pb-5 mt-5">Happy Clients_</h3>
                <Slider {...settings}>

                    <div className="">
                        <Card className='border border-dark border-top-0 border-bottom-0 back-ground'>
                            <Card.Img variant="top" className="review-width  back-ground" src={projects2} />
                            <Card.Body className='back-ground'>
                                <Card.Title className="text-light">Ashif Shekh</Card.Title>

                                <small className="text-light review-size">  You really have done a great job. Your work on developing my website was truely remarkable.</small>

                                <h6 className="text-light">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </h6>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>

                        <Card className='border border-dark border-top-0 border-bottom-0 back-ground'>
                            <Card.Img variant="top" className="review-width back-ground" src={projects3} />
                            <Card.Body className='back-ground'>
                                <Card.Title className="text-light">Jamal Chowdhory</Card.Title>

                                <small className="text-light review-size">It was such a great experience to work with you Sarmin.You really have done a great job.</small>

                                <h6 className="text-light">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </h6>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className='border border-dark border-top-0 border-bottom-0 back-ground'>
                            <Card.Img variant="top" className="review-width" src={projects4} />
                            <Card.Body className='back-ground'>
                                <Card.Title className="text-light">James Herry</Card.Title>

                                <small className="text-light review-size">Wish you all the best For Your upcoming golden era. May Allah bless you Sis..............</small>

                                <h6 className="text-light">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />

                                </h6>
                            </Card.Body>
                        </Card>

                    </div>
                    <div>

                        <Card className='border border-dark border-top-0 border-bottom-0 back-ground'>
                            <Card.Img variant="top" className="review-width" src={projects5} />
                            <Card.Body className='back-ground'>
                                <Card.Title className="text-light">Jhon Petar</Card.Title>

                                <small className="text-light review-size">He thing that makes you Unique is you are really passionate about developing websites.A bright future awaits for you</small>

                                <h6 className="text-light">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />

                                </h6>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>

                        <Card className='border border-dark border-top-0 border-bottom-0 back-ground'>
                            <Card.Img variant="top" className="review-width" src={projects6} />
                            <Card.Body className='back-ground'>
                                <Card.Title className="text-light">Jemi Linda</Card.Title>

                                <small className="text-light review-size">I read your resume. I looked around. I looked at the works carefully. Blogs, websites, videos, apps everything. </small>

                                <h6 className="text-light">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </h6>
                            </Card.Body>
                        </Card>
                    </div>

                </Slider>
            </div>
        );
    }
}