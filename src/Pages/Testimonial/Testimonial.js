import React from 'react';
import './Testimonial.css';
import projects1 from '../Images/photo-1492562080023-ab3db95bfbce.jpg'
import projects2 from '../Images/photo-1506794778202-cad84cf45f1d.jpg'
import projects3 from '../Images/photo-1530268729831-4b0b9e170218.jpg'
import projects4 from '../Images/photo-1584598788860-2695a3a6c874.jpg'
import projects5 from '../Images/photo-1500648767791-00dcc994a43e.jpg'
import projects6 from '../Images/photo-1507003211169-0a1dd7228f2d.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonial = () => {
    return (
        <section id="Testimonials" className="container">
            <h3 className=" main-info-1 align-item" data-aos="zoom-in">Testimonial's</h3>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" data-aos="zoom-in-up">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={projects5} className="d-block" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <h4 className="text-light">Ashif Shekh</h4>
                            <small className="text-light review-size">  You really have done a great job. Your work on developing my website was truely remarkable.</small>


                            <h5 className="text-light">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />

                            </h5>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={projects6} className="d-block" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <h4 className="text-light">Thea Linde</h4>
                            <small className="text-light review-size">It was such a great experience to work with you Sarmin.You really have done a great job.</small>

                            <h4 className="text-light">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={projects2} className="d-block" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <h4 className="text-light">James Herry</h4>
                            <small className="text-light review-size">Wish you all the best For Your upcoming golden era. May Allah bless you Sis..............</small>

                            <h5 className="text-light">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />

                            </h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
};

export default Testimonial;